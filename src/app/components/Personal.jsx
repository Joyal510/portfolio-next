"use client";

import Image from "next/image";
import Link from "next/link";
import me from "./../images/me.jpg";
import github from "./../images/github-logo.png";
import linkedin from "./../images/linkedin.png";
import download from "../images/download.svg";
import "bootstrap/dist/css/bootstrap.css";
import "./../globals.css";


export default function Personal() {
  const pdf_file = "http://localhost:3000/resume.pdf";

  const handleDownload = (url) => {
    const fileName = url.split("/").pop();
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    link.remove();
  };
  return (
    <div className="container">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-6 d-flex justify-content-center col-sm-5 col-md-4 col-lg-3 col-xl-2 col-xxl-3 my-5 mx-5">
          <Image height={200} src={me} className="circle" />
        </div>
        <div className=" col-7 col-sm-8 col-md-6 col-lg-5 col-xl-4 my-5 mx-5  right-card">
          <div className="row">
            <div className="col d-flex justify-content-center col-md-10 col-lg-9 mx-4">
              {"Joyal Corda."}
            </div>
          </div>
          <div className="row">
            <div className="col d-flex justify-content-center mx-4">
              {"a Web Developer"}
            </div>
          </div>
          <div className="row d-flex justify-content-center my-3 gap-4 mx-4">
            <div className="col-3 d-flex justify-content-center col-sm-2 col-md-2 col-lg-2 col-xl-2">
              <Link target="_blank" href="https://github.com/Joyal510">
                <Image src={github} height={50} />
              </Link>
            </div>
            <div className="col-2 d-flex justify-content-center col-sm-3 col-md-2 col-lg-3 col-xl-2 ">
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/joyal-corda-488923252/"
              >
                <Image src={linkedin} height={60} />
              </Link>
            </div>
            <div className="col-2 d-flex justify-content-center col-sm-2 col-md-2 col-lg-2 col-xl-2">
              <Link
                href="https://drive.google.com/file/d/1aCDoT3iUZ1lqiZ1bl1Z5h4OtKHYv_h9q/view?usp=drive_link"
                target="_blank"
              >
                <Image src={download} height={40} />
                {/* <label className="fs-4 mx-3">{`resume`}</label> */}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
