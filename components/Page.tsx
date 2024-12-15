import React from "react";
import type { SbBlokData } from "@storyblok/react/rsc";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react/rsc";

interface PageProps {
  blok: SbBlokData;
}

const Page = ({ blok }: PageProps) => (
  <div {...storyblokEditable(blok)} key={blok._uid} data-test="page">
    {blok.body
      ? (blok.body as SbBlokData[]).map((nestedBlok) => (
          <div key={nestedBlok._uid}>
            <StoryblokComponent blok={nestedBlok} />
          </div>
        ))
      : null}
  </div>
);

export default Page;
