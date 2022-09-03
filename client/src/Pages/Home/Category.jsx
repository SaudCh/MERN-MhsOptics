import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function Category(props) {
  const categories = props.categories ? props.categories : [];
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className="container-fluid mt-2">
      <div className="row align-items-center justify-content-center">
        <div className="col-12 text-center">
          <h1 style={{ fontSize: 30, fontWeight: "bold" }}>
            {t("Buy glasses at MSH Optics")}
          </h1>
          <p>{t("Rich in Style")}</p>
        </div>

        {props.isLoading ? (
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          categories.map((item, index) => (
            <div
              className="col-6 col-sm-4 col-md-2 p-1 m-0 my-2"
              onClick={() => navigate(`/category/${item._id}`)}
            >
              <figure className="col-12 border category-image-container overflow-hidden mx-1 mb-0">
                <img
                  src={`${process.env.REACT_APP_SERVER_URL}/img/category/${item.categoryImage}`}
                  className="m-0 p-0 col-10 category-image"
                  alt=""
                />
              </figure>

              <p className="text-center pt-0 mt-0">{item.name}</p>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
