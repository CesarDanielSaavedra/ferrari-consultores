import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { useDictionary } from '../hooks/useDictionary';  


const Home = () => {

  const { language } = useLanguage();
  const { pages } = useDictionary(language);  
  
  return (
    <div className="mx-auto">
      {/* Sección del banner */}
      <div className="mb-4 border rounded shadow-lg w-full h-[300px] bg-cover bg-center" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}assets/images/banner-playa.jpg)` }}>
        <div className="w-full h-full flex items-end justify-start bg-black bg-opacity-40">
          <h1 className="mb-8 ml-4 font-serif text-white text-4xl font-semibold">{pages.home.welcomeTitle}</h1>
        </div>
      </div>

      <div className="space-y-4">
        {Object.entries(pages.home.sections).map(([key, section]) => (
          <section key={key} className="p-4 border rounded shadow-lg">
            <h2 className="font-serif text-xl font-semibold">
              <Link to={`/${key}`} className="text-blue-500 hover:underline">
                {section.title}
              </Link>
            </h2>
            <p className="font-vietnam text-gray-600">
              {section.description}
            </p>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Home;