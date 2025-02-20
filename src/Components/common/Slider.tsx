
// import images from '../../assets/images/images.json';
// type Items = {
//   path: string;
//   label: string;
// };

// interface LinksListProps {
//   items: Items[];
//   className?: string;
//   itemClassName?: string;
// }

interface SliderProps {
  slides: string[];
}

const Slider = ({ slides }: SliderProps) => {
  
  return (
    <div className="flex  scrollbar-hide">
      {slides.map((slide, index) => (
        <div 
          key={index}
          className="border rounded shadow-lg w-full h-[640px] bg-cover bg-center flex-shrink-0" 
          style={{backgroundImage: `url(${slide})`}}
        >
        </div>
      ))}
    </div>
  );
};

export default Slider;