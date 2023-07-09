 import { getStrapiURL } from "./strapiApi";

// export function getStrapiMedia(media:any) {
//   const { url } = media.data.attributes;
//   const imageUrl = url.startsWith("/") ? getStrapiURL(url) :  media.url;
// console.log("Image url::",imageUrl)
//   return imageUrl;
// }

export function getStrapiMedia(media: any) {
  if (!media) {
    return null;
  }

  if (media.url) {
    // If the media object already contains a 'url' property, return it directly
const url = media.url.startsWith("/") ? getStrapiURL(media.url) :  media.url;
    return url;
  }

  if (media.data && media.data.attributes && media.data.attributes.url) {
    // If the media object has a nested 'data.attributes.url' property, return it
const url = media.data.attributes.url.startsWith("/") ? getStrapiURL(media.data.attributes.url) :  media.data.attributes.url;
    return url;
  }

  return null;
}
