// export default function Projects() {
//   return <h1>My Projects are.....
//     Something big is coming soon...
//   </h1>;
// }




// export default function ProjectsPage() {
//   return (
//     <div className="coming-soon">
//       <div>
//         <h1>🚀 Building Something Meaningful</h1>

//         <p>
//           I’m currently crafting real-world projects focused on performance,
//           scalability, and clean architecture.
//           <br />
//           <span>Launching soon — stay tuned.</span>
//         </p>
//       </div>
//     </div>
//   );
// }


// "use client";

// const projects = [
//   {
//     title: "PulsePoint",
//     tagline: "Connecting the right minds to build winning teams.",
//     description:
//       "A smart team-building platform for hackathons and project exhibitions that helps individuals discover teammates based on skills, interests, and collaboration goals — even across locations.",
//     tech: "React · Next.js · Tailwind · Firebase",
//     status: "WORK IN PROGRESS",
//   },
//   {
//     title: "Electromart",
//     tagline: "Powering the future of electronics commerce.",
//     description:
//       "A modern electronics e-commerce platform designed with scalability, performance, and real-world business logic in mind, focusing on clean UI and robust architecture.",
//     tech: "Next.js · Tailwind · Node.js · MongoDB",
//     status: "WORK IN PROGRESS",
//   },
// ];

// export default function ProjectsPage() {
//   return (
//     <section className="min-h-screen px-6 md:px-16 py-24 bg-gradient-to-br from-black via-[#050b14] to-black text-white">
//       {/* Heading */}
//       <div className="text-center mb-16">
//         <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
//           Projects
//         </h1>
//         <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
//           Carefully crafted products focused on real-world problems, scalability,
//           and clean system design.
//         </p>
//       </div>

//       {/* Project Grid */}
//       <div className="grid gap-10 md:grid-cols-2 max-w-6xl mx-auto">
//         {projects.map((project, index) => (
//           <ProjectCard key={index} {...project} />
//         ))}
//       </div>
//     </section>
//   );
// }

// /* ============================= */
// /* Reusable Project Card */
// /* ============================= */

// function ProjectCard({ title, tagline, description, tech, status }) {
//   return (
//     <div className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-300 hover:scale-[1.02] hover:border-cyan-400/40 hover:shadow-[0_0_40px_-10px_rgba(0,255,200,0.4)]">
      
//       {/* Status Badge */}
//       <div className="absolute -top-4 left-6">
//         <span className="px-4 py-1 text-xs font-semibold tracking-wide rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cyan-300 animate-pulse">
//           {status}
//         </span>
//       </div>

//       {/* Content */}
//       <h2 className="text-2xl font-semibold mb-2">{title}</h2>

//       <p className="text-cyan-300 font-medium mb-4">
//         {tagline}
//       </p>

//       <p className="text-gray-400 text-sm leading-relaxed mb-6">
//         {description}
//       </p>

//       {/* Tech Stack */}
//       <p className="text-xs uppercase tracking-widest text-gray-500 mb-8">
//         {tech}
//       </p>

//       {/* Actions */}
//       <div className="flex gap-4">
//         <button
//           disabled
//           className="px-5 py-2 rounded-lg bg-white/10 text-gray-400 text-sm cursor-not-allowed"
//         >
//           View Concept
//         </button>
//         <button
//           disabled
//           className="px-5 py-2 rounded-lg border border-white/20 text-gray-500 text-sm cursor-not-allowed"
//         >
//           Code Coming Soon
//         </button>
//       </div>
//     </div>
//   );
// }




// "use client";

// const projects = [
//   {
//     title: "PulsePoint",
//     tagline: "Connecting the right minds to build winning teams.",
//     description:
//       "A smart team-building platform for hackathons and project exhibitions that helps individuals discover teammates based on skills, interests, and collaboration goals — even across locations.",
//     tech: "React · Next.js · Tailwind · Firebase",
//   },
//   {
//     title: "Electromart",
//     tagline: "Powering the future of electronics commerce.",
//     description:
//       "A modern electronics e-commerce platform designed with scalability, performance, and real-world business logic in mind, focusing on clean UI and robust architecture.",
//     tech: "Next.js · Tailwind · Node.js · MongoDB",
//   },
// ];

