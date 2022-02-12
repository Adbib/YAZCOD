import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "remix";

type Props = {};

export default function SectionTwo(props: any): JSX.Element {
  console.log(props);
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
              <LazyLoadImage
                className="img-fluid"
                src="https://technext.github.io/majestic-2/v1.0.1/assets/img/gallery/her.png"
                alt="..."
                width="790"
              />
              <div className="card-img-overlay d-flex flex-center">
                {" "}
                <Link className="btn btn-lg btn-light" to={"/category/:id"}>
                  For Her
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card card-span h-100 text-white">
              {" "}
              <LazyLoadImage
                className="img-fluid"
                src="https://technext.github.io/majestic-2/v1.0.1/assets/img/gallery/him.png"
                alt="..."
                width="790"
              />
              <div className="card-img-overlay d-flex flex-center">
                {" "}
                <Link className="btn btn-lg btn-light" to={"/category/:id"}>
                  For Him{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
