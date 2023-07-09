import { fetchAPI } from "./strapiApi";
import { cache } from "react";
export const preload = (slug:any) => {
  void fetchArticleDescription(slug );
 void fetchCategories();
};

export const fetchArticleDescription = cache(async (slug:any) => {
  try {
    const articlesRes = await fetchAPI(`/articles?slug=${slug}`, {
        populate: ["category", "author.picture", "image"] ,
    
filters: {
      slug: slug,
    },
  },
 );
console.log("articlesRes.data");
     return articlesRes.data[0] ;


  
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


  