
## Project setup

```bash
$ yarn install
```

## Compile and run the project

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```
## Users :
**Register User :**

The user can enter the following URL to register.  { <mark>Method : POST</mark> }<br>
<a>http://localhost:3000/users/register</a> 

Example Send Data ‌Body : 

```JSON
{
  "username" : "User1",
  "password" : "PASSWORD123"
}
```

**Login :**

The user gets a token after logging in<br>
<a>http://localhost:3000/auth/users/login</a> <mark>{GET}</mark> 

Example Send Data ‌Body : 

```JSON
{
  "username" : "User1",
  "password" : "PASSWORD123"
}
```

# Authentication
For the following addresses, you must enter your Bearer Token in the Authorization field:

*Create Station*<br>
*GetAllUsers*<br>
*GetById*<br>
*DeleteUser*<br>

Exapmle Token :

```JSON
  "access_token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1laHJhZDMiLCJpYXQiOjE3Mjc5MDA2MTIsImV4cCI6MTcyNzkwNDIxMn0.gaVp4qIXZsjk0gW2-gdyrybIRnufSP0F4tobmjWl-Do"
```

## Stations
Admin can create a station and users can use it to refuel.

Create Station : <a>http://localhost:3000/station/</a>  { <mark>Method : POST</mark> }

GetAllStation : http://localhost:3000/users/  {<mark>Method GET</mark> }

Example Send Data ‌Body :

```JSON
{
    "name" : "Gas 1",
    "location" : "tehran",
    "fuelAvailable" : 3000 //3,000 liters

}
```


## ADMIN CRUD
Admin can see and delete all users or see user information with an ID
  
  GetAllUsers : http://localhost:3000/users/  {<mark>Method GET</mark> }

  GetById : http://localhost:3000/users/67047c8b4538ffff4182e02e {<mark>Method GET</mark>  And ID Send <mark>PARAM</mark>}

  DeleteUser : http://localhost:3000/users/67047c8b4538ffff4182e02e {<mark>Method DELETE</mark>  And ID Send <mark>PARAM</mark>}