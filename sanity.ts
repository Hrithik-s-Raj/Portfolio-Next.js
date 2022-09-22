//Sanity connection file

import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  apiVersion: "2021-03-25",
  useCdn: process.env.NODE_ENV === "production",
};

export const sanityClient = createClient(config);

//Helper function for fetching the image url from sanity
export const urlFor = (source: any) =>
  createImageUrlBuilder(config).image(source);

  console.log("Hllo from sanity");