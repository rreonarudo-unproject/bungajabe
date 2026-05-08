export default function Home() {
  return (
    <main
      style={{
        background: "#0b0b0b",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* NAVBAR */}
<nav
  style={{
    position: "fixed",
    top: 0,
    width: "100%",
    padding: "24px 60px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 999,
    background: "rgba(0,0,0,0.25)",
    backdropFilter: "blur(10px)",
  }}
>
  <h2
    style={{
      letterSpacing: "4px",
      fontSize: "20px",
    }}
  >
    BUNGA JABE
  </h2>

  <div
    style={{
      display: "flex",
      gap: "30px",
      alignItems: "center",
    }}
  >
    <a href="#" style={{ color: "white", textDecoration: "none" }}>
      Home
    </a>

    <a href="#" style={{ color: "white", textDecoration: "none" }}>
      Experience
    </a>

    <a href="#" style={{ color: "white", textDecoration: "none" }}>
      Gallery
    </a>

    <a href="#" style={{ color: "white", textDecoration: "none" }}>
      Contact
    </a>

    <a
      href="https://wa.me/628551500086"
      target="_blank"
      style={{
        background: "white",
        color: "black",
        padding: "12px 24px",
        borderRadius: "999px",
        textDecoration: "none",
        fontWeight: "bold",
      }}
    >
      BOOK NOW
    </a>
  </div>
</nav>

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

{/* EXPERIENCE */}
<section
  style={{
    padding: "100px 40px",
    background: "#111",
  }}
>
  <div
    style={{
      textAlign: "center",
      marginBottom: "60px",
    }}
  >
    <h2
      style={{
        fontSize: "42px",
        marginBottom: "20px",
      }}
    >
      Experiences
    </h2>

    <p
      style={{
        opacity: 0.7,
        maxWidth: "700px",
        margin: "auto",
        lineHeight: "1.8",
      }}
    >
      Discover unforgettable island adventures and immerse yourself in the
      tropical beauty of Karimunjawa.
    </p>
  </div>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
      gap: "30px",
    }}
  >
    {/* CARD 1 */}
    <div
      style={{
        background: "#1a1a1a",
        padding: "40px",
        borderRadius: "24px",
      }}
    >
      <h3
        style={{
          fontSize: "28px",
          marginBottom: "20px",
        }}
      >
        🌴 Island Hopping
      </h3>

      <p
        style={{
          opacity: 0.7,
          lineHeight: "1.8",
        }}
      >
        Explore hidden tropical islands, crystal-clear lagoons, and untouched
        white sand beaches around Karimunjawa.
      </p>
    </div>

    {/* CARD 2 */}
    <div
      style={{
        background: "#1a1a1a",
        padding: "40px",
        borderRadius: "24px",
      }}
    >
      <h3
        style={{
          fontSize: "28px",
          marginBottom: "20px",
        }}
      >
        🤿 Snorkeling
      </h3>

      <p
        style={{
          opacity: 0.7,
          lineHeight: "1.8",
        }}
      >
        Swim among vibrant coral reefs and colorful marine life in the pristine
        waters of the Java Sea.
      </p>
    </div>

    {/* CARD 3 */}
    <div
      style={{
        background: "#1a1a1a",
        padding: "40px",
        borderRadius: "24px",
      }}
    >
      <h3
        style={{
          fontSize: "28px",
          marginBottom: "20px",
        }}
      >
        🌅 Sunset Escape
      </h3>

      <p
        style={{
          opacity: 0.7,
          lineHeight: "1.8",
        }}
      >
        Enjoy magical sunset moments by the beach with a peaceful atmosphere
        and breathtaking ocean views.
      </p>
    </div>
  </div>
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

{/* ROOMS */}
<section
  style={{
    padding: "100px 40px",
    background: "#0d0d0d",
  }}
>
  <div
    style={{
      textAlign: "center",
      marginBottom: "60px",
    }}
  >
    <h2
      style={{
        fontSize: "42px",
        marginBottom: "20px",
      }}
    >
      Our Rooms
    </h2>

    <p
      style={{
        opacity: 0.7,
        maxWidth: "700px",
        margin: "auto",
        lineHeight: "1.8",
      }}
    >
      Relax in thoughtfully designed beachfront accommodations surrounded by
      tropical serenity and ocean breeze.
    </p>
  </div>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
      gap: "30px",
    }}
  >
    {/* ROOM 1 */}
    <div
      style={{
        background: "#1a1a1a",
        borderRadius: "24px",
        overflow: "hidden",
      }}
    >
      <img
        src="/room.jpg"
        style={{
          width: "100%",
          height: "280px",
          objectFit: "cover",
        }}
      />

      <div style={{ padding: "30px" }}>
        <h3
          style={{
            fontSize: "28px",
            marginBottom: "10px",
          }}
        >
          Ocean View Villa
        </h3>

        <p
          style={{
            opacity: 0.7,
            lineHeight: "1.7",
            marginBottom: "20px",
          }}
        >
          Spacious beachfront villa with panoramic sea views and private
          tropical ambience.
        </p>

        <h4
          style={{
            marginBottom: "20px",
          }}
        >
          Start from IDR 1.850K / night
        </h4>

        <a
          href="https://wa.me/628123456789"
          target="_blank"
          style={{
            background: "white",
            color: "black",
            padding: "12px 24px",
            borderRadius: "999px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          BOOK NOW
        </a>
      </div>
    </div>

    {/* ROOM 2 */}
    <div
      style={{
        background: "#1a1a1a",
        borderRadius: "24px",
        overflow: "hidden",
      }}
    >
      <img
        src="/beach.jpg"
        style={{
          width: "100%",
          height: "280px",
          objectFit: "cover",
        }}
      />

      <div style={{ padding: "30px" }}>
        <h3
          style={{
            fontSize: "28px",
            marginBottom: "10px",
          }}
        >
          Tropical Suite
        </h3>

        <p
          style={{
            opacity: 0.7,
            lineHeight: "1.7",
            marginBottom: "20px",
          }}
        >
          Elegant tropical suite designed for peaceful island retreat and
          luxurious comfort.
        </p>

        <h4
          style={{
            marginBottom: "20px",
          }}
        >
          Start from IDR 2.450K / night
        </h4>

        <a
          href="https://wa.me/6285512500086"
          target="_blank"
          style={{
            background: "white",
            color: "black",
            padding: "12px 24px",
            borderRadius: "999px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          BOOK NOW
        </a>
      </div>
    </div>
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