import "bootstrap/dist/css/bootstrap.css";
import "./../globals.css";
import Image from "next/image";
import daki from "./../images/daki.jpg";

export default function Video() {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center my-5 gap-5">
        <div className="col-8 col-sm-8 col-md-9 col-lg-5 col-xl-9 col-xxl-7 info-card">
          <div className="row fs-1 mx-2 video-editing-title">
            <div className="col d-flex justify-content-center col-lg">{`Video Editing`}</div>
          </div>

          <div className="col col-md my-4 mx-3 video-editing-desc">
            {`I enjoy editing videos as a hobby, especially using Adobe Premiere
            Pro. Recently, I edited a video for a client, making sure the audio
            synced perfectly.`}
          </div>
          <br></br>
          <div className="col d-flex justify-content-center">
            {" "}
            <a
              className="text-secondary-emphasis mx-3 link-underline-secondary"
              href="https://www.youtube.com/watch?v=y2zK2XHVHck"
              target="_blank"
            >
              {"Link"}
            </a>
          </div>
        </div>
        <div className="col-8 d-flex justify-content-center col-md-5 col-lg-4 col-xl-4 col-xxl-8 image-card">
          <Image className="image-itself" src={daki} height={170} />
        </div>
      </div>
    </div>
  );
}
