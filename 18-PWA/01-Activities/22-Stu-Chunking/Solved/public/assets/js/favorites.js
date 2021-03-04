import { useIndexedDb } from "./indexedDb";

import { createCards } from "./cardCreation";

useIndexedDb("favorites", "FavoritesStore", "get").then(results => {
  createCards(results);
});
