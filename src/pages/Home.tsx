import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { useDictionary } from '../hooks/useDictionary';  

import Slider from '../components/common/Slider';

const Home = () => {

  const { language } = useLanguage();
  const { pages } = useDictionary(language);  
  
  return (
    <div className="mx-auto bg-secondary-lightGray">
      {/* Sección del banner */}
      <Slider />

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