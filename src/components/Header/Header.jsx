import { useState } from "react";
import logo from "/vite.svg";
import { styled } from "styled-components";
// import "./Header.css";

const HeaderContainer = styled.header`
  height: 60px;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  background: #fafafa;
`;

export default function Header() {
  const [now, setNow] = useState(new Date());
  setInterval(() => setNow(new Date(), 1000));
  return (
    <HeaderContainer>
      <img src={logo} alt={"Logo"} />
      <h3>Result University</h3>
      <span>Время сейчас {now.toLocaleTimeString()} </span>
    </HeaderContainer>
  );
}
