import styled from "styled-components/native";

import { colors } from "../../assets/colors";

export const HomeContainer = styled.View`
  background-color: ${colors.primary_color};
  display: flex;
  flex-direction: column;
`;

export const Row = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const MusicRowView = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  padding: 10px 0;
  margin: 2px 0;
`;

export const TextsBox = styled.View`
  display: flex;
  margin-left: 15px;
`;

export const TitleText = styled.Text`
  font-size: 18px;
  color: ${colors.primary_text_color};
  font-weight: bold;
`;

export const ArtistText = styled.Text`
  font-size: 13px;
  color: ${colors.secondary_text_color};
`;

export const TimeText = styled.Text`
  font-size: 16px;
  color: ${colors.secondary_text_color};
`;
