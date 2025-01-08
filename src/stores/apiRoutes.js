// utils/apiRoutes.js
const apiBase = import.meta.env.VITE_API_URL;

export const API_ROUTES = {
  PRODUCTS: `${apiBase}/products`,
  CATEGORIES: `${apiBase}/categories/all`,
};
