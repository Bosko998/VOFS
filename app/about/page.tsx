import { StoryblokComponent, getStoryblokApi } from "@storyblok/react/rsc";
import { SbBlokData } from "@storyblok/react";
export async function fetchData() {
  let sbParams: SbBlokData = { version: "draft" };

  const storyblokApi = getStoryblokApi();
  const response = await storyblokApi.get(`cdn/stories/about`, sbParams);

  return response;
}
const AboutPage = async () => {
  const { data } = await fetchData();
  return (
    <div>
      {data.story.content.blocks.map((blok: SbBlokData) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </div>
  );
};

export default AboutPage;
