import { storyblokInit, apiPlugin } from "@storyblok/react";

storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
});
export default function Home() {
  return <div className="overflow-hidden">Test</div>;
}
