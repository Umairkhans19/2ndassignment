import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';

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