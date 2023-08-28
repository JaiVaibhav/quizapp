import Style from "./InfiniteScroll.module.css";
import React, { useEffect, useState } from "react";

function InfiniteScroll() {
  const [blockCount, setBlockCount] = useState(12);
  function addBlock() {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight
    ) {
      setBlockCount((prev) => prev + 6);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", addBlock);
    return () => {
      window.removeEventListener("scroll", addBlock);
    };
  }, []);

  return (
    <div className={Style.container}>
      <div className={Style.heading}>InfiniteScroll</div>
      <div className={Style.blockContainer}>
        {[...Array(blockCount)].map((_, i) => {
          return <div className={Style.block}>{i + 1}</div>;
        })}
      </div>
    </div>
  );
}

export default InfiniteScroll;
