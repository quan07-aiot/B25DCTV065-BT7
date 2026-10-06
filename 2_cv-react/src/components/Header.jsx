function Header({ name, title, email }) {
  return (
    <header className="header">
      <h1>{name}</h1>
      <p>{title}</p>
      <p>Email: {email}</p>
    </header>
  );
}

export default Header;
