import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Expertise from "@/components/Expertise";
import Certifications from "@/components/Certifications";
import Ventures from "@/components/Ventures";
import Insights from "@/components/Insights";
import Drives from "@/components/Drives";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Journey />
        <Expertise />
        <Certifications />
        <Ventures />
        <Insights />
        <Drives />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
