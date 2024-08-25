## Install
### Next.js
`npx create-next-app@latest --typescript`

#### Select
```
Ok to proceed? (y) y
✔ What is your project named? … nominate-app
✔ Would you like to use ESLint? … No / Yes
✔ Would you like to use Tailwind CSS? … No / Yes
✔ Would you like to use `src/` directory? … No / Yes
✔ Would you like to use App Router? (recommended) … No / Yes
✔ Would you like to customize the default import alias (@/*)? … No / Yes
```

### Prisma
```
npx prisma
# or
npm install -g prisma
```

#### Initial Prisma
`prisma init`

### Check in Your Browser
Access to localhost:3001

`npm run dev`

## Docker configuration
### Container Creation
`docker compose up -d`

## DB Connection Information
Please check with your administrator for the username and password, and write them in the env file.

## Migration

### Initial Migration
`prisma migrate dev --name init`

### After Two Times Migration
`prisma migrate dev`

### Update Schema
Directly update your database schema without generating migration files.

`prisma db push`

## Access To Tables
`npx prisma studio`

## Reset Migration
> [!Warining]
> Please think carefully before proceeding with resetting migrations.

## Documentation
- [Prisma ORM](https://www.prisma.io/docs/orm)

## Node Install
### Install
`nvm install v18.17.0`

### Nvm Use
`nvm use 18.17.0`

### Nvm Version
`nvm list`

### Requirements
| name | version  |
| ---- | -------- |
| Node | >= 18.17.0 |

## Versions
| Name | Version |
| --- | --- |
| prisma | 5.18.0 |
| @prisma/client | 5.18.0 |
| Node.js | v18.17.0 |
