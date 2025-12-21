// import Navbar from "../components/Navbar";

// export default function HomeLayout({ children }) {
//   return (
//     <>
//       <Navbar />
//       {children}
//     </>
//   );
// }


// import Link from "next/link";
// import "../globals.css";

// export default function HomeLayout({ children }) {
//   return (
//     <>
//       <nav className="navbar">
//         <div className="logo">Raghav</div>

//         <div className="nav-links">
//           <Link href="/home">Home</Link>
//           <Link href="/about">About</Link>
//           <Link href="/projects">Projects</Link>

//           {/* CONNECT BUTTON */}
//           <a
//             href="mailto:raghavtiwari753@gmail.com"
//             className="connect-btn"
//           >
//             Connect
//           </a>
//         </div>
//       </nav>
//       <nav className="navbar">
//   <div className="logo">Raghav</div>

//   <div className="nav-links">
//     <Link href="/home">Home</Link>
//     <Link href="/about">About</Link>
//     <Link href="/projects">Projects</Link>

//     {/* CONTACT / CONNECT BUTTON */}
//     <a
//       href="mailto:raghavtiwari753@gmail.com"
//       className="connect-btn"
//     >
//       Connect
//     </a>
//   </div>
// </nav>


//       <main>{children}</main>
//     </>
//   );
//}

import Link from "next/link";
import "../globals.css";

export default function HomeLayout({ children }) {
  return (
    <div className="home-bg">
      {/* NAVBAR – ONLY HERE */}
      <nav className="navbar">
        <div className="logo">Raghav Tiwari</div>

        <div className="nav-links">
          <Link href="/academics">Academics</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>

          <a
            href="mailto:raghavtiwari753@gmail.com"
            className="connect-btn"
          >
            Connect
          </a>
        </div>
      </nav>

      {children}
    </div>
  );
}
