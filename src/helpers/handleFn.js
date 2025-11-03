

export const handleWpp = (text) => {
  const phoneNumber = "5493816561404";
  const message = `${text}`;
  window.open(
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
};

export const handleCV = () => {
  const urlPDF = "https://drive.google.com/drive/folders/1ZDjfgy3qh964PTwXnTNt-tQVEK8TtJZw?usp=sharing";
  window.open(urlPDF, "_blank", "noopener");
};
