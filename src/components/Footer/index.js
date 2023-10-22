import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <img className="icon" src="/images/fb.png" />
        <img className="icon" src="/images/ig.png" />
        <img className="icon" src="/images/tw.png" />
      </div>

      <div className="logo">
        <img src="/images/logo.png" />
      </div>

      <div className="text">
        <p>Desenvolvido por Alura</p>
      </div>
    </footer>
  );
};

export default Footer;
