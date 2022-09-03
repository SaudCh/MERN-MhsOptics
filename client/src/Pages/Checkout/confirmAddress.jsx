import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../Components/Context/CartContext";
import { AuthContext } from "../../Components/Context/AuthContext";
import { formatCurrency } from "../../Components/utils/currencyFormater";
import { toast } from "react-toastify";
import axios from "axios";
import "./checkout.css";
import { useNavigate } from "react-router-dom";
import { getCountries } from "../../Data/allCountries";
import { AddressValidation } from "./address";
import LoadingSpinner from "../../Components/Spinner/spinner";

export default function ConfirmAddress() {
  document.title = "Cart";
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);
  const { token } = useContext(AuthContext);
  const country = getCountries();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState("");
  const [account, setAccount] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    postalCode: "",
    country: "Afghanistan",
  });

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/api/users/me`, config)
      .then(function (response) {
        const user = response.data.data.data;

        setAccount({
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
  }, [token]);

  function handleChange(evt) {
    const value = evt.target.value;
    setAccount({
      ...account,
      [evt.target.name]: value,
    });
  }

  const toCheckout = async () => {
    setErrors("");
    const errors = AddressValidation(account);
    setErrors(errors);

    if (Object.keys(errors).length !== 0) {
      return;
    }

    setLoading(true);
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    await axios
      .patch(
        `${process.env.REACT_APP_SERVER_URL}/api/users/updateMe`,
        account,
        config
      )
      .then(function (response) {
        // console.log(response.data.status);
        toast.success("User Info Updated", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
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

    navigate("/checkout");
  };

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
      <div className="row justify-content-center align-items-center align-items-md-start flex-column-reverse flex-md-row">
        <div className="col-11 col-md-8">
          <div className="bg-light border p-2 rounded mb-3">
            <form className="row">
              {errors.api && (
                <div className="alert alert-danger col-12">{errors.api}</div>
              )}
              <h3>Account Details</h3>
              <div className="mb-3 col-11 col-md-6">
                <label htmlFor="fname" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="form-control"
                  name="firstName"
                  value={account.firstName}
                  onChange={handleChange}
                  id="fname"
                />
                {errors.firstName && (
                  <div className="text-danger" style={{ fontSize: 12 }}>
                    *{errors.firstName}
                  </div>
                )}
              </div>
              <div className="mb-3 col-11 col-md-6">
                <label htmlFor="lname" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={account.lastName}
                  onChange={handleChange}
                  className="form-control"
                  id="lname"
                />
                {errors.lastName && (
                  <div className="text-danger" style={{ fontSize: 12 }}>
                    *{errors.lastName}
                  </div>
                )}
              </div>

              <div className="mb-3 col-11 col-md-6">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={account.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="form-control"
                  id="email"
                />
                {errors.email && (
                  <div className="text-danger" style={{ fontSize: 12 }}>
                    *{errors.email}
                  </div>
                )}
              </div>

              <div className="mb-3 col-11 col-md-6">
                <label htmlFor="phone" className="form-label">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  value={account.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="form-control"
                  id="phone"
                />
                {errors.phone && (
                  <div className="text-danger" style={{ fontSize: 12 }}>
                    *{errors.phone}
                  </div>
                )}
              </div>

              <hr className="my-4" />

              <h3>Delivery address</h3>
              <div className="mb-3 col-11 col-md-6">
                <label htmlFor="street" className="form-label">
                  Street
                </label>
                <input
                  type="text"
                  name="street"
                  value={account.street}
                  onChange={handleChange}
                  placeholder="Street"
                  className="form-control"
                  id="street"
                />
                {errors.street && (
                  <div className="text-danger" style={{ fontSize: 12 }}>
                    *{errors.street}
                  </div>
                )}
              </div>
              <div className="mb-3 col-11 col-md-6">
                <label htmlFor="city" className="form-label">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={account.city}
                  onChange={handleChange}
                  placeholder="City"
                  className="form-control"
                  id="city"
                />
                {errors.city && (
                  <div className="text-danger" style={{ fontSize: 12 }}>
                    *{errors.city}
                  </div>
                )}
              </div>

              <div className="mb-3 col-11 col-md-6">
                <label htmlFor="postalcode" className="form-label">
                  Postal Code
                </label>
                <input
                  type="text"
                  name="postalCode"
                  value={account.postalCode}
                  onChange={handleChange}
                  placeholder="Postal Code"
                  className="form-control"
                  id="postalcode"
                />
                {errors.postalCode && (
                  <div className="text-danger" style={{ fontSize: 12 }}>
                    *{errors.postalCode}
                  </div>
                )}
              </div>

              <div className="mb-3 col-11 col-md-6">
                <label htmlFor="phone" className="form-label">
                  Country
                </label>
                <select
                  className="form-select"
                  name="country"
                  value={account.country}
                  onChange={handleChange}
                  aria-label="Default select example"
                >
                  {country.map((country) => (
                    <option value={country.name}>{country.name}</option>
                  ))}
                </select>
                {errors.country && (
                  <div className="text-danger" style={{ fontSize: 12 }}>
                    *{errors.country}
                  </div>
                )}
              </div>
            </form>
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
            <button
              onClick={() => toCheckout()}
              className="btn pay-button w-100 btn-outline-primary"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
