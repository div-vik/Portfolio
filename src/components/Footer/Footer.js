import React from "react";
import { AiFillGithub, AiFillFileText, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel: +91 9108255341">+91 9108255341</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:divyavikash83@gmail.com">
            divyavikash83@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>

      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time.</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/div-vik">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="http://www.linkedin.com/in/divya-vikash-a9035319b">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://docs.google.com/document/d/1d9WvAZ85e-qNuzYYKA9NUh5CGibYFtHroxz-e5VbpNI/edit?usp=sharing">
            <AiFillFileText size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
