export function DarkModeButton() {
  // get body theme pref
  var body = document.querySelector("body");

  return (
    <button
      style={{
        background: "none",
        border: "none",
        fontSize: "2rem",
        cursor: "pointer",
        outline: "none",
        position: "relative",
        zIndex: 9999,
        filter: "grayscale(60%)",
      }}
      onClick={() => {
        body.classList.toggle("light-mode");
      }}
    >
      {body.classList.contains("light-mode") ? "🌙" : "💡"}
    </button>
  );
}
