import certifications from "../../helpers/certificates.js";
import CertificationCard from "./CertificateCard";

const CertificatesSection = () => (
  <section className="credentials-section w-full" id="certificaciones">
    <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[.55fr_1.45fr]">
      <div className="credentials-intro">
        <p className="section-kicker">Formación que acompaña la práctica</p>
        <h2>Certificaciones</h2>
        <p>Una base formal en programación web, React y desarrollo full stack, reforzada continuamente con proyectos reales.</p>
      </div>
      <div className="credentials-list">
        {certifications.map((certificate, index) => <CertificationCard key={certificate.id} certificate={certificate} index={index} />)}
      </div>
    </div>
  </section>
);

export default CertificatesSection;
