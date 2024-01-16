

> Book Library web application using Next.js 13 and GraphQL

## Prerequisites

- node >=16.17.x
- npm >=8.15.x

## Install

```sh
npm install
```

## Usage
Specifies your postgres database connection (via an environment variable) by putting it in `.env` file

Then, run the prisma to create tables with seed data

```sh
npm run prisma:migrate:deploy
```

Seed Database

```sh
npx prisma db seed
```

Then, run the development server:

```sh
npm run dev
```

Open [http://localhost:8888](http://localhost:8888) with your browser to see the result.

    Default credentials: 
        username: user0
        password: password
