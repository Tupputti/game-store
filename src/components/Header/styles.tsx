import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  background: #ffad;
  height: 80px;
  width: 100%;
  position: fixed;
  align-items: center;
  justify-content: center;
  color: #000000;
`;

export const LogoContainer = styled.div`
  margin-left: 50px;
  display: flex;
  color: #000000;
`;
export const ProfileContainer = styled.div`
  margin-right: 50px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  color: #000000;
`;

export const IconContainer = styled.div`
  padding: 10px;
  cursor: pointer;

  & svg {
    height: 30px;
  }
`;
