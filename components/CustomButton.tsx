import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBeforeOutlined";

export function CustomButton() {
  return <div>CustomButton</div>;
}

export function CustomArrows(){
 <>
  <NavigateBeforeIcon
        sx={{ fontSize: 50 }}
        className='absolute left-1 cursor-pointer animate-breathing'
      />
      
      <NavigateNextIcon
        sx={{ fontSize: 50 }}
        className="absolute right-1 cursor-pointer animate-breathing"
      />
 </>
}
