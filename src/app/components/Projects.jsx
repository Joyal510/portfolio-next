import "./../globals.css";


import Carousel from "./Carousel";

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
          <div className="row">
            {/* <Carousel/> */}
          </div>
        </div>

        <div className="col-8 col-sm-7 col-md-5 col-lg-5 col-xl-5 d-flex flex-column gap-2 my-5">
          <div className="row fs-1 project-main-title mx-5">Projects</div>
          <div className="row fs-5 mx-4 ">
            <a
              href="https://starttocalisthenics.netlify.app/"
              target="_blank"
              className="text-secondary-emphasis link-underline-secondary"
            >
              {"1. Calisthenics guide"}
            </a>
          </div>
          <div className="row fs-5 mx-4">
            <a
              href="https://1secemail.netlify.app/"
              target="_blank"
              className="text-secondary-emphasis link-underline-secondary"
            >
              {"2. AI Email Generator"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
