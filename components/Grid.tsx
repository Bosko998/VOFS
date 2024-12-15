import React from "react";
import type { SbBlokData } from "@storyblok/react/rsc";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react/rsc";

interface GridProps {
  blok: SbBlokData;
}
const Grid = ({ blok }: GridProps) => (
  <ul {...storyblokEditable(blok)} key={blok._uid} data-test="grid">
    {(blok.items as SbBlokData[]).map((nestedBlok) => (
      <li key={nestedBlok._uid}>
        <StoryblokComponent blok={nestedBlok} />
      </li>
    ))}
  </ul>
);

export default Grid;
