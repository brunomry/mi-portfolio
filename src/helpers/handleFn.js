import cv from "../assets/CV Bruno Madozzo Romay.pdf";

export const handleWpp = (text) => {
  const phoneNumber = "5493816561404";
  const message = `${text}`;
  window.open(
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
};

export const handleDownloadPDF = () => {
  const urlPDF = cv;
  window.open(urlPDF, "_blank", "noopener");
};