// export default function ProjectsPage() {
//   return (
//     <section className="relative min-h-screen px-6 md:px-20 py-28 bg-gradient-to-br from-black via-[#050b14] to-black text-white overflow-hidden">
      
//       {/* Ambient Glow */}
//       <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[120px]" />

//       {/* Heading */}
//       <div className="relative text-center mb-20">
//         <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
//           Projects
//         </h1>
//         <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
//           Carefully crafted products focused on real-world problems,
//           scalability, and clean system design.
//         </p>
//       </div>

//       {/* Cards */}
//       <div className="relative grid gap-14 md:grid-cols-2 max-w-6xl mx-auto">
//         {projects.map((project, index) => (
//           <ProjectCard key={index} {...project} />
//         ))}
//       </div>
//     </section>
//   );
// }

// /* ========================= */
// /* PROJECT CARD COMPONENT */
// /* ========================= */

// function ProjectCard({ title, tagline, description, tech }) {
//   return (
//     <div className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-10 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-[0_0_60px_-15px_rgba(0,255,200,0.45)]">

//       {/* Status Badge */}
//       <div className="absolute -top-5 left-10">
//         <span className="px-5 py-1.5 rounded-full text-xs tracking-widest font-semibold bg-white/10 backdrop-blur-md border border-white/20 text-cyan-300 animate-pulse">
//           WORK IN PROGRESS
//         </span>
//       </div>

//       {/* Title */}
//       <h2 className="text-3xl font-semibold mb-3">
//         {title}
//       </h2>

//       {/* Tagline */}
//       <p className="text-cyan-300 font-medium text-lg mb-6">
//         {tagline}
//       </p>

//       {/* Description */}
//       <p className="text-gray-400 leading-relaxed mb-8">
//         {description}
//       </p>

//       {/* Tech */}
//       <p className="text-sm uppercase tracking-widest text-gray-500 mb-10">
//         {tech}
//       </p>

//       {/* Buttons */}
//       <div className="flex gap-4">
//         <button
//           disabled
//           className="px-6 py-2.5 rounded-xl bg-white/10 text-gray-400 text-sm cursor-not-allowed"
//         >
//           View Concept
//         </button>
//         <button
//           disabled
//           className="px-6 py-2.5 rounded-xl border border-white/20 text-gray-500 text-sm cursor-not-allowed"
//         >
//           Code Coming Soon
//         </button>
//       </div>
//     </div>
//   );
// }


export default function ProjectsPage() {
  return (
    <section className="projects-section">
      <div className="projects-header">
        <h1>Projects</h1>
        <p>
          Carefully crafted products focused on real-world problems,
          scalability, and clean system design.
        </p>
      </div>

      <div className="projects-grid">
        {/* Project 1 */}
        <div className="project-card">
          <span className="status-badge">WORK IN PROGRESS</span>

          <h2>PulsePoint</h2>
          <h3>Connecting the right minds to build winning teams.</h3>
          <a href="https://pulsepointfinal.vercel.app/">PulsePoint Prototype</a>

          <p className="description">
            A smart team-building platform for hackathons and project
            exhibitions that helps individuals discover teammates based on
            skills, interests, and collaboration goals — even across locations.
          </p>

          <p className="tech-stack">
            React · Next.js · Firebase
          </p>

          <div className="card-actions">
            <button disabled>View Concept</button>
            <button disabled>Code Coming Soon</button>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <span className="status-badge">WORK IN PROGRESS</span>

          <h2>Electromart</h2>
          <h3>Powering the future of electronics commerce.</h3>

          <p className="description">
            A modern electronics e-commerce platform designed with scalability,
            performance, and real-world business logic in mind, focusing on clean
            UI and robust architecture.
          </p>

          <p className="tech-stack">
            Next.js · Node.js · MongoDB
          </p>

          <div className="card-actions">
            <button disabled>View Concept</button>
            <button disabled>Code Coming Soon</button>
          </div>
        </div>
      </div>
    </section>
  );
}
