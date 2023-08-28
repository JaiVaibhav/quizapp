import React, { useState } from "react";
import styles from "./ModelComponent.module.css";
function ModelComponent() {
  const [openModal, setOpenModal] = useState(false);
  function handleClick() {}
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        dolorum, deserunt odit, excepturi eum nam sed reiciendis veniam facilis
        saepe laboriosam maiores quas! Excepturi eum unde quaerat! Asperiores,
        unde nisi.
      </div>
      <button
        className={styles.btn}
        onClick={() => setOpenModal((prev) => !prev)}
      >
        Open Modal
      </button>

      {openModal && <ModalComponent handleClose={setOpenModal} />}
    </div>
  );
}

function ModalComponent({ handleClose }) {
  return (
    <div className={styles.ModalContainer}>
      <div className={styles.Modal}>
        <div className={styles.ModalHeader}>
          <div>Modal</div>
          <div onClick={() => handleClose(false)}>&#x2715;</div>
        </div>
        <hr></hr>
        <div className={styles.ModalText}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
          similique enim sed sint architecto provident porro laborum ipsa
          maiores quos! Consequatur quas voluptatum veniam praesentium minima,
          unde impedit blanditiis illum.
        </div>
      </div>
    </div>
  );
}

export default ModelComponent;
