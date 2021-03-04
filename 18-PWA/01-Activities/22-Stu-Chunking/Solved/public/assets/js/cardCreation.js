import { createEl } from "./domMethods";
import { createRatingForm } from "./rating";

export function createCards(data) {
  const container = document.getElementsByClassName("container")[0];
  container.innerHTML = "";
  let lastRow;

  const row = createEl("div", "row");

  return data.forEach(function(image, index) {
    const col = createEl("div", "col-md-4 mt-4");
    col.appendChild(createCard(image));

    if (index % 3 === 0) {
      row.appendChild(col);
      container.appendChild(row);
      lastRow = row;
    }

    return lastRow.appendChild(col);
  });
}

export function createCard(image) {
  const card = createEl("div", "card");
  const cardBody = createEl("div", "card-body");
  const imageContainer = createEl("div", "card__image-container");

  const img = createEl("img", "card-img-top card__image--cover");
  img.setAttribute("src", image.image);
  img.setAttribute("alt", image.description);

  const ratingFormContainer = createEl("div", "rating d-flex justify-content-start");
  ratingFormContainer.setAttribute("data-id", image._id);
  ratingFormContainer.setAttribute("data-rating", image.rating);

  const ratingForm = createRatingForm(image);

  const cardText = createEl("a", "card-text font-weight-bold mt-2");
  cardText.setAttribute("href", `/images/${image._id}`);
  cardText.innerText = `${image.description} (${image.rating})`;

  imageContainer.append(img);
  ratingFormContainer.append(ratingForm);

  cardBody.appendChild(ratingFormContainer);
  cardBody.appendChild(cardText);
  
  card.appendChild(imageContainer);
  card.appendChild(cardBody);

  return card;
}
