import { fetchAPI } from "./strapiApi";
import { cache } from "react";
export const preload = () => {
  void fetchArticles();
  void fetchCategories();
  void fetchHomepage();
};

export const fetchArticles = cache(async () => {
  try {
    const articlesRes = await fetchAPI("/articles", { populate: ["image", "category"] }, );


    return articlesRes.data;
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
});

export const fetchCategories = cache(async () => {
  try {
    const categoriesRes = await fetchAPI("/categories", { populate: "*" });
    return categoriesRes.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
});

export const fetchHomepage = cache(async () => {
  try {
    const homepageRes = await fetchAPI("/homepage", {
      populate: {
        hero: "*",
        seo: { populate: "*" },
      },
    });
    return homepageRes.data;
  } catch (error) {
    console.error("Error fetching homepage:", error);
    throw error;
  }
});

