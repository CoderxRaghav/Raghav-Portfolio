// export default function AcademicsPage() {
//   return (
//     <div style={{ padding: "80px", maxWidth: "900px", margin: "0 auto" }}>
//       <h1 style={{ marginBottom: "40px" }}>Academics</h1>

//       {/* 1. B.Tech */}
//       <div style={{ marginBottom: "30px" }}>
//         <h2>B.Tech – Computer Science (Data Science)</h2>
//         <p>
//           <strong>Institute:</strong> PSIT, Kanpur
//         </p>
//         <p>
//           <strong>Duration:</strong> 2024 – 2028
//         </p>
//       </div>

//       <hr />

//       {/* 2. Senior Secondary */}
//       <div style={{ margin: "30px 0" }}>
//         <h2>Senior Secondary (Class XII)</h2>
//         <p>
//           <strong>School:</strong> Jai Narayan Vidya Mandir
//         </p>
//         <p>
//           <strong>Year:</strong> 2022 – 2023
//         </p>
//         <p>
//           <strong>Marks:</strong> 93%
//         </p>
//       </div>

//       <hr />

//       {/* 3. Secondary */}
//       <div style={{ marginTop: "30px" }}>
//         <h2>Secondary (Class X)</h2>
//         <p>
//           <strong>School:</strong> Jai Narayan Vidya Mandir
//         </p>
//         <p>
//           <strong>Year:</strong> 2020 – 2021
//         </p>
//         <p>
//           <strong>Marks:</strong> 93%
//         </p>
//       </div>
//     </div>
//   );
// }


export default function AcademicsPage() {
  return (
    <main className="academics-page">
      <h1 className="page-title">Academics</h1>

      <section className="timeline">
        <div className="card">
          <span className="badge">2024 – 2028</span>
          <h2>B.Tech – Computer Science (Data Science)</h2>
          <p className="institute">PSIT, Kanpur</p>
        </div>

        <div className="card">
          <span className="badge">2022 – 2023</span>
          <h2>Senior Secondary (Class XII)</h2>
          <p className="institute">Jai Narayan Vidya Mandir</p>
          <p className="marks">Marks: <strong>84%</strong></p>
        </div>

        <div className="card">
          <span className="badge">2020 – 2021</span>
          <h2>Secondary (Class X)</h2>
          <p className="institute">Jai Narayan Vidya Mandir</p>
          <p className="marks">Marks: <strong>93%</strong></p>
        </div>
      </section>
    </main>
  );
}

