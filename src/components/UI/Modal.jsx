import { Fragment } from "react";
import ReactDOM from "react-dom";




const ModalOverlay = (props) => {
  return (
    <div className="  fixed inset-0 bg-opacity-25 bg-black flex flex-col items-center  justify-center backdrop-blur-sm bg-transparent ">
      <div className="   my-44 top-40  mr-24  ml-40 w-96 bg-white p-8 rounded-lg shadow-md z-30 animate-slide-down  overflow-auto">
        {props.children}
      </div>
      </div>
   
  );
};

const portalElement = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <Fragment>
   
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};
export default Modal;
