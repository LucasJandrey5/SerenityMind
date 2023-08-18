import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import sounds from "../../model/SoundsData";

import {
  MusicRowView,
  TitleText,
  ArtistText,
  TimeText,
  TextsBox,
  Row,
} from "./styles";

interface Props {
  info: {
    title: string;
    artist: string;
    artwork: any;
    url: string;
    id: number;
  };
  navigation: any;
}

const MusicRow: React.FC<Props> = ({ info, navigation }) => {
  console.log(info);

  const OnAudioPressed = () => {
    navigation.jumpTo("audio", { id: info.id });
  };

  return (
    <MusicRowView onPress={() => OnAudioPressed()}>
      <Row>
        <Image source={info.artwork} style={{ height: 60, width: 60 }}></Image>
        <TextsBox>
          <TitleText>{info.title}</TitleText>
          <ArtistText>{info.artist}</ArtistText>
        </TextsBox>
      </Row>

      <View>
        <TimeText>20 Min</TimeText>
      </View>
    </MusicRowView>
  );
};

export default MusicRow;
