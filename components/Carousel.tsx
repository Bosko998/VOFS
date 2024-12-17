"use client"
import {useState} from 'react'
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBeforeOutlined";

function Carousel() {
    const [image,setImage] = useState("/front_image.webp")
    const changeImage = (dir:string)=>{
        if(dir =='left'){
            setImage("/hero-img.png");
        }else{
            setImage("/front_image.webp")
        }
    }
  return (
    <div className="relative flex items-center justify-center">
      <img src={image} alt="pic1" className="w-[750px]" />
      <NavigateBeforeIcon
        sx={{ fontSize: 50 }}
        className='absolute left-1 cursor-pointer animate-breathing'
        onClick={()=>changeImage('left')}
      />
      
      <NavigateNextIcon
        sx={{ fontSize: 50 }}
        className="absolute right-1 cursor-pointer animate-breathing"
        onClick={()=>changeImage('right')}
      />
    </div>
  );
}

export default Carousel;
