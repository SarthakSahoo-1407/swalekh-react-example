import { useSwalekhConfig } from "swalekh-react";

export 
function SwalekhConfig() {
  const { setConfig } = useSwalekhConfig();

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif", display:'flex', gap:'16px' }}>
      <label style={{ display: "block", marginBottom: "10px" }}>
        Language:
        <select
          style={{ marginLeft: "10px", padding: "5px", borderRadius: "4px" }}
          onChange={(e) => setConfig((c) => ({ ...c, language: e.target.value }))}
        >
          <option value="hi">Hindi</option>
          <option value="or">Odia</option>
          <option value="bn">Bengali</option>
          <option value="gu">Gujarati</option>
          <option value="te">Telugu</option>
          <option value="as">Assamese</option>
          <option value="ta">Tamil</option>
          <option value="ml">Malayalam</option>
          <option value="kn">Kannada</option>
          <option value="mr">Marathi</option>
        </select>
      </label>
      <label style={{ display: "block", marginBottom: "10px" }}>
        Mode:
        <select
          style={{ marginLeft: "10px", padding: "5px", borderRadius: "4px" }}
          onChange={(e) => setConfig((c) => ({ ...c, mode: e.target.value }))}
        >
          <option value="phonetic">Phonetic</option>
          <option value="keyboard">Keyboard</option>
        </select>
      </label>
    </div>
  );
}