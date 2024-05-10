import "../globals.css";

export default function Education() {
  return (
    <div className="container d-flex justify-content-center flex-column gap-3 my-5">
      <div className="row ">
        <div className="col d-flex justify-content-center fs-1 education-title">
          {"Education"}
        </div>
      </div>
      <div className="row">
        <div id="year-title" className="col-6 col-lg-6 d-flex justify-content-center align-items-center fs-3">{`2017 - 2018`}</div>
        <div id="edu-card" className="col-4 col-lg-4">
          <label id="stream-title" className="fs-3">{`SSC`}</label>
          <br></br>
          <label className="fs-4">{`St. Augustine's High School, Vasai.`}</label>
        </div>
      </div>
      <div className="row">
        <div id="year-title" className="col-6 col-lg-6 d-flex justify-content-center align-items-center fs-3">{`2018 - 2020`}</div>
        <div id="edu-card" className="col-4 col-lg-4">
          <label id="stream-title" className="fs-3">{`HSC`}</label>
          <br></br>
          <label className="fs-5">{`St. Thomas Baptista Junior College, Vasai.`}</label>
        </div>
      </div>
      <div className="row">
        <div id="year-title" className="col-6 col-lg-6 d-flex justify-content-center align-items-center fs-3">{`2020 - 2023`}</div>
        <div id="edu-card" className="col-4 col-lg-4">
          <label id="stream-title" className="fs-3">{`Bsc - IT `}</label>
          <br></br>
          <label className="fs-4">{`St. Gonsalo Garcia College, Vasai.`}</label>
        </div>
      </div>
    </div>
  );
}
