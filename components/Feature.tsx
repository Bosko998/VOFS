import { storyblokEditable } from "@storyblok/react/rsc";
import { Blok } from "../component-types";
const Feature = ({ blok }: { blok: Blok }) => (
  <div {...storyblokEditable(blok)} key={blok._uid} data-test="feature">
    <ul>
      <li>{blok.headline}</li>
      <li>{blok.content}</li>
    </ul>
  </div>
);

export default Feature;
