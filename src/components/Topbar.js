import logo from "../images/logo.png";
import { navItems } from "../data";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";

const Topbar = () => {
  return (
    <TopbarWrapper>
      <nav className="topbar-container">
        <span className="main-logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </span>

        <nav className="top-nav">
          {navItems.map((item) => {
            const { id, text, link } = item;
            return (
              <div key={id}>
                <Link
                  to={link}
                  className="link"
                  style={{ textDecoration: "none" }}
                >
                  <span>{text}</span>
                </Link>
              </div>
            );
          })}
        </nav>
        <span className="login-text">login</span>
      </nav>
    </TopbarWrapper>
  );
};
export default Topbar;

const TopbarWrapper = styled.div`
  .topbar-container {
    -webkit-box-shadow: 5px 5px 6px 0px rgba(11, 3, 6, 0.76);
    box-shadow: 5px 5px 6px 0px rgba(11, 3, 6, 0.76);
    padding: 0 2rem;
    background-color: var(--clr-white);
    display: grid;
    grid-template-columns: 70px 1fr 70px;
    margin: 0 auto;
    height: 100px;
    align-items: center;
    justify-content: space-around;
  }

  .top-nav {
    margin-left: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    max-width: 80%;
  }

  .top-nav div {
    padding-right: 3rem;
    font-size: 1.5rem;
  }

  @media screen and (max-width: 560px) {
    .top-nav {
      display: none;
    }
    .topbar-container {
      grid-template-columns: 70px 70px;
    }
  }

  .login-text {
    text-transform: capitalize;
    font-size: 1.8rem;
    color: var(--clr-primary);
  }
  .link {
    color: var(--clr-primary);
  }
  @keyframes logo-bounce {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }

  .main-logo {
    animation: logo-bounce 2s linear infinite;
    transition: 0.8s;
  }
`;
