import Image from "next/image";
import afo from "./../images/afo.jpg";
import girl from "./../images/girl.jpg";
import guy from "./../images/guy.jpg";
import reyleigh from "./../images/reyleigh.jpg";
import venom from "./../images/venom.jpg";
import me from "./../images/me.jpg";

export default function Art() {
  return (
    <div className="container">
      <div className="d-flex flex-column-reverse flex-md-row flex-sm-column-reverse  justify-content-center my-5">
        <div className="col col-md-8 col-lg-5 col-xxl-3 mx-4 p-2">
          {`One of my hobbies is sketching. I really enjoy drawing anime
            characters and portraits of real people. It brings me a lot of joy
            and satisfaction to capture the essence of these subjects through my
            sketches.`}
        </div>
        <div className="col col-lg-3 col-xxl-3 d-flex justify-content-start fs-1 mx-4 sketch-title">
          {"Sketching"}
        </div>
      </div>

      <div className="row d-flex   gap-2 my-4 p-3">
        <div className="col d-flex justify-content-center flex-wrap col-sm col-md col-lg col-xl col-xxl gap-2">
          <Image id="each-image" src={reyleigh} height={200} width={200} />

          <Image id="each-image" src={girl} height={250} width={200} />
          <Image
            id="each-image"
            className="guy"
            src={guy}
            height={300}
            width={266}
          />
        </div>
      </div>
    </div>
  );
}
