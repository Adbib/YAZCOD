import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <section className="py-0 pt-7">
      <div className="container">
        <div className="row">
          <div className="col-6 col-lg-2 mb-3">
            <h5 className="lh-lg fw-bold text-1000">Company Info</h5>
            <ul className="list-unstyled mb-md-4 mb-lg-0">
              <li className="lh-lg">
                <a className="text-800 text-decoration-none" href="#!">
                  About Us
                </a>
              </li>
              <li className="lh-lg">
                <a className="text-800 text-decoration-none" href="#!">
                  Affiliate
                </a>
              </li>
              <li className="lh-lg">
                <a className="text-800 text-decoration-none" href="#!">
                  Fashion Blogger
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-lg-2 mb-3">
            <h5 className="lh-lg fw-bold text-1000">Help &amp; Support</h5>
            <ul className="list-unstyled mb-md-4 mb-lg-0">
              <li className="lh-lg">
                <a className="text-800 text-decoration-none" href="#!">
                  Shipping Info
                </a>
              </li>
              <li className="lh-lg">
                <a className="text-800 text-decoration-none" href="#!">
                  Refunds
                </a>
              </li>
              <li className="lh-lg">
                <a className="text-800 text-decoration-none" href="#!">
                  How to Order
                </a>
              </li>
              <li className="lh-lg">
                <a className="text-800 text-decoration-none" href="#!">
                  How to Track
                </a>
              </li>
              <li className="lh-lg">
                <a className="text-800 text-decoration-none" href="#!">
                  Size Guides
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-lg-2 mb-3">
            <h5 className="lh-lg fw-bold text-1000">Customer Care</h5>
            <ul className="list-unstyled mb-md-4 mb-lg-0">
              <li className="lh-lg">
                <a className="text-800 text-decoration-none" href="#!">
                  Contact Us
                </a>
              </li>
              <li className="lh-lg">
                <a className="text-800 text-decoration-none" href="#!">
                  Payment Methods
                </a>
              </li>
              <li className="lh-lg">
                <a className="text-800 text-decoration-none" href="#!">
                  Bonus Point
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-6 col-lg-auto ms-auto">
            <h5 className="lh-lg fw-bold text-1000">
              Signup For The Latest News
            </h5>
            <div className="row input-group-icon mb-5">
              <div className="col-12">
                <input
                  className="form-control input-box"
                  type="email"
                  placeholder="Enter Email"
                  aria-label="email"
                />
                <svg
                  className="bi bi-arrow-right-short input-box-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  fill="#424242"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                  >
                    {" "}
                  </path>
                </svg>
              </div>
            </div>
            <p className="text-800">
              <svg
                className="feather feather-phone me-3"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span className="text-800">+3930219390</span>
            </p>
            <p className="text-800">
              <svg
                className="feather feather-mail me-3"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span className="text-800">something@gmail.com</span>
            </p>
          </div>
        </div>
        <div className="border-bottom border-3"></div>
        <div className="row flex-center my-3">
          <div className="col-md-6 order-1 order-md-0">
            <p className="my-2 text-1000 text-center text-md-start">
              {" "}
              Made with&nbsp;
              <svg
                className="bi bi-suit-heart-fill"
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                fill="#EB6453"
                viewBox="0 0 16 16"
              >
                <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"></path>
              </svg>
              &nbsp;by&nbsp;
              <a
                className="text-800"
                href="https://themewagon.com/"
                target="_blank"
              >
                ThemeWagon{" "}
              </a>
            </p>
          </div>
          <div className="col-md-6">
            <div className="text-center text-md-end">
              <a href="#!">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-facebook me-4"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#!">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-instagram me-4"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#!">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-youtube me-4"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
              <a href="#!">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-twitter me-4"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
