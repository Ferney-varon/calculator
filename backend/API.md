# Backend API Documentation

The Calculator API provides RESTful endpoints to perform arithmetic operations.

## Base URL
`http://localhost:3000/api/calculator`

## Endpoints

All endpoints accept `POST` requests with a JSON body and return a JSON response.

### 1. Addition
- **URL:** `/add`
- **Method:** `POST`
- **Request Body:** `{ "a": number, "b": number }`
- **Success Response:** `200 OK` `{ "result": number }`

### 2. Subtraction
- **URL:** `/subtract`
- **Method:** `POST`
- **Request Body:** `{ "a": number, "b": number }`
- **Success Response:** `200 OK` `{ "result": number }`

### 3. Multiplication
- **URL:** `/multiply`
- **Method:** `POST`
- **Request Body:** `{ "a": number, "b": number }`
- **Success Response:** `200 OK` `{ "result": number }`

### 4. Division
- **URL:** `/divide`
- **Method:** `POST`
- **Request Body:** `{ "a": number, "b": number }`
- **Success Response:** `200 OK` `{ "result": number }`

## Error Handling
If input validation fails (e.g., missing properties, non-numeric types) or if a business rule is violated (e.g., division by zero), the API returns a `400 Bad Request` with the following structure:
```json
{
  "status": "error",
  "statusCode": 400,
  "message": "Error description here"
}
```
