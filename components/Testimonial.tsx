import { storyblokEditable } from "@storyblok/react/rsc";
import { Blok } from "../component-types";
const Testimonial = ({ blok }: { blok: Blok }) => (
  <div {...storyblokEditable(blok)} key={blok._uid} data-test="feature">
    <ul>
      <li>{blok.name}</li>
      <li>{blok.comment}</li>
    </ul>
  </div>
);

export default Testimonial;
