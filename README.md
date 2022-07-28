# Manging User's using  `AWS'S IAM-SERVICE`

This is too create user and customize their logs on Organisational or to handle them in groups.

## Getting started

### Prerequisites

1. Initally Create a AWS Root account,create the IAM user with required service access
   - **IAM** user with given permissions from Admin can access the Requied Services with the help of **accessKeyId**  **Secret access key**  **User name**  **Console login link**
      -Using **Console login link** the **IAM** can get access to the services REquiered,if not can request admin if any service request further requiered
2. Here we are using  **Amazon Cognito** service to signup and log services
   - In **Amazon Connito** we need to create **User Pool**  with any particular name of wish or requiered,here i created with name **cloudsignup**
   - After creating **user pool** with all the required attributes requiered to signup,signin,Change(Reset) Password,authorization,....more in **Amazon Cognito** we get,

        -**UserPool ID** 
        - **ARN** - ID
3. After creating  **user pool** under **APP Integration** we have to give **Client Name** for app  ,from here we get auto generated **Client ID** after app integration process.


### Installation

1.  `npm install` to install the npm dependencies
    - I basically worked on **Express**
    - Th one of the Main Module was `aws-sdk`

2.  After initial setup on **VSCode**, importing  required `node_modules`,here `aws-sdk` module played important role as it was having all listed attributes,functions and requisist feilds

3. Using Express we start initializing server at localhost `port:3000`,by using command `npm start`
    - After testing up the server live,then start coding up the Functions requiered for Sigin,Reset Password,.....more
    - I have written routes for signup and ResetPassword using usable in-built methods from `aws-sdk modules`,such as
        -**adminCreateUser**
        -**CognitoIdentityServiceProvider**
        -**forgotPassword**
    - Testing the routes working without error or not on `Postman Application`

4. By using `AWS.config.update` command we connected the **IAM** User with  **accessKeyId** and **Secret access key** ,that not over, by giving **Client ID** under **user pool**, we start Hitting our API into the disginted **user pool**.



# cURL

## API Call for Signup
   - After signup there status is initialised to `Force change Password` and after signup there status to `Confirmed` with implies they are signin Successfully .
   - After Signup they will get the Email with **Username** and **Temperory Password**,Using Cognito UI for signin you need to update Your password for first time Users

````
```
curl --location --request POST 'http://localhost:3000/auth/signup' \
--header 'Content-Type: application/json' \
--data-raw '{
    "username": "jyothi3",
    "phone_number": "1234567890",
    "emailid": "jyothi.reddy2@the10xacademy.com"
}'
```
````

## API Call for Reset Password

-After hitting `ResetPassword` API we will recieve an verification code to reset our password under autherisation code

````
```
curl --location --request POST 'http://localhost:3000/auth/Resetpassword' \
--header 'Content-Type: application/json' \
--data-raw '{
    "username": "jyothi"

}'
```
````


# Screenshots

## Cloud Pool Details
![Cloud Pool Details](./images/Screenshot%20(40).png)

## API on postman after hitting signup
![API on postman after hitting signup](./images/Screenshot%20(39).png)

## Email after successfull Signup
![Email after successfull Signup](./images/Screenshot%20(37).png)

## User who are Added to pool, fter signup there status is initialised to `Force change Password` and after signup there status to `Confirmed`
![User who are Added to pool, fter signup there status is initialised to `Force change Password` and after signup there status to `Confirmed` ](./images/Screenshot%20(41).png)

## UI for Sigin
![UI for Sigin](./images/Screenshot%20(43).png)

## API on postman after hitting Reset Password
![API on postman after hitting Reset Password](./images/Screenshot%20(38).png)


## Verification code After hitting Reset password
![Verification code After hitting Reset password ](./images/Screenshot%20(35).png)

