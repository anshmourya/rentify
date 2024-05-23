
# Real Estate Application

This application is a real estate platform that allows users to register as either sellers or buyers. Sellers can post properties for sale, and buyers can view and filter these properties based on various criteria. The application is built using a flexible technology stack chosen for both frontend and backend development.


## Tech Stack

**Client:** React, react query, TailwindCSS, react-hook-form

**Server:** Node, Express, mongodb


## Features

User Registration and Login
- Users can register as either sellers or buyers.
- Users can log in to access their respective functionalities.
Seller Flow
- Sellers can post properties by providing details such as:
- Place
- Area
- Number of bedrooms
- Number of bathrooms
- Nearby hospitals and colleges
- Sellers can view a list of their posted properties.
- Sellers can update or delete their properties.
Buyer Flow
- Buyers can view all posted properties.
- Buyers can express interest in a property by clicking an "I'm Interested" button.
- On expressing interest, buyer can view seller details.



## API Reference

#### Get all property list

```http
  GET /property/list
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `address` | `object` | whole address including city, ciuntry etc |
| `price` | `number` | price of the property |
| `total likes` | `numbers` | total likes |


#### create property , updated property

```http
  post /updatedProperty/:id
  post /post
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `place`      | `object` |will including whole address (refer scehma) |
| `Description`      | `string` | |
| `id`      | `string` | will only required while updating|


#### create user

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | required. Username |
| `email` | `string` |required User email |
| `password` | `string` | password |
| `role` | `string` | role |


#### login user

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` |required User email |
| `password` | `string` | password |
| `role` | `string` | role |



```js
//user
router.get("/getUser/:id", userController.getUser);
router.post("/create", userController.signUp);
router.post("/createSession", userController.createSession);

//seller
router.post("/post", sellerController.postProertry);
router.put("/updatedProperty", sellerController.updateProperty);
router.post("/updateLike", sellerController.updatedLike);
router.get("/getSellerProperty/:id", sellerController.getSellerProperty);

//buyer
router.get("/property/list", sellerController.getProertryList);
```



## Future Enhancements

### Yet to implement the feature due to time constriant

- Implement email functionality for notifications.
- Add pagination for property listings.
- Deploy the application to a cloud platform like AWS, Heroku, or Vercel.
## note

feel free to reach out to me for the futher process
- mail: anshmourya657@gmail.com
- mobile: 9167220139
- github: https://github.com/anshmourya