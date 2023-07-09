import qs from "qs";
const liveUrl = "https://strapi-backend-v6ln.onrender.com"
export function getStrapiURL(path = "") {
  return `${
     "https://my-blog-5ydp.onrender.com"
  }${path}`;
}



// console.log(process.env.NEXT_PUBLIC_API_STRAPI_URL);
// const strapiUrl = process.env.NEXT_PUBLIC_API_STRAPI_URL;
// export function getStrapiURL(path = "") {
//   return `${strapiUrl}${path}`;
// }
export async function fetchAPI(path:any , urlParamsObject = {}, options = {}) {
  const mergedOptions = {
 
    headers: {
      "Content-Type": "application/json",
  
    },
    ...options,

     // Set the revalidation interval to 10 seconds
  
  };

  const queryString = qs.stringify(urlParamsObject);
  const requestUrl = `${getStrapiURL(
    `/api${path}${queryString ? `?${queryString}` : ""}`
  )}`;

  try {
    const response = await fetch(requestUrl, mergedOptions, );

    if (!response.ok) {
      const errorText = `${response.status} ${response.statusText}`;
      console.error(errorText);
      throw new Error(`Request failed: ${errorText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("An error occurred:", error);
    throw new Error("An error occurred. Please try again.");
  }
}
