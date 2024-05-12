import { useState } from "react";
import Warning from "./Warning";

// Controlled TextArea component
export default function TextArea() {
  const [text, setText] = useState("");
  const [warning, setWarning] = useState("");

  const handleOnChange = (e) => {
    let newText = e.target.value;

    // basic validation example that could be improved with regex and more checks
    if (newText.includes("<script>")) {
      newText = newText.replace("<script>", "");
      setWarning("No script tag allowed!");
    } else if (newText.includes("@")) {
      newText = newText.replace("@", "");
      setWarning("No @ symbol allowed!");
    } else {
      setWarning("");
    }

    setText(newText);
  };

  return (
    <div className="textarea">
      <textarea
        value={text}
        placeholder="Enter your text here..."
        spellCheck="false"
        onChange={handleOnChange}
      />
      {warning && <Warning message={warning} />}
    </div>
  );
}
