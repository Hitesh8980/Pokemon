# Pokémon Explorer - Frontend

## Overview
Pokémon Explorer is a web application that allows users to explore and filter through different Pokémon. The application is built using **React**, **Tailwind CSS**, and integrates with a backend API to fetch data about Pokémon, including their names, types, and stats. Users can search for Pokémon by name, filter by type, and view detailed information on each Pokémon.

## Features
- Search for Pokémon by name.
- Filter Pokémon by type.
- View detailed stats for each Pokémon (e.g., HP, Attack, Defense).
- Responsive design for both desktop and mobile views.
- Card flipping animation to toggle between Pokémon image and stats.
- Beautiful and clean UI with a Pokémon-inspired theme.

## Live Demo
You can access the live demo of the Pokémon Explorer web application [here](https://pokemonexp.netlify.app/).


## Technologies Used
- **React** - JavaScript library for building user interfaces.
- **Tailwind CSS** - Utility-first CSS framework for styling the components.
- **Axios** - Promise-based HTTP client for fetching data from the backend API.
- **React Router** - For handling routing between different pages of the application.
- **React Context API** - For state management.

## Setup Instructions

Follow the steps below to set up and run the application locally.

### Prerequisites
- **Node.js** and **npm** installed on your local machine. You can download Node.js [here](https://pokemonexp.netlify.app/).

### Installation Steps

1. **Clone the repository** to your local machine.
   ```bash
   git clone https://github.com/yourusername/pokemon-explorer.git
   
2. **Navigate to the project folder**.
   ```
   cd pokemon Front_end
   
3. **Install the dependencies using npm**:
   ```
   npm install
   
5. **Start the development server**:
   ```
   npm run dev
This will start the development server at http://localhost:5173

### API Integration

The frontend is integrated with the following backend API to fetch Pokémon data.

**Base URL: https://pokemonexplorer-igwl.onrender.com/pokemon**

For filtering, you can make GET requests to the API like this:

 -  To filter Pokémon by type:
    ```
    https://pokemonexplorer-igwl.onrender.com/pokemon?type=Electric
 - To search by Pokémon name:
    ```
    https://pokemonexplorer-igwl.onrender.com/pokemon?search=Pikachu
### How It Works
- Homepage: Displays a list of Pokémon cards with images and basic stats.
- Search: Users can search for Pokémon by name using the search bar.
- Filter by Type: Users can filter Pokémon by their type using the dropdown menu.
- Card Flip Animation: When a user hovers over a Pokémon card, the card flips to show detailed stats like HP, Attack, and Defense.

### Contributing

We welcome contributions! If you'd like to improve this project, feel free to fork the repository and submit a pull request.

- Steps to Contribute:
- Fork the repository.
- Create a new branch for your feature or fix.
- Make your changes and commit them.
- Push to your fork and submit a pull request.   
   
      
