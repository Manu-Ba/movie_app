# Front-End Developer Recruiting Challenge - Movie Web App

## Description

The Movie App is a web application that allows users to search for movies, view details, save their favorite movies, and rate them. This project utilizes the OMDB API (https://www.omdbapi.com/) for movie data.

## Setup Instructions

- install dependencies for movie_app and movie_backend with "npm i"
- start server with "node server.js" in movie_backend
- run movie app with the command "npm run dev"

## Usage

# API key

The API key is saved in the file src/data/apikey.ts

# Search Movies

search-tab

Movies titles can be searched by keyword. You will receive a list of maximum 10 results that best correspond with your search keyword.

# Movie Details

By clicking "show more" you can view further details of the movie and add it to your list of favorites, rate the movie and add comments.

# Add to Favorites

By clicking the "favorite" button in in the detailview the movie will be added to favorites.

# List of favorite movies

favorites-tab

lists all your favorite movies with their star rating. "Show more" will again give you the detailview for the movie.

# Rate favorite movie and add comments

The detailview of favorite movies will have the option to rate the movie by clicking "rate movie", then chosing one to five stars.
Comments can be added by clicking "add comment".

# Delete Movie from Favorites

The button "delete favorite" allows you to delete a movie from your list of favorites. Keep in mind that this will also delete the rating and all comments for this movie. You will be asked to confirm your choice.
