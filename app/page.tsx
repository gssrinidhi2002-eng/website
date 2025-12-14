import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Works from "./components/Works";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-background text-foreground overflow-hidden">
      <Navbar />
      <Hero />
      <Works />
      <Blogs />
      <Contact />
      <Footer />
    </main>
  );
}
