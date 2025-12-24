// export default function About() {
//   return <h1>About Me</h1>;
// }


// "use client";
// import { motion } from "framer-motion";

// export default function About() {
//   return (
// //    <div className="about-container">
//   <motion.div
//   className="about"
//   initial={{ opacity: 0, y: 40 }}
//   whileInView={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.6 }}
//   viewport={{ once: true }}
// >

//       <h1>About Me</h1>
//       <p>
//         I believe in learning by doing and validating my skills through
//         recognized certifications.
//       </p>

//       <div className="skills">
//         <div className="skill-card">
//           <h3>Deloitte -Cyber Job Simulation</h3>
//           <a
//             href="https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/E9pA6qsdbeyEkp3ti_9PBTqmSxAf6zZTseP_eKoqnu6saZt5ajJh5_1750763157958_completion_certificate.pdf#toolbar=0&view=fitH"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             View Certificate →
//           </a>
//         </div>

//         <div className="skill-card">
//           <h3>Python For Data Science</h3>
//           <a
//             href="https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_16286352104288236000_shared/1-6c7edd3a-c61b-42b6-9c42-027223f91879.pdf"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             View Certificate →
//           </a>
//         </div>

//         <div className="skill-card">
//           <h3>A W S- Solutions Architecture</h3>
//           <a
//             href="https://www.theforage.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_eKoqnu6saZt5ajJh5_1763308241899_completion_certificate.pdf#toolbar=0&view=fitH"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             View Certificate →
//           </a>
//         </div>
//       </div>
//     </motion.div>

//   );
// }

export default function AboutPage() {
  return (
    <section className="about-section">
      <h1 className="about-title">About Me</h1>
      <p className="about-desc">
        I believe in learning by doing and validating my skills through recognized certifications.
      </p>

      <div className="specializations">
        <div className="spec-card">
          <h3>Deloitte – Cyber Job Simulation</h3>
          <a href="https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/E9pA6qsdbeyEkp3ti_9PBTqmSxAf6zZTseP_eKoqnu6saZt5ajJh5_1750763157958_completion_certificate.pdf#toolbar=0&view=fitH" target="_blank">View Certificate →</a>
        </div>

        <div className="spec-card">
          <h3>Python For Data Science</h3>
          <a href="https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_16286352104288236000_shared/1-6c7edd3a-c61b-42b6-9c42-027223f91879.pdf" target="_blank">View Certificate →</a>
        </div>

        <div className="spec-card">
          <h3>AWS – Solutions Architecture</h3>
          <a href="https://www.theforage.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_eKoqnu6saZt5ajJh5_1763308241899_completion_certificate.pdf#toolbar=0&view=fitH" target="_blank">View Certificate →</a>
        </div>
        <div className="spec-card">
          <h3>TATA Crucible - Participation Certificate</h3>
          <a href="https://unstop.com/certificate-preview/c1d7eb71-f800-4ff3-ade8-400a0fc75f08" target="_blank">View Certificate →</a>
        </div>

        <div className="spec-card">
          <h3>Management Series - QUIZ WINNER Certificate</h3>
          <a href="https://unstop.com/certificate-preview/146a59da-2ee2-4197-b05e-504722c1873f" target="_blank">View Certificate →</a>
        </div>

        <div className="spec-card">
          <h3>Naukri Campus Young turks-Certificate</h3>
          <a href="https://www.naukri.com/campus/certificates/young_turks25_round_1_achievement/v0/68d9c861fac35327673e167f" target="_blank">View Certificate →</a>
        </div>
        <br /><div className="spec-card">
          <h3>C++ Essentials- Cisco Networking Academy</h3>
          <a href="https://www.netacad.com/certificates/?issuanceId=7c9c7a05-a28d-4cc7-843c-7ea20945f75a" target="_blank">View Certificate →</a>
        </div>
      </div>
    </section>
  );
}
