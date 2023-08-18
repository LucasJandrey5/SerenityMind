import { View, Text } from "react-native";
import React, { useEffect } from "react";

import { MusicTitle, MusicSubtitle, AudioImage } from "./styles";
import sounds from "../../model/SoundsData";

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
  if (info == undefined) {
    info = sounds[0];
  }

  return (
    <View>
      <AudioImage
        source={info.artwork}
        style={{ width: 200, height: 200, borderRadius: 100 }}
      ></AudioImage>

      <MusicTitle>{info.title}</MusicTitle>
      <MusicSubtitle>By: {info.artist}</MusicSubtitle>
    </View>
  );
};

export default MusicInfo;
