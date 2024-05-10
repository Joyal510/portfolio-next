import Personal from "./components/Personal";
import Partition from "./components/Partition";
import Projects from "./components/Projects";
import Video from "./components/Video";
import LastNote from "./components/LastNote";
import Footer from "./components/Footer";
import Art from "./components/Art";
import Education from "./components/Education";

export default function Home() {
  return (
    <div>
      <Personal />
      <Partition />
      <Projects />
      <Partition />
      <Education />
      <Partition />
      <Video />
      <Partition />
      <Art />
      <Footer />
    </div>
  );
}
