import { Link } from 'react-router-dom';
import { useDictionary } from '../hooks/useDictionary';  


const Home = () => {
  const { pages } = useDictionary();  
  
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{pages.home.welcomeTitle}</h1>
      <div className="space-y-4">
        {Object.entries(pages.home.sections).map(([key, section]) => (
          <section key={key} className="p-4 border rounded shadow-lg">
            <h2 className="text-xl font-semibold">
              <Link to={`/${key}`} className="text-blue-500 hover:underline">
                {section.title}
              </Link>
            </h2>
            <p className="text-gray-700">
              {section.description}
            </p>
          </section>
        ))}
      </div>
    </main>
  );
};

export default Home;