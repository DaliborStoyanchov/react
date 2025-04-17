import React, { useState } from "react";

import Modal from "./Modal";

const ModalTest = () => {
  const [openModalPopup, setOpenModalPopup] = useState(false);

  const handleToggleModalPopup = () => {
    setOpenModalPopup(!openModalPopup);
  };

  const onClose = () => {
    setOpenModalPopup(false);
  };

  return (
    <div>
      <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
      {openModalPopup && (
        <Modal onClose={onClose} body={<div>Custom body</div>} />
      )}
    </div>
  );
};

export default ModalTest;
