import React, { useEffect, useState } from "react";
import style from "./Pagination.module.css";
function Pagination() {
  const [allProduct, setAllProduct] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    console.log("asdfasdf");
    (async function fetchProducts() {
      const res = await fetch(
        "https://dummyjson.com/products?limit=9&skip=" + (page - 1) * 9
      );
      const data = await res.json();

      if (data && data?.products?.length) {
        setAllProduct(data?.products);
        setTotal(data.total);
      }
    })();
  }, [page]);
  return (
    <div>
      <div className={style.container}>
        {allProduct?.map((item) => {
          return <SingleProduct key={item.id} item={item} />;
        })}
      </div>

      <div className={style.paginate}>
        {page > 1 && (
          <button onClick={() => setPage((page) => page - 1)}>Previous</button>
        )}
        <div className={style.pageBlock}>
          {[...Array(Math.ceil(total / 9))].map((ele, i) => {
            return (
              <button
                onClick={() => setPage(i + 1)}
                className={style.page}
                style={page === i + 1 ? { backgroundColor: "white" } : {}}
              >
                {i + 1}
              </button>
            );
          })}
        </div>
        {page < total / 9 && (
          <button onClick={() => setPage((page) => page + 1)}>Next</button>
        )}
      </div>
    </div>
  );
}

function SingleProduct({ item }) {
  return (
    <div className={style.PContainer}>
      <img className={style.Pimg} src={item?.thumbnail} alt="Not Available" />
      <div className={style.PDetailsContainer}>
        <div className={style.Pdetails}>
          <div>{String(item?.title).toUpperCase()}</div>
          <div>Rs.{item?.price}</div>
        </div>
        <div>{String(item?.description).substring(0, 75)}</div>
      </div>
    </div>
  );
}

export default Pagination;
