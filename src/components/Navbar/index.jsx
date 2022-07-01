import "./Navbar.css";
export default function Navbar() {
  return (
    <div className="nav-container">
      <div className="nav-bar">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC_G2kjHbEh4OhV6mLM0KXg7967_gBHxI-CZgXX-7h1Bmjd5CWmZ51nYtDB3GWQL2JMnw&usqp=CAU"
          alt="devto"
          className="nav-logo"
        />
        <input className="nav-input" placeholder="Search...." />
      </div>
      <div className="nav-buttom">
        <button className="nav-content-buttom">Log in</button>
        <button className="nav-content-buttom">Create account</button>
      </div>
    </div>
  );
}
