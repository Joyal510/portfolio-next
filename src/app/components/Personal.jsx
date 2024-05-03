import Image from "next/image";
import Link from "next/link";
import me from "./../images/me.jpg";
import github from "./../images/github-logo.png";
import linkedin from "./../images/linkedin.png";
import "bootstrap/dist/css/bootstrap.css";
import "./../globals.css";

export default function Personal() {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-6 col-sm-7 col-md-5 col-lg-4 col-xl-3 my-5 mx-5">
          <Image height={300} src={me} className="circle" />
        </div>
        <div className=" col-7 col-sm-7 col-md-5 col-lg-4 my-5 mx-5  right-card">
          <div className="row">
            <div className="col col-md-12 col-lg-9 p-2">{"Joyal Corda."}</div>
          </div>
          <div className="row ">{"a Web Developer"}</div>
          <div className="row my-3">
            <div className="col-2 col-sm-3 col-md-3 col-lg-3 col-xl-2">
              <Link target="_blank" href="https://github.com/Joyal510">
                <Image src={github} height={50} />
              </Link>
            </div>
            <div className="col col-sm-2 col-md-2 col-lg-2 col-xl-2">
              <Link target="_blank" href="https://www.linkedin.com/in/joyal-corda-488923252/">
                <Image src={linkedin} height={60} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
