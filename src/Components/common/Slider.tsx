import { Link } from "react-router-dom";

import images from '../../assets/images/images.json';
// type Items = {
//   path: string;
//   label: string;
// };

// interface LinksListProps {
//   items: Items[];
//   className?: string;
//   itemClassName?: string;
// }

//const Slider = ({ items, className, itemClassName }: LinksListProps) => {
const Slider = () => {
  
  return (
    <div 
    className="border rounded shadow-lg w-full h-[640px] bg-cover bg-center" 
    style={{backgroundImage: `url(${import.meta.env.BASE_URL}${images.pages.home.banner}`}}
    >
    </div>
  );
};

export default Slider;