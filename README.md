# Basic Math Operations API

This is a simple Express.js server that offers basic math operations through various API endpoints. You can perform addition, subtraction, multiplication, and division by passing query parameters.

## Getting Started

### API Endpoints 🖇️

Here are the available endpoints:

#### 1. *️⃣ Multiply: `/mul`

- **Method**: GET
- **Description**: Multiplies two numbers.
- **Query Parameters**:
  - `a` (Number): The first number
  - `b` (Number): The second number
- **Response**: Returns the product of `a` and `b`.

    Example:

    ```bash
    http://localhost:3000/mul?a=4&b=5
    ```

    Response:

    ```json
    {
      "ans": 20
    }
    ```

#### 2. ➗ Divide: `/div`

- **Method**: GET
- **Description**: Divides two numbers.
- **Query Parameters**:
  - `a` (Number): The numerator
  - `b` (Number): The denominator
- **Response**: Returns the result of `a / b`.

    Example:

    ```bash
    http://localhost:3000/div?a=10&b=2
    ```

    Response:

    ```json
    {
      "ans": 5
    }
    ```

#### 3. ➕ Add: `/add`

- **Method**: GET
- **Description**: Adds two numbers.
- **Query Parameters**:
  - `a` (Number): The first number
  - `b` (Number): The second number
- **Response**: Returns the sum of `a` and `b`.

    Example:

    ```bash
    http://localhost:3000/add?a=3&b=7
    ```

    Response:

    ```json
    {
      "ans": 10
    }
    ```

#### 4. ➖ Subtract: `/sub`

- **Method**: GET
- **Description**: Subtracts two numbers.
- **Query Parameters**:
  - `a` (Number): The first number
  - `b` (Number): The second number
- **Response**: Returns the result of `a - b`.

    Example:

    ```bash
    http://localhost:3000/sub?a=10&b=4
    ```

    Response:

    ```json
    {
      "ans": 6
    }
    ```

### Running the Project

To run the server:

```bash
node index.js
```

After starting the server, use Postman to test the endpoints.
