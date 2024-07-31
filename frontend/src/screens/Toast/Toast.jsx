import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = ({ variant, children }) => {
  const notify = () => {

    variant(children, {
      position: "top-right",
      autoClose: 5000,
      closeOnClick: true,
    });

    // toast.success("blah blah blah", {
    //   position: "top-right",
    //   autoClose: 5000,
    //   closeOnClick: true,
    // });
    // toast.error("blah blah blah", {
    //   position: "bottom-right",
    //   autoClose: 5000,
    //   closeOnClick: true,
    // });
    // toast.info("blah blah blah", {
    //   position: "bottom-left",
    //   autoClose: 5000,
    //   closeOnClick: true,
    // });
    // toast.warning("blah blah blah", {
    //   position: "top-left",
    //   autoClose: 5000,
    //   closeOnClick: true,
    // });
  };

  notify();
  return (
    <div>
      <ToastContainer limit={1} />
    </div>
  );
};

// // success|info|warning|error
// |top-left|top-center|bottom-right|bottom-left|bottom-center

export default Toast;
