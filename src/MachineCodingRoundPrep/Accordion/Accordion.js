import React, { useEffect, useState } from "react";
import style from "./Accordion.module.css";
function Accordion() {
  const [productsInfo, setProductsInfo] = useState([]);
  const [selectedProd, setSelectedProd] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products?limit=10&skip=10&select=title,price,id"
        );
        const data = await response.json();

        if (data && Array.isArray(data?.products)) {
          setProductsInfo(data.products);
        }
      } catch (e) {
        console.log("Error : ", e.message());
      }
    })();
  }, []);

  return (
    <div className={style.container}>
      <div className={style.heading}>Product Details</div>
      <div
        className={style.prodsInfoContaines}
        onClick={(e) => {
          if (selectedProd === e.target.dataset.index) {
            setSelectedProd(null);
            return;
          }
          setSelectedProd(e.target.dataset.index);
        }}
      >
        {productsInfo.map((ele) => {
          return (
            <AccordionItems
              key={ele.id}
              prodDetails={ele}
              selectedProd={selectedProd}
            />
          );
        })}
      </div>
    </div>
  );
}

function AccordionItems({ prodDetails, selectedProd }) {
  return (
    <div className={style.ItemContainer}>
      <div className={style.prodInfo} data-index={prodDetails?.id}>
        <div>Title : {String(prodDetails?.title).toLocaleUpperCase()}</div>
        <div>Price : Rs {String(prodDetails?.price).toLocaleUpperCase()}</div>
      </div>
      {selectedProd == prodDetails?.id && (
        <div className={style.prodImg}>
          <ImageScroll prodId={prodDetails?.id} />
        </div>
      )}
    </div>
  );
}

function ImageScroll({ prodId }) {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState("");
  const [currIndex, setCurrIndex] = useState(0);
  useEffect(() => {
    if (prodId) {
      (async () => {
        try {
          setIsLoading("Loading...");
          const response = await fetch(
            `https://dummyjson.com/products/${prodId}`
          );
          const data = await response.json();
          if (data) {
            setIsLoading("");
            setImages(data?.images);
          }
        } catch (e) {
          setIsLoading("Not Available");
          console.log("Error : ", e.message());
        }
      })();
    }
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrIndex((prev) => (prev === images?.length - 1 ? 0 : prev + 1));
    }, 1500);

    return () => {
      clearInterval(id);
    };
  }, [images]);

  return (
    <div>
      <img
        src={images[currIndex]}
        alt={isLoading}
        width="400px"
        height="275px"
      />
    </div>
  );
}
export default Accordion;
