import React from "react";

type Props = {
  title: string;
  price: string | number;
  image: string;
  type?: string;
};

export default function ProductItem({ title, price, image, type }: Props) {
  return (
    <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
      <div className="card card-span h-100 text-white">
        <img className="img-fluid h-100" src={image} alt="..." />
        <div className="card-img-overlay ps-0"> </div>
        <div className="card-body ps-0 bg-200">
          <h5 className="fw-bold text-1000 text-truncate">{title}</h5>
          <div className="fw-bold">
            <span className="text-600 me-2 text-decoration-line-through">
              $200
            </span>
            <span className="text-primary">{price} $</span>
          </div>
        </div>
        <a className="stretched-link" href="#"></a>
      </div>
    </div>
  );
}
