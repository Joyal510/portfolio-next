import "./../globals.css";
import Link from "next/link";
import Image from "next/image";
import link from "../images/link.png"
import Carousel from "./Art";

export default function Projects() {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col col-sm-10 col-lg-5 col-xl-4 d-flex flex-column gap-2 my-5 mx-5">
          <div className="row d-flex justify-content-evenly gap-2">
            <div id="each" className="col-2 col-sm-2 col-lg-2">
              {"HTML"}
            </div>
            <div id="each" className="col-2 col-sm-2  col-md-2 col-lg-2">
              {"CSS"}
            </div>
            <div id="each" className="col-2 col-sm-2 col-lg-2">
              {"Javascript"}
            </div>
            <div id="each" className="col-2 col-sm-2 col-lg-2">
              {"React.js"}
            </div>
            <div id="each" className="col-2 col-sm-2 col-lg-2">
              {"Next.js"}
            </div>
            <div id="each" className="col-2 col-sm-2 col-lg-2">
              {"MongoDB"}
            </div>
            <div id="each" className="col-2 col-sm-2 col-md-2 col-lg-2">
              {"Adobe Premiere Pro"}
            </div>
            <div id="each" className="col-2 col-sm-2 col-lg-2">
              {"VS Code"}
            </div>
          </div>
          <div className="row">{/* <Carousel/> */}</div>
        </div>

        <div className="col-10 col-sm-8 col-md-6 col-lg-5 col-xl-5 d-flex flex-column gap-2 my-5">
          <div className="row fs-1 project-main-title mx-5">
            <div className="col-8 col-md">{"Projects"}</div>
          </div>
          <div className="row fs-5 mx-4 ">
            <div className="col col-sm-10 col-md mx-2">
              <Link
                href="https://starttocalisthenics.netlify.app/"
                target="_blank"
                className="text-secondary-emphasis link-underline-secondary"
              >
                {"1. Calisthenics guide"}
              </Link>
              <Image className="mx-2" src={link} height={20}/>
            </div>
          </div>
          <div className="row fs-5 mx-4">
            <div className="col mx-2">
              <Link
                href="https://1secemail.netlify.app/"
                target="_blank"
                className="text-secondary-emphasis link-underline-secondary"
              >
                {"2. AI Email Generator"}
              </Link>
              <Image className="mx-2" src={link} height={20}/>
            </div>
          </div>
          <div className="row fs-5 mx-4 ">
            <div className="col col-sm-10 col-md mx-2">
              <Link
                href="/"
                className="text-secondary-emphasis link-underline-secondary"
              >
                {"3. NFT Generator App"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
