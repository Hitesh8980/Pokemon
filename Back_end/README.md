# Pokémon Explorer Backend

This is the backend for the **Pokémon Explorer** project. It provides an API to manage and filter Pokémon data, including functionality for adding, updating, deleting, and retrieving Pokémon details.

## Features:
- **Filter Pokémon** by name and type.
- **Pagination** to limit the number of Pokémon returned per request.
- **CRUD operations** for Pokémon (Create, Read, Update, Delete).

## API Documentation:

### Base URL:
  https://pokemonexplorer-igwl.onrender.com

### Endpoints:

#### 1. **Get All Pokémon** (with filtering and pagination)
- **GET** `/pokemon`
- **Query Parameters**:
  - `search` (optional): Filter Pokémon by name (case-insensitive).
  - `type` (optional): Filter Pokémon by type (e.g., `electric`).
  - `page` (optional): Pagination, defaults to `1`.
  - `limit` (optional): Number of Pokémon per page, defaults to `12`.
  
**GET /pokemon?search=pikachu&type=electric&page=1&limit=12**
#### 2. **Get Pokémon by ID**
- **GET** `/pokemon/:id`
- Retrieve a Pokémon by its ID.

Example: GET /pokemon/5f8d0d55b54764421b7156d2

#### 3. **Add a New Pokémon**
- **POST** `/pokemon`
- Body (JSON):
  ```json
  {
    "name": "Pikachu",
    "types": ["Electric"],
    "sprite": "image_url",
    "stats": {
      "hp": 35,
      "attack": 55,
      "defense": 40
    }
  }
  
### 4. **Update Pokémon by ID**
- **PUT** `/pokemon/:id`
- Body (JSON) (to update Pokémon details):
   ```json
     {
  "name": "Updated Pokémon",
  "types": ["Electric"],
  "stats": {
    "hp": 40,
    "attack": 60,
    "defense": 50
  }
     }

### 5. **Delete Pokémon by ID**
- **DELETE** `/pokemon/:id`
- Delete a Pokémon by its ID.
- Example :-
    ``` json
   DELETE /pokemon/5f8d0d55b54764421b7156d2
   
### Installation Instructions:
1. **Clone the Repository**:
   ```
     git clone https://github.com/your-username/pokemon-explorer-backend.git
     cd pokemon Back_end
   
2. **Install Dependencies**:
   ```
   npm install

3. **Setup Environment Variables**:
   
   Create a .env file in the root directory and add the following variables:
   ```
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   
4. **Start the Server**:
    ```
    npm start
  The server should now be running at http://localhost:5000.
    
**Technologies Used**:
- Node.js
- Express.js
- MongoDB (Mongoose)       
