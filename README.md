# Water My Plants API
## ***These endpoints and the data that they require and return are subject to change over then next couple of days.***

---

## Authentication Routes: Login/Registration  
- ### Register
    Method url: `/api/auth/register`  
    Register a new user here by entering a username and a password. 
    - The username must be unique, but password doesn't
    - Failing to enter a password or a unique username will return a status of `500 Internal Server Error` with a message that reads `Failed to create new user`  
    - A successfully created user will return a status of `201` along with the id for the new user.

- ### Login
    Method url: `/api/auth/login`  
    This endpoint is where a previously created user will login to recieve an access token.  
    - Enter the username and password for the user. You can use the test user or create your own.
        - Test username: `test`
        - Test password: `test`

---

## User Routes  

These routes are restricted to users that can provide a valid token  

- ### Get a user by id
    Method url: `/api/users/:id`  
    HTTP method: [GET]

- ### Get a users plants by id  
    Method url: `/api/users/:id/plants`  
    HTTP method: [GET]  
    Returns an array of objects

- ### adding a new plant to a users list of plants
    Method url: `/api/users/:id/plants`  
    HTTP method: [POST]  
    The **users** `id` is collected from the params property in the route  
    Currently this requires the **plants** `id` that you want to add, but will be updated to use the plants species instead.  
    You need to add an "h20Frequency" in the form of an integer. (The thinking is that if you need to water every other day you would enter `2` into this field).  
    There is also the option to enter a "nickname" and an "image", but they can be left null as well.

- ### update a users plant

    Method url: `api/users/:id/plants`  
    HTTP method: [PUT]  
    The same fields are required for the update as those for adding a new plant to the users list of plants

- ### Delete a users plant

    Method url: `api/users/:id/plants`  
    HTTP method: [DELETE]  
    This gathers the **users** `id` from the params property to identify which user to delete the plant from.  
    Currently requires the **users_plants** `id` from the client to identify which entry to delete. 

