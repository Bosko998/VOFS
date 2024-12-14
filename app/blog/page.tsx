import React from "react";

function Blog() {
  return <div>Blog Post</div>;
}

export default Blog;
/**
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

const Blog = async (props: BlogProps) => {
  const story = await fetchBlogPage(props.params.slug);
  return <StoryblokStory story={story} />;
};

export default Blog;

 */
