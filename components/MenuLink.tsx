import React from "react";
import type { SbBlokData } from "@storyblok/react";
import { storyblokEditable } from "@storyblok/react";

// Extend SbBlokData to include specific fields
type MenuLinkBlok = SbBlokData & {
  link: {
    cached_url: string;
  };
  name: string;
};

interface MenuLinkProps {
  blok: MenuLinkBlok;
}

const MenuLink = ({ blok }: MenuLinkProps) => {
  //console.log(blok);
  return (
    // <div {...storyblokEditable(blok)} key={blok._uid} data-test="teaser">
    <a href={blok.link.cached_url}>{blok.name}</a>
    // </div>
  );
};

export default MenuLink;
