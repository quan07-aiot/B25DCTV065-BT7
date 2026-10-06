import { useState } from "react";
import Display from "./components/Display";
import Button from "./components/Button";
import "./App.css";
const keys = [
  "Clear", "Delete", "", "/",
  "7", "8", "9", "*",
  "4", "5", "6", "-",
  "1", "2", "3", "+",
  "", "0", "=", "",
];

function App() {
  const [expression, setExpression] = useState("");
  function calculate(current) {
    if (current === "") return;
    try {
      const cleaned = current.replace(/(?<![\d.])0+(?=\d)/g, "");
      const result = new Function("return " + cleaned)(); 
      if (isFinite(result)) {
        setExpression(String(Math.round(result * 1000000) / 1000000));
      } else {
        setExpression("Lỗi");
      }
    } catch {
      setExpression("Lỗi"); 
    }
  }
  function handleClick(label) {
    const current = expression === "Lỗi" ? "" : expression;

    if (label === "Clear") {
      setExpression("");
    } else if (label === "Delete") {
      setExpression(current.slice(0, -1)); 
    } else if (label === "=") {
      calculate(current);
    } else {
      setExpression(current + label); 
    }
  }
  return (
    <div className="calculator">
      <Display value={expression} />
      <div className="buttons">
        {keys.map((label, index) => {
          if (label === "") {
            return <div key={index}></div>; 
          }
          const isOperator = ["/", "*", "-", "+", "="].includes(label);
          return (
            <Button
              key={index}
              label={label}
              color={isOperator ? "#a61515" : "#196720"}
              onClick={handleClick}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
