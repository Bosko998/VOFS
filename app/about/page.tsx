export const dynamic = "force-dynamic";
import { StoryblokComponent, SbBlokData } from "@storyblok/react/rsc";
import { notFound } from "next/navigation";
import { fetchData } from "../../utils/api";
export default async function AboutPage() {
  const { data } = await fetchData("about");
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
