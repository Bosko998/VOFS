import type { SbBlokData } from "@storyblok/react";

import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
interface NavbarProps {
  blok: {
    Logo: {
      filename: string;
    };
    Bell: {
      filename: string;
    };
    _uid: string;
    header_menu: SbBlokData[];
  };
}
const NavBar = async ({ blok }: NavbarProps) => {
  return (
    <>
      <div className="flex justify-between items-center px-4">
        <a href="/">
          <img
            src={blok.Logo.filename}
            alt="logo image"
            className="w-[130px] max-w-full object-cover"
          />
        </a>

        <div
          {...storyblokEditable(blok)}
          key={blok._uid}
          data-test="grid"
          className="flex justify-center items-center gap-2 uppercase text-white"
        >
          {(blok.header_menu as SbBlokData[]).map((nestedBlok, index) => (
            <StoryblokComponent blok={nestedBlok} key={index} />
          ))}
        </div>
        <img src={blok.Bell.filename} alt="logo image" />
      </div>
    </>
  );
};

export default NavBar;
