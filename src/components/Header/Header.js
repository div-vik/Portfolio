import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillFileText, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link legacyBehavior href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "20px",
          }}
        >
          <DiCssdeck size="3rem" />
          <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>

    <Div2>
      <li>
        <Link legacyBehavior href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link legacyBehavior href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link legacyBehavior href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>

    <Div3>
      <SocialIcons href="https://github.com/div-vik">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="http://www.linkedin.com/in/divya-vikash-a9035319b">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      {/* <SocialIcons href="https://docs.google.com/document/d/1B68Veq02f9GWaYk7Jcle3hIsB5LoWG-fX7o9jV7Pf4Q/edit?usp=sharing">
        <AiFillFileText size="3rem" />
      </SocialIcons> */}
    </Div3>
  </Container>
);

export default Header;
