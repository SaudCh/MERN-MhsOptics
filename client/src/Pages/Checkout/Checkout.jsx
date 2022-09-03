import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../Components/Context/CartContext";
import { AuthContext } from "../../Components/Context/AuthContext";
import axios from "axios";
// import PayButton from "../../Components/PayButton";
import { formatCurrency } from "../../Components/utils/currencyFormater";
import { Link } from "react-router-dom";
import "./checkout.css";
import LoadingSpinner from "../../Components/Spinner/spinner";

export default function Checkout() {
  document.title = "Cart";
  const [activeOpt, setActiveOpt] = useState("card");
  const [address, setAddress] = useState("");
  const { cart } = useContext(CartContext);
  const { token } = useContext(AuthContext);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const year = new Date().getFullYear();

  useEffect(() => {
    const fetchAddress = async () => {
      setLoading(true);
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      await axios
        .get(`${process.env.REACT_APP_SERVER_URL}/api/users/me`, config)
        .then(function (response) {
          const user = response.data.data.data;

          setAddress({
            firstName: user?.firstName,
            lastName: user?.lastName,
            email: user?.email,
            phone: user?.phone,
            street: user?.street,
            city: user?.city,
            postalCode: user?.postalCode,
            country: user?.country,
          });
        })
        .catch(function (error) {
          const err = {};
          err.api = error.response.data?.message
            ? error.response.data.message
            : error.message;
          setErrors(err);
        });

      setLoading(false);
    };
    fetchAddress();
  }, [token]);

  if (cart.length === 0) {
    return (
      <div
        className="cart d-flex align-items-center justify-content-center"
        style={{ minHeight: "70vh" }}
      >
        <div className="text-center">
          <h1>Cart</h1>
          <p>There are no items in your cart.</p>
        </div>
      </div>
    );
  }
  return (
    <section
      className="container-fluid mt-3 pt-2 "
      style={{ minHeight: "72vh" }}
    >
      {loading && <LoadingSpinner asOverlay />}
      {errors.api && (
        <div className="alert alert-danger" role="alert">
          {errors.api}
        </div>
      )}
      <div className="row justify-content-center align-items-center align-items-md-start flex-column-reverse flex-md-row">
        <div className="col-11 col-md-8">
          <div className="bg-light border p-2 rounded">
            <h5>Select Payment Option</h5>

            <div className="d-flex" style={{ justifyContent: "space-evenly" }}>
              <btn
                className={`btn border payment-options ${
                  activeOpt === "card" ? "payment-options-active" : ""
                }`}
                onClick={() => setActiveOpt("card")}
              >
                Card Payment
              </btn>
              <btn
                className={`btn border payment-options ${
                  activeOpt === "cashondelivery" ? "payment-options-active" : ""
                }`}
                onClick={() => setActiveOpt("cashondelivery")}
              >
                Cash On Delievery
              </btn>
            </div>
            {activeOpt === "card" ? (
              <form className="mt-3">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Name on Card
                  </label>
                  <input type="text" class="form-control" id="name" />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Card Number
                  </label>
                  <input type="text" class="form-control" id="number" />
                </div>
                <div className="row">
                  <div className="col-12 col-md-4">
                    <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label">
                        Month
                      </label>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        {[...Array(12)].map((e, i) => (
                          <option value={i + 1}>{i + 1}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="col-12 col-md-4">
                    <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label">
                        Year
                      </label>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        {[...Array(10)].map((e, i) => (
                          <option value={i + year}>{i + year}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="col-12 col-md-4">
                    <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label">
                        CVV
                      </label>
                      <input type="text" class="form-control" id="number" />
                    </div>
                  </div>
                </div>
              </form>
            ) : null}

            {activeOpt === "cashondelivery" ? (
              <div className="my-3"></div>
            ) : null}
          </div>
          <div className="bg-light border p-2 rounded my-3">
            <h5>Address Details</h5>
            <p>
              <span className="fw-bold">Address</span>: {address.street},{" "}
              {address.city}, {address.postalCode}, {address.country}
            </p>
            <Link
              to="/confirm-address"
              className="btn text-white"
              style={{ backgroundColor: "#373B3C" }}
            >
              Change
            </Link>
          </div>
        </div>

        <div className="col-11 col-md-3">
          <div
            className=" bg-light border rounded p-2 mt-3 mt-md-0"
            style={{ minHeight: "40vh" }}
          >
            <div className="d-flex justify-content-between">
              <p className="h5">Order Summary</p>
            </div>
            {cart.map((e) => (
              <>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <div className="ms-1">
                      <p className="h6 p-0 m-0">{e.title}</p>
                      <p className="p-0 m-0 text-success fw-bold">
                        {formatCurrency(e.price)}
                      </p>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="p-0 m-0 text-success fw-bold">
                      {formatCurrency(e.price)}
                    </p>
                  </div>
                </div>
                <hr />
              </>
            ))}
          </div>
          <div className="mt-3">
            {/* <PayButton cart={cart} user={user} /> */}
            <button className="btn pay-button w-100 btn-outline-primary">
              Purchase Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
