This documentation provides detailed information on how to interact with our API to access various resources and functionalities within our application. Whether you are building a web or mobile application, this guide will help you integrate with our API seamlessly.

The BookMyShow API provides the of endpoints to add movie booking details as well as retrieve last booking details.
# Getting started

<h3>The endpoints will interact with bookMovie database.</h3>
 
<p>:arrow_right: POST Booking</p>
<p>:arrow_right: GET Last booking</p>

<h3>Available Endpoints:</h3>

<h4>Create a Movie Booking</h4>

<p>:arrow_right: Endpoint: /api/booking</p>
<p>:arrow_right: Method: POST</p>
<p>:arrow_right: Description: This endpoint allows you to create a new movie booking.</p>
<p>:arrow_right: Request body</p>

<p>{ "movie": "OMG 2", "slot": "03:00 PM", "seats": { "A1": 0, "A2": 0, "A3": 4, "A4": 0, "D1": 0, "D2": 0 } }</p>

<h4>Get Last Booking</h4>

<p>:arrow_right: Endpoint: /api/booking</p>
<p>:arrow_right: Method: GET</p>
<p>:arrow_right: Description: This endpoint retrieves the details of the last booking made.</p>
<p>:arrow_right: Response Data</p>
{ "movie": "OMG 2", "slot": "03:00 PM", "seats": { "A1": 0, "A2": 0, "A3": 4, "A4": 0, "D1": 0, "D2": 0 }, "_id": "64d0af4709a4852908bede8d", "bookedAt": "2023-09-22T08:45:59.544Z", "__v": 0}

<h4>Response Codes:</h4>

<h4>Example 1: Create booking successfully</h4>

<p><h4>Endpoint:</h4> /api/booking</p>

<p><h4>Method:</h4> POST

Description: Add booking details.

POST /api/booking Host: loclahost:8080 Content-Type: application/json

{ "movie": "OMG 2", "slot": "03:00 PM", "seats": { "A1": 0, "A2": 0, "A3": 4, "A4": 0, "D1": 0, "D2": 0 } }

Example Response (200 OK):
{"_id":{"$oid":"64d0a80209a4852908bede8a"},"movie":"OMG 2","slot":"03:00 PM","seats":{"A1":0,"A2":0,"A3":4,"A4":0,"D1":0,"D2":0},"bookedAt":{"$date":"2023-09-22T08:14:58.162Z"},"__v":0}

Example 2: Error handling
Endpoint: /api/booking

Method: POST

Description: Add booking details.

POST /api/booking Host: loclahost:8080 Content-Type: application/json

{ "movie": "OMG 2", "slot": "03:00 PM", "seats": { "A1": 0, "A2": 0, "A3": 4, "A4": 0, "D1": 0, "D2": 0 } }

Example Response (422 Unprocessable Content**):**
{
"error": {
"code": 422,
"message": "Failed to create booking. Please try again later."
}
}

**Example Response (**400 Bad Request ):
{
"error": {
"code": 400,
"message": "Invalid booking data. Please provide valid details."
}
}

Example Response (500 internal server error):
{
"error": {
"code": 500,
"message": "An unexpected error occurred. Please try again later."
}
}

Example 3: Retrieve last booking successfully
Endpoint: /api/booking

Method: GET

Description: Get last booking details.

GET /api/booking Host: loclahost:8080 Content-Type: application/json

Example Response (200 OK):
{"_id":{"$oid":"64d0a80209a4852908bede8a"},"movie":"OMG 2","slot":"03:00 PM","seats":{"A1":0,"A2":0,"A3":4,"A4":0,"D1":0,"D2":0},"bookedAt":{"$date":"2023-09-22T08:14:58.162Z"},"__v":0}

Example 2: Error handling
Endpoint: /api/booking

Method: GET

Description: Get Last booking details.

GET /api/booking Host: loclahost:8080 Content-Type: application/json

Example Response (500 internal server error):
{
"error": {
"code": 500,
"message": "something went wrong!"
}
}

Example Response (200 Not Found):
{
"error": {
"code": 200,
"message": "No previous booking found."
}
}
