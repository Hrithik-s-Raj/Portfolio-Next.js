

import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: "saysenth",
  apiVersion: "2021-03-25",
  useCdn: process.env.NODE_ENV === "production",
};

export const sanityClient = createClient(config);

//Helper function for fetching the image url from sanity
export const urlFor = (source: any) =>
  createImageUrlBuilder(config).image(source);

