import { loadImages } from "./api";
import { createCards } from "./cardCreation";

loadImages().then(data => createCards(data));
