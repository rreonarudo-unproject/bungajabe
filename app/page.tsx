export default function Home() {
  return (
    <main
      style={{
        background: "#0b0b0b",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* HERO */}
      <section
        style={{
          height: "100vh",
          backgroundImage: "url('/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.45)",
          }}
        />

        <div style={{ position: "relative", zIndex: 2 }}>
          <h1
            style={{
              fontSize: "72px",
              letterSpacing: "8px",
              marginBottom: "20px",
            }}
          >
            BUNGA JABE
          </h1>

          <p
            style={{
              fontSize: "20px",
              opacity: 0.9,
            }}
          >
            Luxury Beach Resort in Karimunjawa
          </p>

          <button
            style={{
              marginTop: "30px",
              padding: "14px 32px",
              borderRadius: "999px",
              border: "none",
              background: "white",
              color: "black",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            BOOK NOW
          </button>
        </div>
      </section>

      {/* ABOUT */}
      <section
        style={{
          padding: "100px 20px",
          textAlign: "center",
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <h2
          style={{
            fontSize: "42px",
            marginBottom: "20px",
          }}
        >
          Escape to Paradise
        </h2>

        <p
          style={{
            lineHeight: "1.8",
            opacity: 0.8,
            fontSize: "18px",
          }}
        >
          Bunga Jabe Beach is a tropical luxury escape located in the pristine
          paradise of Karimunjawa. Experience crystal-clear waters, peaceful
          beachfront villas, and unforgettable island sunsets.
        </p>
      </section>

      {/* GALLERY */}
      <section
        style={{
          padding: "40px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "20px",
          }}
        >
          <img
            src="/room.jpg"
            style={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
              borderRadius: "20px",
            }}
          />

          <img
            src="/beach.jpg"
            style={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
              borderRadius: "20px",
            }}
          />

          <img
            src="/sunset.jpg"
            style={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
              borderRadius: "20px",
            }}
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          textAlign: "center",
          padding: "40px",
          opacity: 0.6,
        }}
      >
        © 2026 Bunga Jabe Beach Resort
      </footer>
    </main>
  );
}