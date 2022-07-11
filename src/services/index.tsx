import api from "./api";

export function getProducts() {
    return api.get("products?page=1&rows=5&sortBy=id&orderBy=DESC").then((res) => res.data.products);
}
