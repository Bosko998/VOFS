import { getStoryblokApi } from "@storyblok/react/rsc";
import { SbBlokData } from "@storyblok/react";

export async function fetchData(slug: string) {
  const sbParams: SbBlokData = { version: "draft" };

  const storyblokApi = getStoryblokApi();
  const response = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return response;
}
export async function fetchConfig() {
  const sbParams: SbBlokData = { version: "draft" };

  const storyblokApi = getStoryblokApi();
  const response = await storyblokApi.get(`cdn/stories/config`, sbParams);
  return response;
}
