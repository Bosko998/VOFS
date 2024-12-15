import Link from 'next/link';
import type { SbBlokData } from "@storyblok/react/rsc";

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
    <Link href={blok.link.cached_url}>{blok.name}</Link>
    // </div>
  );
};

export default MenuLink;
