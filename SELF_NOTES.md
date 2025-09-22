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
