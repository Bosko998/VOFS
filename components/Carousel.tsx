type CarouselProps = {
  image: {
    filename: string;
    id: number;
  };
};
function Carousel({ image }: CarouselProps) {
  const { id, filename } = image;
  // 19406101 First pic
  // 19406173 Second
  // 19406605 Third
  // Dynamic height calculation based on `id`
  function positionElements(id: number) {
    let css = "";
    if (id == 19406173) {
      css = "h-[350px] z-10";
    } else {
      css = `h-[300px] z-0 relative opacity-60`;
      css += id == 19406101 ? " left-16" : " right-16";
    }
    return css;
  }

  return (
    <div className={`block w-max lef ${positionElements(id)}`}>
      <img
        className="w-full h-full rounded-2xl object-cover"
        src={filename}
        alt="ProjectImg"
      />
    </div>
  );
}

export default Carousel;
