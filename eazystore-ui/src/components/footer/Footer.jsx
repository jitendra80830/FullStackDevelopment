import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
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
      <footer className="flex justify-center items-center py-4 font-primary text-gray-700 dark:text-gray-300">
        Buit with
        <FontAwesomeIcon
          icon={faHeart}
          className="text-red-600 mx-1 animate-pulse"
          aria-hidden="true"
        />
        by
        <a
          href="https://eazybytes.com"
          target="_blank"
          rel="noreferrer"
          className="text-primary dark:text-light font-semibold px-1 transition-colors duration-300 hover:text-dark dark:hover:text-lighter"
        >
          eazybytes
        </a>
      </footer>
    </>
  );
}
