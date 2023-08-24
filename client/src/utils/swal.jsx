import Swal from "sweetalert2";
import styles from "./swal.module.css";

export const SwalModal = Swal.mixin({
  customClass: `${styles.swal}`,
});

const Toast = Swal.mixin({
  toast: true,
  position: "bottom-right",
  showConfirmButton: false,
  customClass: `${styles.toast}`,
  timer: 2000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

export const successModal = (title, text) => {
  SwalModal.fire({
    title: title,
    text: text,
    icon: "success",
  });
};

export const errorModal = (title, text) => {
  SwalModal.fire({
    title: title,
    text: text,
    icon: "error",
  });
};

export const infoModal = (title, text) => {
  SwalModal.fire({
    title: title,
    html: text,
    background: "#03217b",
    icon: "info",
  });
};

export const infoToast = (message) => {
  Toast.fire({
    icon: "info",
    title: message,
    background: "#03217b",
    color: "#FFFFFF",
  });
};

export const successToast = (message) => {
  Toast.fire({
    icon: "success",
    title: message,
    background: "#30AC7D",
    color: "#FFFFFF",
  });
};

export const errorToast = (message) => {
  Toast.fire({
    icon: "error",
    title: message,
    background: "#FB010D",
    color: "#FFFFFF",
  });
};
