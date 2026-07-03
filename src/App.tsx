import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Focus from "./components/Focus";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Focus />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
