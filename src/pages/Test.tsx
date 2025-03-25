import Slider from "../components/common/Slider";

const Test = () => {

let slides = [
    'https://c4.wallpaperflare.com/wallpaper/911/492/963/arbol-naturaleza-paisajes-prado-wallpaper-preview.jpg',
    'https://wallpapers.com/images/featured-full/fondos-de-hermosos-paisajes-wnxju2647uqrcccv.jpg',
    'https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/259280/pexels-photo-259280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
]

    return (
        <div className="w-[40%] m-auto">
            <Slider slides={slides}/>
        </div>
    );
};
 
export default Test;