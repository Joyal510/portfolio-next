import "./../globals.css";
import Image from "next/image";
import daki from "./../images/daki.jpg";

export default function Video() {
  return (
    <div className="container">
      <div className="row justify-content-center my-5 gap-5">
        <div className="col-8 col-sm-12 col-lg-6 col-xl-4 info-card">
          <div className="fs-1 video-editing-title"> {`Video Editing`} </div>
          <div className="video-editing-desc">
            {`I enjoy editing videos as a hobby, especially using Adobe Premiere
            Pro. Recently, I edited a video for a client, making sure the audio
            synced perfectly.`}
          </div>
          <br></br>
          <a
            className="text-secondary-emphasis link-underline-secondary"
            href="https://www.youtube.com/watch?v=y2zK2XHVHck"
            target="_blank"
          >
            {"Link"}
            
          </a>
        </div>
        <div className="col-9 col-sm-8 col-md-6 col-lg-5 col-xl-3 mx-5 image-card">
          <Image className="image-itself" src={daki} height={250} />
        </div>
      </div>
    </div>
  );
}
