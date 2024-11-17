import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";

const fetchBlogPage = async (slug: string) => {
  const client = getStoryblokApi();
  const response = await client.getStory(``, { version: "draft" });
  return response.data;
};

const Blog = async (props: any) => {
  const story = await fetchBlogPage(props.params.slug);
  return <StoryblokStory story={story} />;
};

export default Blog;
