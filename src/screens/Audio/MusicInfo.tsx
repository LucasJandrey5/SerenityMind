import { View, Text } from "react-native";
import React from "react";

import { MusicTitle, MusicSubtitle, AudioImage } from "./styles";

interface Props {
  info: {
    title: string;
    artist: string;
    artwork: any;
    url: any;
    id: number;
  };
}

const MusicInfo: React.FC<Props> = ({ info }) => {
  return (
    <View>
      <AudioImage
        source={require("../../assets/images/MusicImages/PaintingForest.png")}
        style={{ width: 200, height: 200 }}
      ></AudioImage>

      <MusicTitle>{info.title}</MusicTitle>
      <MusicSubtitle>By: {info.artist}</MusicSubtitle>
    </View>
  );
};

export default MusicInfo;
