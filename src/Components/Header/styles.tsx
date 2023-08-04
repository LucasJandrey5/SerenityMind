import styled from "styled-components/native";

import { colors } from "../../assets/colors";

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${colors.primary_color};
  width: 100%;
  padding-top: 50px;
  padding-bottom: 30px;
  padding-left: 25px;
  padding-right: 25px;
`;

export const Logo = styled.View`
  width: 50px;
  height: 50px;
`;

export const ProfileBox = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 25px;
  background-color: #f0f0f0;
`;

export const Burguer = styled.View``;
