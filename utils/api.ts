// lib/api.ts
import { getStoryblokApi, ISbStoriesParams } from "@storyblok/react";
import { storyblokInit, apiPlugin } from "@storyblok/react";

storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
});

type Story = {
  id: number;
  name: string;
};

export async function fetchStory(slug: string): Promise<Story | null> {
  const storyblokApi = getStoryblokApi();
  const params: ISbStoriesParams = { version: "draft" };
  const { data } = await storyblokApi.get(`cdn/stories/${slug}`, params);
  return data ? (data.story as Story) : null;
}

export async function fetchHomeStaticProps() {
  const slug = "home";
  const sbParams: ISbStoriesParams = { version: "draft" };
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : null,
      key: data?.story.id || null,
    },
    revalidate: 3600,
  };
}
