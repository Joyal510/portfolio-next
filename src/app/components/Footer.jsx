import "./../globals.css";
import Image from "next/image";
import email from "../images/email.jpg";

export default function Footer() {
  return (
    <div className="container footer-background ">

      <div className="row d-flex flex-column p-5">
        <div className="col d-flex justify-content-center">
          <Image src={email} height={25} />
          <label className="text-light mx-2">joyal.corda510@gmail.com</label>
        </div>
        <div className="col d-flex justify-content-center text-white-50 copyright">
          All rights reserved | © Copyright 2024
        </div>
      </div>
      
    </div>
  );
}
