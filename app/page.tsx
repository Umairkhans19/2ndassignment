import Header from '../app/components/header';
import Footer from '../app/components/footer';
import Hero from '../app/components/hero';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
};

export default Home;