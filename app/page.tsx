import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-background text-foreground overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Works />
      <Contact />
      <Footer />
    </main>
  );
}
