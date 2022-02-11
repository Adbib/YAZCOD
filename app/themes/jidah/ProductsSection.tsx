import React from "react";
import ProductItem from "./ProductItem";

type Props = {};

export default function ProductsSection({}: Props) {
  return (
    <section className="py-0">
      <div className="container">
        <div className="row h-100">
          <div className="col-lg-7 mx-auto text-center mt-7 mb-5">
            <h5 className="fw-bold fs-3 fs-lg-5 lh-sm">Best Deals</h5>
          </div>
          <div className="col-12">
            <div
              className="carousel slide"
              id="carouselBestDeals"
              data-bs-touch="false"
              data-bs-interval="false"
            >
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                  <div className="row h-100 align-items-center g-2">
                    <ProductItem
                      title="bla"
                      price={12}
                      image="https://technext.github.io/majestic-2/v1.0.1/assets/img/gallery/flat-hill.png"
                    />
                    <ProductItem
                      title="bla"
                      price={12}
                      image="https://technext.github.io/majestic-2/v1.0.1/assets/img/gallery/flat-hill.png"
                    />
                    <ProductItem
                      title="bla"
                      price={12}
                      image="https://technext.github.io/majestic-2/v1.0.1/assets/img/gallery/blue-ring.png"
                    />
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="row h-100 align-items-center g-2">
                    <ProductItem
                      title="bla"
                      price={12}
                      image="https://technext.github.io/majestic-2/v1.0.1/assets/img/gallery/flat-hill.png"
                    />
                    {/* <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                      <div className="card card-span h-100 text-white">
                        <img
                          className="img-fluid h-100"
                          src="assets/img/gallery/flat-hill.png"
                          alt="..."
                        />
                        <div className="card-img-overlay ps-0"> </div>
                        <div className="card-body ps-0 bg-200">
                          <h5 className="fw-bold text-1000 text-truncate">
                            Flat Hill Slingback
                          </h5>
                          <div className="fw-bold">
                            <span className="text-600 me-2 text-decoration-line-through">
                              $200
                            </span>
                            <span className="text-primary">$175</span>
                          </div>
                        </div>
                        <a className="stretched-link" href="#"></a>
                      </div>
                    </div> */}
                  </div>
                </div>
                <div className="row">
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselBestDeals"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselBestDeals"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 d-flex justify-content-center mt-5">
            {" "}
            <a className="btn btn-lg btn-dark" href="#!">
              View All{" "}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
