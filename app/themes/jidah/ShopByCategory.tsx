import React from "react";

type Props = {};

export default function ShopByCategory({}: Props) {
  return (
    <section className="py-0" id="outlet">
      <div className="container">
        <div className="row h-100 g-0">
          <div className="col-md-6">
            <div className="card card-span h-100 text-white">
              <img
                className="card-img h-100"
                src="https://technext.github.io/majestic-2/v1.0.1/assets/img/gallery/summer.png"
                alt="..."
              />
              <div className="card-img-overlay bg-dark-gradient rounded-0">
                <div className="p-5 p-md-2 p-xl-5 d-flex flex-column flex-end-center align-items-baseline h-100">
                  <h1 className="fs-md-4 fs-lg-7 text-light">Summer of '21 </h1>
                </div>
              </div>
              <a className="stretched-link" href="#!"></a>
            </div>
          </div>
          <div className="col-md-6 h-100">
            <div className="row h-100 g-0">
              <div className="col-md-6 h-100">
                <div className="card card-span h-100 text-white">
                  <img
                    className="card-img h-100"
                    src="https://technext.github.io/majestic-2/v1.0.1/assets/img/gallery/sunglasses.png"
                    alt="..."
                  />
                  <div className="card-img-overlay bg-dark-gradient rounded-0">
                    <div className="p-5 p-xl-5 p-md-0">
                      <h3 className="text-light">Sunglasses</h3>
                    </div>
                  </div>
                  <a className="stretched-link" href="#!"></a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card card-span h-100 text-white">
                  <img
                    className="card-img h-100"
                    src="https://technext.github.io/majestic-2/v1.0.1/assets/img/gallery/footwear.png"
                    alt="..."
                  />
                  <div className="card-img-overlay bg-dark-gradient rounded-0">
                    <div className="p-5 p-xl-5 p-md-0">
                      <h3 className="text-light">Footwear</h3>
                    </div>
                  </div>
                  <a className="stretched-link" href="#!"></a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card card-span h-100 text-white">
                  <img
                    className="card-img h-100"
                    src="https://technext.github.io/majestic-2/v1.0.1/assets/img/gallery/hat-black-border.png"
                    alt="..."
                  />
                  <div className="card-img-overlay bg-dark-gradient rounded-0">
                    <div className="p-5 p-xl-5 p-md-0">
                      <h3 className="text-light">Hat</h3>
                    </div>
                  </div>
                  <a className="stretched-link" href="#!"></a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card card-span h-100 text-white">
                  <img
                    className="card-img h-100"
                    src="https://technext.github.io/majestic-2/v1.0.1/assets/img/gallery/watches.png"
                    alt="..."
                  />
                  <div className="card-img-overlay bg-dark-gradient rounded-0">
                    <div className="p-5 p-xl-5 p-md-0">
                      <h3 className="text-light">Watches</h3>
                    </div>
                  </div>
                  <a className="stretched-link" href="#!">
                    {" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
