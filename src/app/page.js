import styles from "./page.module.css";
import Personal from "./components/Personal";
import Partition from "./components/Partition";
import Projects from "./components/Projects";
import Video from "./components/Video";
import LastNote from "./components/LastNote";

export default function Home() {
  return (
    <div>
      <Personal />
      <Partition />
      <Projects />
      <Partition />
      <Video />
      <Partition/>
      <LastNote/>
    </div>
  );
}
