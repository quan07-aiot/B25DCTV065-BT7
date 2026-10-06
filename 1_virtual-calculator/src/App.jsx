import { useState } from "react";
import Display from "./components/Display";
import Button from "./components/Button";
import "./App.css";

// Các nút theo thứ tự từ trái sang phải, từ trên xuống dưới ("" là ô trống)
const keys = [
  "Clear", "Delete", "", "/",
  "7", "8", "9", "*",
  "4", "5", "6", "-",
  "1", "2", "3", "+",
  "", "0", "=", "",
];

function App() {
  // State lưu biểu thức hiện tại, ví dụ "7+8/"
  const [expression, setExpression] = useState("");

  // Tính kết quả khi bấm dấu =
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
    // Đang hiện "Lỗi" thì bắt đầu lại từ đầu
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
              color={isOperator ? "#5b9bd5" : "#4caf50"}
              onClick={handleClick}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
