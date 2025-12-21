// import Image from "next/image";
// import styles from "./page.module.css";

// export default function Home() {
//   return (
//     <div className={styles.page}>
//       <main className={styles.main}>
//         <Image
//           className={styles.logo}
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className={styles.intro}>
//           <h1>To get started, edit the page.js file.</h1>
//           <p>
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className={styles.ctas}>
//           <a
//             className={styles.primary}
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className={styles.logo}
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className={styles.secondary}
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }


// export default function Home() {
//   return <h1>Hi, I’m Raghav 👋</h1>;
// }

// "use client";
// import Link from "next/link";

// import { useEffect, useRef } from "react";

// export default function Home() {
//   const sectionRefs = useRef([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("show");
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );

//     sectionRefs.current.forEach((el) => {
//       if (el) observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div>
//       <section
//   ref={(el) => (sectionRefs.current[0] = el)}
//   className="section hero"
// >
//   <h1>
//     Hi, I’m <span>Raghav</span> 👋
//   </h1>
//   <p>Full Stack Developer | MERN & Next.js</p>

//   <div className="hero-buttons">
//     <Link href="/projects" className="view-projects">
//   View Projects
// </Link>

//     <a href="mailto:raghavtiwari753@gmail.com">Contact Me</a>
//   </div>
// </section>


//       <section ref={(el) => (sectionRefs.current[1] = el)} className="section">
//         <h2>What I Do</h2>
//         <p>I build clean, functional web apps using MERN & Next.js.</p>
//       </section>

//       <section ref={(el) => (sectionRefs.current[2] = el)} className="section">
//         <h2>Why Hire Me?</h2>
//         <p>I focus on fundamentals, not shortcuts.</p>
//       </section>
//     </div>
//   );
// }


// export default function HomePage() {
//   return (
//     <main className="home-bg">
//       <h1>Welcome to my Portfolio</h1>
//     </main>
//   );
// }


// old home page 

// "use client";
// import { motion } from "framer-motion";

// export default function HomePage() {
//   return (
//     <main className="hero-container">
//       <motion.h1
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="hero-title"
//       >
//         Hi, I’m <span className="highlight">Raghav</span>
//         <section className="experience-section">
//   <h2 className="experience-title">Currently Involved</h2>

//   <div className="experience-cards">
//     <div className="exp-card">
//       <h3>Event Coordinator</h3>
//       <p className="org">Electoral Literacy Club</p>
//       <span className="time">Aug 2025 – Present</span>
//     </div>

//     <div className="exp-card">
//       <h3>Google Gemini Student Ambassador</h3>
//       <p className="org">Google</p>
//       <span className="time">Sept 2025 – Jan 2026</span>
//     </div>
//   </div>
// </section>

//       </motion.h1>

//       <motion.p
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.3 }}
//         className="hero-sub"
//       >
//         Architecting scalable MERN applications with the precision of advanced algorithms integrated by machine intelligence.
//       </motion.p>

//      <div className="social-buttons">
//   <a
//     href="https://www.linkedin.com/in/raghav-tiwari-4a4b7c/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B0EMIgV%2FsTaGGFVaGTfh5pw%3D%3D"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="linkedin-btn"
//   >
//     <img src="/linkedin.svg" alt="LinkedIn" />
//     LinkedIn
//   </a>

//   <a
//     href="https://github.com/CoderxRaghav"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="github-btn"
//   >
//     <img src="/github.svg" alt="GitHub" />
//     GitHub
//   </a>
// </div>

//     </main>
//   );
// }



// new home page
export default function HomePage() {
  return (
    <main className="home">
      <section className="hero">
        <h1 className="hero-title">
          Hi, I’m <span>Raghav</span>
        </h1>
        <p className="hero-subtitle typing">
  Currently Working As<span className="cursor">|</span>
</p>

      </section>

      <section className="cards">
        <div className="home-card">
          <p className="role">Event Coordinator</p>
          <h2 className="highlight green">Electoral Literacy Club</h2>
          <p className="duration">Aug 2025 – Present</p>
        </div>

        <div className="home-card">
          <p className="role">Google Gemini Student Ambassador</p>
          <h2 className="highlight blue">Google</h2>
          <p className="duration">Sept 2025 – Jan 2026</p>
        </div>
      </section>
    </main>
  );
}
