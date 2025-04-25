import { SwalekhConfigProvider } from "swalekh-react";
import { SwalekhConfig } from "./components/SwalekhConfig";
import { Form } from "./components/Form";

function App() {
  return (
    <div className="main">
      <SwalekhConfigProvider
        validationKey="<SWALEKH-VALIDATION-KEY>"
        language="hi"
        mode="phonetic"
        theme="reverie-red"
      >
        <SwalekhConfig />
        <Form />
      </SwalekhConfigProvider>
    </div>
  );
}

export default App;
