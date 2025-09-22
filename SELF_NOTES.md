# What all I did

## session 1 (6:30am to 8am)

1. First initaled the node env using npm init -y
2. Installed express and dotenv - index, app, server
3. Created the folder structure - config, controllers, middleware, models, routes, services, utils, validations.
4. Defined linting and formating using eslint and prettier using eslint.config.js and .prettierrc and installed `eslit @eslint/js prettier eslint-config-prettier .eslint-plugin-prettier` as dev dependency and added linting and formatting commands to package json.
5. Installed neon, drizzle (`@neondatabase/serverless drizzle-orm`) and drizzle kit as dev dependency
6. Defined drizzle.config.js and database connection in config/database.js and added the table to models/user.model.js
7. Added drizzle commands ( generate, migrate, studio ) to package json
8. Generated and migrated database using cli

---

## Logging

9. Installed winston and defined the logging configs in config/logger.js
10. added the import alias for all modules in src/config from imports section in package json

---

## Middlewares

11. Installed helmet and added it to use express as middleware
12. Installed morgan and added json, urlencoded, and morgan combined with streams as middleware.
13. Installed cors and cookie-parser and added to main app as middlewares

---

## Authentication

14. Added sign up, sign in and sign out routes to auth routers.
15. Setuped postman to intereated with the post requests.

### Types of import available

- Default import ≈ from module import thing as any_name (but JS marks which one is default).
- Named import ≈ from module import a, b.
- Namespace import ≈ import module as utils.
- Side‑effect import ≈ import module when you only need top-level effects.
- Dynamic import ≈ importlib.import_module('module') (async in JS).

16. Added jwt utils with a JS Object that have sign and verify methods in it.

## Cookies

### Notes on returns in JS method

- `getOption` returns () => ({})
- But `set` method return () => {}

This is because the getOption method uses implicit return of an object, where set/clear method uses {} to represents the block bodies.

17. Defined the methods for cookie interations in utils (getOption, set, clear, get)
18. Added Auth Validations schemas using zod
19. Defined the auth logic inside auth controller and called from auth routes
20. Defined utility function for Validation formatting
21. Install bcrypt using npm install

### Notes on destructioning

- [ newUser ] - this is how we destructure values from a array
- { name, user } - this is how we destructure an object

22. Created function in auth service to hash function using brcypt and logic to create user in database with drizzle orm
23. Added logic to create user in auth controllers
