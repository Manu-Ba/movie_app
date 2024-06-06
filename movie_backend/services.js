let currentIndex = 0;

let database = [];

function getAllFavorites(request, response) {
  response.status(200).send(database);
}

function getSingleFavorite(request, response) {
  const singleFav = database.filter((fav) => fav.imdbID == request.params.id);
  response.status(200).send(singleFav);
}

function addFavorite(request, response) {
  const { imdbID } = request.body; // only imdbID is provided when first adding movie to database, the rest can be edited later.

  if (!imdbID) {
    return response.status(400).json({ error: "imdbID is required." });
  }

  // --> prevent movies from being added twice.

  let favMovie = {
    id: ++currentIndex,
    imdbID: imdbID,
    isFavorite: true,
    starRating: "", // start out here, star rating can be edited later
    comments: [],
  };
  database.push(favMovie);
  response.status(201).json(favMovie);
}

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
      return response.status(400).json({ error: "imdbID is required." });
      break;
  }
  response.status(200).send(database);
}

function addComment(request, response) {
  const singleFav = database.filter((fav) => fav.imdbID == request.params.id);
  let id = singleFav[0].id - 1;
  const { comment } = request.body;

  database[id].comments.push(comment);
  response.status(200).send(database);
}

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
