import { StoryblokComponent } from "@storyblok/react/rsc";
import { SbBlokData } from "@storyblok/react";
import { fetchData } from "../utils/api";
export default async function Home() {
  const { data } = await fetchData();
  return (
    <div>
      {data.story.content.blocks.map((blok: SbBlokData) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </div>
  );
}
