import React from "react";
import "pure-react-carousel/dist/react-carousel.es.css";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import ViewMoreCard from "../../Components/Home/ViewMoreCard";
import useWindowDimensions from "../../Components/Hooks/useWindowDimensions";
import { ChevronLeftIcon, ChevronRightIcon } from "../../Components/icons";
import SoloSlide from "./Slide";
import { useTranslation } from "react-i18next";

function Items(props) {
  const { isLoading } = props;
  const products = props.products ? props.products : [];
  const { t } = useTranslation();

  const { width } = useWindowDimensions();
  const visibleSlides = width > 992 ? 4 : width > 768 ? 3 : width > 576 ? 2 : 1;
  if (products?.length === 0 && isLoading === false) {
    return (
      <>
        <div className="col-12 mt-2 text-center">
          <h1 style={{ fontSize: 30, fontWeight: "bold" }}>
            {t("our_best_items")}
          </h1>
        </div>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: "20vh" }}
        >
          <div>
            <span>No Product Found</span>
          </div>
        </div>
      </>
    );
  }
  return (
    <section className="container-fluid mt-2">
      <div className="row justify-content-center position-relative">
        <div className="col-12 text-center">
          <h1 style={{ fontSize: 30, fontWeight: "bold" }}>
            {t("our_best_items")}
          </h1>
        </div>
        {isLoading ? (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "20vh" }}
          >
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <CarouselProvider
            className="relative mt-8"
            isIntrinsicHeight={true}
            naturalSlideWidth={250}
            totalSlides={products?.length}
            visibleSlides={visibleSlides}
          >
            {visibleSlides < products?.length && (
              <ButtonBack className="home-item-chevron home-item-chevron-left">
                <ChevronLeftIcon color="black" />
              </ButtonBack>
            )}
            <Slider>
              {products.map((item, index) => (
                <Slide key={index}>
                  <SoloSlide item={item} />
                </Slide>
              ))}
              <Slide className=" px-4" index={Math.random()}>
                <ViewMoreCard />
              </Slide>
            </Slider>
            {visibleSlides < products?.length && (
              <ButtonNext className="home-item-chevron home-item-chevron-right">
                <ChevronRightIcon color="black" />
              </ButtonNext>
            )}
          </CarouselProvider>
        )}
      </div>
    </section>
  );
}

export default Items;
