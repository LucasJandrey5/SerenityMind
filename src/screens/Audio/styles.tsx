import styled from "styled-components/native";

import { colors } from "../../assets/colors";
import { useFonts } from "expo-font";

interface Props {
  rotate: number;
}

export const AudioContainer = styled.View`
  display: flex;
  align-items: center;
  flex-grow: 1;
  padding-top: 5px;
  background-color: ${colors.primary_color};
`;

export const AudioImageBox = styled.View`
  height: 200px;
  width: 200px;
  background-color: red;
  border-radius: 100px;
`;

export const AudioImage = styled.Image`
  height: 200px;
  width: 200px;
`;

export const MusicTitle = styled.Text`
  font-size: 32px;
  color: ${colors.primary_text_color};
  font-family: "Alegreya";
  margin-top: 50px;
`;

export const MusicSubtitle = styled.Text`
  font-size: 18px;
  color: ${colors.secondary_text_color};
`;

export const MusicControlContainer = styled.View`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
`;

export const MusicPauseButton = styled.TouchableHighlight`
  background-color: white;
  height: 60px;
  width: 60px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NextPreviusMusicButton = styled.TouchableHighlight<Props>`
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px;
  transform: rotate(${(props) => props.rotate}deg);
`;
