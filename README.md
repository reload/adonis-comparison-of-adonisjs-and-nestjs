# adonis-comparison-of-adonisjs-and-nestjs

## Adonis Observations

Pros: 
 
 ** Well known API composition elements**
 - Db migrations
 - Routing
 - Middleware
 - Uses IOC container
 - Validator - first calss citizen (https://docs.adonisjs.com/guides/basics/validation#validating-cookies-headers-and-route-params)
 - Validation at controller level
 - Auth handling (Guards)
 - Error handling (Exception handler, https://docs.adonisjs.com/guides/basics/validation#error-handling)
 - DB ORM'S (Lucid default I think https://docs.adonisjs.com/guides/database/introduction)
 
 ** Other nice features **
 - Config service
 - Ace CLI tool
 - Env validation
 - Built in logging
 - Japa testing (unknown to me)
 - Big eco system (packages: https://packages.adonisjs.com/)
- DX - handy tools like HMR and dump-n-die (https://docs.adonisjs.com/guides/basics/validation#validating-cookies-headers-and-route-params)


## POC on agency / branches endpoints

I have implemented a simple POC on agency / branches endpoints using AdonisJS.
The POC makes use of following aspects:
- Tranformation of data via DTO's (app/models/dto)
- Routing via resource definitions in start/routes.ts
- Use of data repositories (in order to abstract away the data sources)
- JSON middleware that enforces JSON response format

## How do I test the current state of the application?

Requirements:
 - node
 - pnpm ( I have very good experience eith using pnpm - it's fast!)

 Run 
 ```
 pnpm install
 ```
 
 In order to see the created resources:
 
 ```
node ace list:routes
```

Run application:
```
 pnpm run dev
```

NOTE!: branches returned are always the one from Copenhagen
