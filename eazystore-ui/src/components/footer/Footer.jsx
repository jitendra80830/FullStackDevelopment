import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./footer.css";
import styled from "styled-components";
import EazyButton from "../EazyButton";
const H1 = styled.h1`
  color: #5b21b6;
  text-align: center;
`;
export default function Footer() {
  return (
    <>
      {/* <H1>Demo of styled components from footer</H1>
      <EazyButton $primary>Submit</EazyButton> */}
      {/* <h1 style={{ textAlign: "center", color: "blue" }}>
        Demo of some footer
      </h1> */}
      {/* <h1 className="my-heading">Demo of some footer</h1> */}
      <footer className="footer">
        Buit with
        <FontAwesomeIcon
          icon={faHeart}
          className="footer-icon"
          aria-hidden="true"
        />
        by
        <a href="https://eazybytes.com" target="_blank" rel="noreferrer">
          eazybytes
        </a>
      </footer>
    </>
  );
}
