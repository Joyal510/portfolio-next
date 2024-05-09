
import Personal from "./components/Personal";
import Partition from "./components/Partition";
import Projects from "./components/Projects";
import Video from "./components/Video";
import LastNote from "./components/LastNote";
import Footer from "./components/Footer";
import Art from "./components/Art";

export default function Home() {
  return (
    <div>
      <Personal />
      <Partition />
      <Projects />
      <Partition />
      <Video />
      <Partition />
      <Art/>
      <Partition />
      <LastNote/>
      <Footer/>
    </div>
  );
}
