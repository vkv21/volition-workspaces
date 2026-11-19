import { Amenities } from "./sections/Amenities";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";
import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { Spaces } from "./sections/Spaces";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Amenities />
        <Spaces />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
