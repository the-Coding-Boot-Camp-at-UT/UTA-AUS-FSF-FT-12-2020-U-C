export function loadImages() {
    return fetch("/api/images")
      .then(res => res.json())
      .catch(err => reject(err));
}

export function loadImage(id) {
    return fetch("/api/images/" + id)
      .then(res => res.json())
      .catch(err => reject(err));
}
