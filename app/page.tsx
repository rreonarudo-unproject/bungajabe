export default function Home() {
  return (
    <main
      style={{
        background: "#0b0b0b",
        color: "white",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "64px",
          letterSpacing: "6px",
        }}
      >
        BUNGA JABE BEACH
      </h1>

      <p
        style={{
          opacity: 0.7,
          marginTop: "10px",
        }}
      >
        Bungalow & Beach Resort
      </p>
    </main>
  );
}