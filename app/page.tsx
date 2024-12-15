export const dynamic = "force-dynamic";
import { StoryblokComponent } from "@storyblok/react/rsc";
import { SbBlokData } from "@storyblok/react";
import { fetchData } from "../utils/api";
import { notFound } from "next/navigation";
export default async function Home() {
  const { data } = await fetchData("home");

  if (!data?.story) {
    notFound();
  }
  return (
    <div>
      {data.story.content.blocks.map((blok: SbBlokData) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </div>
  );
}
