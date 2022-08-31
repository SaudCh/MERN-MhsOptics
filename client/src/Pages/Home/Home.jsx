import React, { useEffect } from "react";
import Header from "../../Components/Header";
import "../../Components/css/home.css";
import Category from "./Category";
import Background from "./Background";
import Items from "./Items";
import OurWays from "./OurWays";
import Footer from "../../Components/Footer";
import { useState } from "react";
import axios from "axios";
import LoadingSpinner from "../../Components/Spinner/spinner";

export default function Home() {
  document.title = "mhOptics";
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true);
      await axios
        .get(`${process.env.REACT_APP_SERVER_URL}/getoverview`)
        .then(function (response) {
          setData(response.data);
        })
        .catch(function (error) {
          const err = {};
          err.api = error.response.data?.message
            ? error.response.data.message
            : error.message;
        });
      setIsLoading(false);
    };
    getProducts();
  }, []);

  return (
    <>
      {isLoading && <LoadingSpinner asOverlay />}
      <Header background={false} />
      <Background />
      <Category categories={data?.categories} />
      <Items products={data?.products} />
      <OurWays />
      <Footer />
    </>
  );
}
