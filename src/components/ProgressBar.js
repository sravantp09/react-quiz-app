/*
const container = {
  width: "100%",
  height: "1.5rem",
  color: "green",
  backgroundColor: "whitesmoke",
  marginBottom: "2rem",
  borderRadius: "1rem",
}; */

export default function ProgressBar({ start, limit }) {
  //  const progress = Math.round((start / limit) * 100);

  /*
  const progressbar = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: "#99ccff",
    borderRadius: "1rem",
    textAlign: "right",
  }; */

  return (
    // <div style={container}>
    //   <div style={progressbar}></div>
    // </div>
    <>
      <label htmlFor="progressbar"></label>
      <progress
        id="progressbar"
        value={start}
        max={limit}
        style={{ marginBottom: "1.5rem" }}
      ></progress>
    </>
  );
}
