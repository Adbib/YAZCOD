import React from "react";

type Props = {};

export default function SectionTwo({}: Props) {
  return (
    <section
      className="py-0"
      id="header"
      style={{ marginTop: "- 23rem !important" }}
    >
      <div className="container">
        <div className="row g-0">
          <div className="col-md-6">
            <div className="card card-span h-100 text-white">
              {" "}
              <img
                className="img-fluid"
                src="https://technext.github.io/majestic-2/v1.0.1/assets/img/gallery/her.png"
                alt="..."
                width="790"
              />
              <div className="card-img-overlay d-flex flex-center">
                {" "}
                <a className="btn btn-lg btn-light" href="#!">
                  For Her
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card card-span h-100 text-white">
              {" "}
              <img
                className="img-fluid"
                src="https://technext.github.io/majestic-2/v1.0.1/assets/img/gallery/him.png"
                alt="..."
                width="790"
              />
              <div className="card-img-overlay d-flex flex-center">
                {" "}
                <a className="btn btn-lg btn-light" href="#!">
                  For Him{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
