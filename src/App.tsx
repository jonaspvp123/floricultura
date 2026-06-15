import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Occasions from './components/Occasions';
import Testimonials from './components/Testimonials';
import InstagramGrid from './components/InstagramGrid';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-sans antialiased text-[#1A1A1A] w-full overflow-x-hidden selection:bg-[#FFF5F7] selection:text-[#1A1A1A]">
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <Features />
        <Gallery />
        <Occasions />
        <Testimonials />
        <InstagramGrid />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
