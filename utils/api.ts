import { getStoryblokApi } from "@storyblok/react/rsc";
import { SbBlokData } from "@storyblok/react";

export async function fetchData() {
  let sbParams: SbBlokData = { version: "draft" };

  const storyblokApi = getStoryblokApi();
  const response = await storyblokApi.get(`cdn/stories/home`, sbParams);

  return response;
}
export async function fetchConfig() {
  let sbParams: SbBlokData = { version: "draft" };

  const storyblokApi = getStoryblokApi();
  const response = await storyblokApi.get(`cdn/stories/config`, sbParams);
  return response;
}
