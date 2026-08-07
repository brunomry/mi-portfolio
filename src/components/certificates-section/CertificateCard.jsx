import { useState } from "react";
import certificates from "../../helpers/certificates.js";
import CertificatesCarrousel from "./CertificatesCarrousel";

const CertificateCard = ({ certificate, index }) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setVisible(true)} className="credential-row">
        <span className="credential-year">
          {certificate.startDate} — {certificate.endDate}
        </span>
        <span className="credential-main"><strong>{certificate.title}</strong><small>{certificate.org}</small></span>
        <span className="credential-action">Ver certificado <i className="bi bi-arrow-up-right" /></span>
      </button>
      {visible && <CertificatesCarrousel setVisible={setVisible} visible={visible} currentsCertificates={certificates} currentCertificate={index} />}
    </>
  );
};

export default CertificateCard;
