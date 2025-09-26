import logger from '#config/logger.js';
import bcrypt from 'bcrypt';
import { db } from '#config/database.js';
import { users } from '#models/user.model.js';
import { eq } from 'drizzle-orm';

export const hashPassword = async password => {
  try {
    return await bcrypt.hash(password, 10);
  } catch (error) {
    logger.error(`Error hashing the password ${error}`);
    throw new Error('Error hashing');
  }
};

export const comparePassword = async (password, passwordHash) => {
  try {
    return await bcrypt.compare(password, passwordHash);
  } catch (error) {
    logger.error(`Error comparing the password ${error}`);
    throw new Error('Error comparing password');
  }
};

export const authenticateUser = async ({ email, password }) => {
  try {
    const existing = await db
      .select()
      .from(users)
      .where(eq(users.email, email))
      .limit(1);

    if (existing.length === 0) {
      throw new Error('Invalid email or password');
    }

    const found = existing[0];

    const ok = await comparePassword(password, found.password);
    if (!ok) {
      throw new Error('Invalid email or password');
    }

    // Return a sanitized object consistent with createUser (and include roles for convenience)
    return {
      id: found.id,
      name: found.name,
      email: found.email,
      role: found.roles,
      roles: found.roles,
      created_at: found.created_at,
    };
  } catch (e) {
    logger.error(`Error authenticating the user: ${e}`);
    throw e;
  }
};

export const createUser = async ({ name, email, password, role = 'user' }) => {
  try {
    const existingUser = await db
      .select()
      .from(users)
      .where(eq(users.email, email))
      .limit(1);

    if (existingUser.length > 0)
      throw new Error('User with this email already exists');

    const password_hash = await hashPassword(password);

    const [newUser] = await db
      .insert(users)
      .values({ name, email, password: password_hash, role })
      .returning({
        id: users.id,
        name: users.name,
        email: users.email,
        role: users.roles,
        created_at: users.created_at,
      });

    logger.info(`User ${newUser.email} created successfully`);
    return newUser;
  } catch (e) {
    logger.error(`Error creating the user: ${e}`);
    throw e;
  }
};
