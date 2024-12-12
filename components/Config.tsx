import type { SbBlokData } from "@storyblok/react";
import { StoryblokComponent } from "@storyblok/react";
import { fetchConfig } from "../utils/api";

const Config = async () => {
  const { data } = await fetchConfig();

  return (
    <div>
      {data.story.content.header_menu.map((blok: SbBlokData) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </div>
  );
};

export default Config;
