# Application Architecture Example

This repo was built for learning purpose on how application architecture look like for monolith and micro services. It explains how the communication works between client and server as well as between services.

It introduces concept like event bus in a very easy way to understand.

## How to use this repo?

### To see the diagram explanation

1. Go to diagrams directory and open the diagram using draw.io

### Bring up monolithic architecture

#### Using Docker

1. Go to `monolithic` directory, and run `docker-compose up`
2. Go to `client` directory inside `monolithic` and run `npm start`, install the dependencies first.
3. If you don't want to make any changes to the client, simply uncomment the client portion from `docker-compose.yml`

#### Using NPM

1. Go to each directory inside `monolithic` and run `npm start`

### Bring up micro services - sync architecture

#### Using Docker

1. Go to `micro-services-sync` directory, and run `docker-compose up`
2. Go to `client` directory inside `micro-services-sync` and run `npm start`, install the dependencies first.
3. If you don't want to make any changes to the client, simply uncomment the client portion from `docker-compose.yml`

#### Using NPM

1. Go to each directory inside `micro-services-sync` and run `npm start`

### Bring up micro services - async architecture

#### Using Docker

1. Go to `micro-services-async` directory, and run `docker-compose up`
2. Go to `client` directory inside `micro-services-async` and run `npm start`, install the dependencies first.
3. If you don't want to make any changes to the client, simply uncomment the client portion from `docker-compose.yml`

#### Using NPM

1. Go to each directory inside `micro-services-async` and run `npm start`

---

**Disclaimer**

- I'm **NOT** an expert in this area, everything inside this repo is based on my research alone.
- **DO** conduct your own research to check the validity of the subject.
- Feel free to contact me if you have any questions.
