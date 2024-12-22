import Carousel from './Carousel'
import {storyblokEditable} from '@storyblok/react/rsc'
type Image = {
  id: number;
  filename: string;
};
type CarouselProps = {
  blok: {
    images: Array<Image>; 
    _uid: string;          
  };
}
function Projects({blok}:CarouselProps) {
  return(
    <section className='mt-16 mb-16'>
      <div {...storyblokEditable(blok)} key={blok._uid} data-test="carousel" className='relative flex justify-center items-center'>
        
      {blok.images.map((image)=>( 
        <Carousel key={image.id} image={image}/>
      ))}
    </div>
    
    </section>
  );
}

export default Projects;
