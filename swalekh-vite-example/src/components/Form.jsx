import { SwalekhInput, SwalekhDiv, SwalekhTextarea } from "swalekh-react";

export function Form() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <SwalekhInput
        id="input1"
        style={{
          color: "red",
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          width: "100%",
        }}
        data-custom-attribute="value"
        aria-label="Input field"
        name="input1"
      />
      <br />
      <br />
      <SwalekhTextarea
        id="textarea1"
        language="or"
        style={{
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          width: "100%",
          height: "100px",
        }}
      />
      <br />
      <br />
      <SwalekhDiv
        id="special-div"
        style={{
          border: "1px solid #888",
          padding: "10px",
          borderRadius: "5px",
          width: "100%",
          minHeight: "50px",
          backgroundColor: "#f9f9f9",
        }}
      />
    </div>
  );
}
