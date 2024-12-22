import { Button } from "@headlessui/react";
import { storyblokEditable } from "@storyblok/react/rsc";
type HeroProps = {
  blok:{
    _uid:string
    headline:string
    buttonContent:string
    backgroundPic:{
      filename:string
    }
  };
 
}
function Hero({blok}:HeroProps) {
  const number = [1, 2, 3, 4];

  return (
    <section style={{'backgroundImage': `url(${blok.backgroundPic.filename})`}}  className="bg-no-repeat h-screen bg-cover mt-8 mb-8">
      <div className="padding-y max-w-[1140px] m-auto" {...storyblokEditable(blok)} key={blok._uid} data-test="hero">
        <h1 className="text-3xl max-w-[1/3] pt-8 pb-8">
         {blok.headline}
        </h1>
        <div className="flex flex-col gap-8">
          <div className="flex flex-row gap-8">
            {number.map((item) => (
              <div
                key={item}
                className="dotted-circle inline-block rounded-full w-[100px] h-[100px]"
              >
                <div className="flex h-full flex-col items-center mx-auto justify-center">
                  <p className="text-xl block leading-[18px] tracking-[0.96px] font-bold">
                    657
                  </p>
                  <p className="smallText">Days</p>
                </div>
              </div>
            ))}
          </div>
          <Button className="custom-btn">{blok.buttonContent}</Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
