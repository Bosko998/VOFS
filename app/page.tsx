import { storyblokInit, apiPlugin } from "@storyblok/react";
import Hero from "../components/Hero";
storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
});
export default function Home() {
  return (
    <>
      <Hero />
    </>
  );
}
