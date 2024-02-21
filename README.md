
# Sahiden

Sahiden is a platform where users advertise and sell their products.


## How To Use

Let's first familiarize ourselves with the necessary endpoints to be able to use the app.

![Logo](https://i.imgur.com/TFSlNFx.png)

### API Endpoints

#### Register

```http
  POST /api/signup
```

| Parameters | Type     | *Description*                |
| :-------- | :------- | :------------------------- |
| `email` | `string(email)` | **Required** |
| `first_name` | `string` | **Required** |
| `last_name` | `string` | **Required** |
| `password` | `string` | **Required**  |

`password`
* Must contain only letters and numbers
* Must be between 8 and 255 characters long
* Cannot contain your first name, last name or e-mail address
* Three consecutive identical characters or numbers cannot be used in the password.
* Must contain at least one lowercase letter
* Must contain at least one uppercase letter

`WARNING` User cannot register again

#### Login

```http
  POST /api/login
```

| Parameters | Type     | *Description*                |
| :-------- | :------- | :------------------------- |
| `email` | `string(email)` | **Required** |
| `password` | `string` | **Required**  |

`WARNING` If a logged-in user is detected, the endpoint is invalidated.

#### Forgot Password

```http
  POST /api/forgot-password
```

| Parameters | Type     | *Description*                |
| :-------- | :------- | :------------------------- |
| `email` | `string(email)` | **Required** |

`WARNING` Only available for registered users

#### Change Password

```http
  PUT /api/change-password
```

| Parameters | Type     | *Description*                |
| :-------- | :------- | :------------------------- |
| `newPassword` | `string` | **Required** |
| `confirmPassword` | `string` | **Required** |

`WARNING` Only available for registered users

* The same password validity procedures apply here
* `newPassword` and `confirmPassword` must be the same as the confirmation

#### Create Advert

```http
  POST /api/ads
```

It would be more accurate to tell you about our model structure for ad creation.

![Advert Model](https://i.imgur.com/Ae9dsjY.jpeg)

For product registration you first need the parameters of the Main Model and then the parameters of the advert type.

*For example*

```
title:ANTALYA BOĞAZKENT DE VATANDAŞLIĞA UYGUN ULTRA LÜKS VİLLA
description:HIZLA GELİŞMEKTE OLAN BOĞAZKENT BÖLGESİNDEKİ EVİMİZ YAPI OLARAK ANTALYA BÖLGESİNDE TEK DENİLE BİLECEK YAPILAR ARASINDADIR.vBOĞAZKENT EŞİ BENZERİ BULUNMAYAN VE HIZLA GELİŞEN TURİZM YERLERİNDEN BİRİSİDİR.
price:39000000
province:Antalya
distcrict:Serik
neighborhood:Boğazkent
category:Property
sub_category:Land
m2:3000
zoning_status:Bağ Bahçe
island_no:21312
parcel_no:165165
```
`IMPORTANT` Requests must have a content type of `multipart/form-data`, as at least one image is required to add an ad.


#### Get All Adverts

```http
  GET /api/ads
```

#### Get All Adverts For User

```http
  GET /api/ads/userAds
```

* This request is used to display the listings of the person using the API.

#### Get Advert

```http
  GET /api/ads/:slug/detay
```

#### Update Advert

```http
  PATCH /api/ads/:id
```

We have already specified the parameters required for ad creation. For updating, it is possible to change depending on the type of any parameter.

#### Delete Advert

```http
  DELETE /api/ads/:id
```

#### Search Advert

```http
  GET /api/ads/?search
```

#### Category Filter

```http
  GET /api/ads/category/:category
```

#### Sub Category Filter

```http
  GET /api/ads/category/:sub_category
```

#### Profile Page

```http
  GET /api/users/panel
```

#### Update User Info

```http
  PATCH /api/users/update
```
| Parameters | Type     |
| :-------- | :------- |
| `phonenumber_home` | `string` |
| `phonenumber_bussiness` | `string` |
* If the picture is to be added
| Parameters | Type     | 
| :-------- | :------- | 
| `phonenumber_home` | `string` | 
| `phonenumber_bussiness` | `string` |
| `image` | `file` |i

#### Add Phone number
```http
  PATCH /api/users/phonenumber
```
| Parameters | Type     |
| :-------- | :------- |
| `phonenumber` | `string` |



  
## Deployment

Run this project for deployment

```bash
  docker-compose build
  docker-compose up
```

`WARNING` In the docker-compose file, please type whatever `MYSQL_ROOT_PASSWORD` you gave in the server-side environment variable

  
## Environments

To run this project you will need to add the following environment variables to your .env file

`PORT`

`MYSQL_ROOT_PASSWORD`

`ACCESSTOKEN_SECRET_KEY`

`TRANSPORTER_USER`

`TRANSPORTER_PASS`

  ## Feedback

If you have any feedback, please contact us at hasanocal7@gmail.com.
## How to Install
Clone the project

```bash
  git clone https://github.com/hasanocal7/Sahiden-Sahibinden.git
```

Navigate to the project directory

```bash
  cd Sahiden-Sahibinden
```

*Install the required packages for Client*

```bash
  cd client
  npm install
```

Start the server

```bash
  npm start
```

*Install the required packages for Server*

```bash
  cd server
  npm install
```

Start the server

```bash
  npm run dev
```



  
## Technologies Used

**Client:** React, Redux, Google Maps API

**Server:** Node, Express

**Database:** MySQL

**Deployment:** Docker

  
## Developers and Acknowledgements

- [@diyaryvzz](https://www.github.com/diyaryvzz) for design and development.
- [@AysuMUT](https://www.github.com/AysuMUT) for design and development.

  
