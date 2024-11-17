import { SbBlokData } from "@storyblok/react/rsc";

export interface Blok {
  [key: string]: any;
  _uid: string;
  body: SbBlokData[];
}
