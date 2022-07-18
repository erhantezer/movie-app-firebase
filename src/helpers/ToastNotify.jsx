
//! Toastify alert gibi bildirim yapan bir tool dur
//! Tastify aşağıda görüldüğü bibi import edilip index.js kısmına da import yapılır.
//! index.js import "react-toastify/dist/ReactToastify.css";
//! Ayrıca paket olarak yarn add "react-toastify": "^9.0.5", olarak indirilir

import { toast } from "react-toastify";


export const toastWarnNotify = (msg) => {
  toast.warn(msg, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const toastSuccessNotify = (msg) => {
  toast.success(msg, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const toastErrorNotify = (msg) => {
  toast.error(msg, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
