// import { Page, Grid, Feature, Teaser } from "components";
// import {
//   storyblokInit,
//   apiPlugin,
//   getStoryblokApi as originalGetStoryblokApi,
// } from "@storyblok/react/rsc";

// const cachedFetch = (input: any, init?: any): Promise<Response> => {
//   return fetch(input, {
//     ...init,
//     cache: "no-store",
//   });
// };
// // Initialize Storyblok
// storyblokInit({
//   accessToken: process.env.STORYBLOK_TOKEN,
//   use: [apiPlugin],
//   components: {
//     feature: Feature,
//     grid: Grid,
//     page: Page,
//     teaser: Teaser,
//   },
//   apiOptions: {
//     fetch: cachedFetch,
//   },
// });

// Export getStoryblokApi for use in your components
//export const getStoryblokApi = () => originalGetStoryblokApi();

// import {
//   StoryblokClient,
//   apiPlugin,
//   getStoryblokApi as getStoryblokApiDefault,
//   storyblokInit,
// } from "@storyblok/react/rsc";
// import { Page, Grid, Feature, Teaser } from "components";

// let storyblokApi: StoryblokClient | undefined = undefined;

// export const AppStoryblokInit = (): StoryblokClient => {
//   if (!storyblokApi) {
//     storyblokInit({
//       accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
//       use: [apiPlugin],
//       components: {
//         feature: Feature,
//         grid: Grid,
//         page: Page,
//         teaser: Teaser,
//       },
//     });

//     storyblokApi = getStoryblokApiDefault();
//   }

//   return storyblokApi;
// };

// export const getStoryblokApi = (): StoryblokClient => {
//   return AppStoryblokInit();
// };
