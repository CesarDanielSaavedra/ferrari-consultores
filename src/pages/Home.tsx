import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { useDictionary } from '../hooks/useDictionary';  

import Slider from '../components/common/Slider';

const Home = () => {

  const { language } = useLanguage();
  const { pages } = useDictionary(language);  
  
  let slides = [
    'https://c4.wallpaperflare.com/wallpaper/911/492/963/arbol-naturaleza-paisajes-prado-wallpaper-preview.jpg',
    'https://wallpapers.com/images/featured-full/fondos-de-hermosos-paisajes-wnxju2647uqrcccv.jpg',
    'https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/259280/pexels-photo-259280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  ]

  return (
    <div className="mx-auto bg-secondary-lightGray">
      {/* Sección del banner */}
      <Slider slides={slides}/>

      <div className="space-y-4 p-4">
        {Object.entries(pages.home.sections).map(([key, section]) => (
          <section key={key} className="p-4 bg-secondary-butter border rounded-xl shadow-lg">
            <h2 className="font-serif text-xl font-semibold">
              <Link to={`/${key}`} className="text-primary-light hover:underline">
                {section.title}
              </Link>
            </h2>
            <p className="font-vietnam text-secondary-gray">
              {section.description}
            </p>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Home;