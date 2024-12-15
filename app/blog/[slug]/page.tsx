import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";
type BlogProps = {
  params: {
    slug: string;
  };
};
const fetchBlogPage = async (slug: string) => {
  const client = getStoryblokApi();
  const response = await client.getStory(`${slug}`, { version: "draft" });
  return response.data;
};

export default async function Blog(props: BlogProps) {
  const story = await fetchBlogPage(props.params.slug);
  return <StoryblokStory story={story} />;
}
