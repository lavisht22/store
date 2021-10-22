export function loadProducts() {
  return fetch("https://demo7242716.mockable.io/products").then((res) =>
    res.json()
  );
}
