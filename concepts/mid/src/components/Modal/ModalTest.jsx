import React, { useState } from "react";

import Modal from "./Modal";

const ModalTest = () => {
  const [openModalPopup, setOpenModalPopup] = useState(false);

  function handleToggleModalPopup() {
    setOpenModalPopup(!openModalPopup);
  }

  return (
    <div>
      <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
      {openModalPopup && <Modal body={<div>Custom body</div>} />}
    </div>
  );
};

export default ModalTest;
