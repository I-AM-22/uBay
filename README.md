
# uBay
uBay is social media platform for selling and buying second-hand items

#### Applications included:
- User Application: developed by [@I-3B](https://github.com/I-3B) and [@amr-kallas](https://github.com/amr-kallas) with React and Typescript 
- Admin Dashboard: developed by [@I-3B](https://github.com/I-3B) and [@amr-kallas](https://github.com/amr-kallas) with React and Typescript 
- API Server: developed by [@bahaa-alden](https://github.com/bahaa-alden) and [@ibrahimAlAssi](https://github.com/ibrahimAlAssi) with Express.js and Typescript
- Warehouse Employee Application: developed by [@Majed-alaswad9](https://github.com/Majed-alaswad9) with Flutter



# Enviroment Variables
to start the API server you need to put an .env file that contains the following variables:

```env
NODE_ENV=
PASSWORD=
EMAIL_PASSWORD_R=
DATABASE_LOCAL=
JWT_EXPIRES_IN="90d"
JWT_COOKIE_EXPIRES_IN=90
EMAIL_USERNAME=
EMAIL_PASSWORD=
EMAIL_PORT=587
EMAIL_HOST=sandbox.smtp.mailtrap.io
EMAIL_FROM=
EMAIL_FROM_NAME=
IMGUR_CLIENT_ID=
IMGUR_CLIENT_SECRET=
```

## Installation
To run any client application you first need to start the API server
#### API Server
```bash
cd API && yarn && yarn start:prod
```
#### User Application
```bash
cd user && yarn && yarn dev
```
#### Admin Dashboard
```bash
cd admin && yarn && yarn dev
```
#### Warehouse Employee Application
...

    
