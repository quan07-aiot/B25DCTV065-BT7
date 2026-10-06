function Button({ label, color, onClick }) {
  return (
    <button style={{ backgroundColor: color }} onClick={() => onClick(label)}>
      {label}
    </button>
  );
}

export default Button;
