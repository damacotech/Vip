/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
        <div className="copyright">
          © {new Date().getFullYear()} made by{" "}
          <a
            href="https://www.damaco-tech.com/"
            target="blank"
          >
            Damaco Tech
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
