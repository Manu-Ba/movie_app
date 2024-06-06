let currentIndex = 0;

// data gets stored here as long as the server is running. Database would be needed for permanently saving data.
// example data:
// {
//   id: ++currentIndex,
//   imdbID: "tt0848228",
//   isFavorite: true,
//   starRating: "⭐️⭐️⭐️⭐️⭐️",
//   comments: ["test comment", "comment2", "comment3 - another test comment"],
// },
let database = [];

// returns entire database
function getAllFavorites(request, response) {
  response.status(200).send(database);
}

// returns single item by imdbID if it is in the database - empty object otherwise
function getSingleFavorite(request, response) {
  const singleFav = database.filter((fav) => fav.imdbID == request.params.id);
  response.status(200).send(singleFav);
}

// add an imdbID of a movie to favorites.
// only imdbID is provided when first adding movie, the rest can be edited later.
// movies can be added more than once. this should be prevented by the frontend.
function addFavorite(request, response) {
  const { imdbID } = request.body;

  if (!imdbID) {
    return response.status(400).json({ error: "imdbID is required." });
  }

  let favMovie = {
    id: ++currentIndex,
    imdbID: imdbID,
    isFavorite: true,
    starRating: "",
    comments: [],
  };
  database.push(favMovie);
  response.status(201).json(favMovie);
}

// add star rating to movie
function rateFavorite(request, response) {
  const singleFav = database.filter((fav) => fav.imdbID == request.params.id);
  let id = singleFav[0].id - 1;
  const { rating } = request.body;

  switch (rating) {
    case 1:
      database[id].starRating = "⭐️";
      break;
    case 2:
      database[id].starRating = "⭐️⭐️";
      break;
    case 3:
      database[id].starRating = "⭐️⭐️⭐️";
      break;
    case 4:
      database[id].starRating = "⭐️⭐️⭐️⭐️";
      break;
    case 5:
      database[id].starRating = "⭐️⭐️⭐️⭐️⭐️";
      break;
    default:
      return response
        .status(400)
        .json({ error: "star rating can be one to five stars." });
      break;
  }
  response.status(200).send(database);
}

// add comment to movie
function addComment(request, response) {
  const singleFav = database.filter((fav) => fav.imdbID == request.params.id);
  let id = singleFav[0].id - 1;
  const { comment } = request.body;

  database[id].comments.push(comment);
  response.status(200).send(database);
}

// delete object from favorites database.
function deleteFavorite(request, response) {
  const singleFav = database.filter((fav) => fav.imdbID == request.params.id);
  let id = singleFav[0].id - 1;
  database.splice(id, 1);
  updateDatabaseIds();
  response.status(200).send(database);
}

function updateDatabaseIds() {
  currentIndex = 0;
  for (let i = 0; i < database.length; i++) {
    console.log(database[i]);
    database[i].id = ++currentIndex;
  }
}

export {
  getAllFavorites,
  getSingleFavorite,
  addFavorite,
  deleteFavorite,
  rateFavorite,
  addComment,
};
