import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <section>
        <ul>
          <li>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/fb.png" alt="Facebook" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/tw.png" alt="Twitter" />
            </a>
          </li>
          <li>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/ig.png" alt="Instagram" />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <div className="logo">
          <span className="logo-icon">🎬</span>
          <span className="logo-text">CineOrganizer</span>
        </div>
      </section>
      <section>
        <p>Desenvolvido pelo Danilo</p>
      </section>
    </footer>
  );
};

export default Footer;
