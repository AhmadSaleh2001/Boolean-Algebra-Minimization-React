import { useState, useEffect } from "react";
let Modal = ({ Message, ChangeStateError }) => {
  let [Active, SetActive] = useState(0);

  let ToClose = () => {
    SetActive(!Active);
    setTimeout(() => {
      ChangeStateError();
    }, 500);
  };
  useEffect(() => {
    SetActive(1);
  }, [Message]);
  return (
    <div className="Modal">
      <div className="Overlay" onClick={ToClose}></div>
      <div className={`Content ${Active ? "Show" : ""}`}>
        <div className="Body">
          <h3>{Message}</h3>
          <div className="Close" onClick={ToClose}>
            Close
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
