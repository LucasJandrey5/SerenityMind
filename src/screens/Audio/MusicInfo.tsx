import { View, Text } from "react-native";
import React from "react";

import { MusicTitle, MusicSubtitle, AudioImage } from "./styles";

const MusicInfo = () => {
  return (
    <View>
      <AudioImage
        source={require("../../assets/images/MusicImages/PaintingForest.png")}
        style={{ width: 200, height: 200 }}
      ></AudioImage>

      <MusicTitle>Painting Forest</MusicTitle>
      <MusicSubtitle>By: Painting with Passion</MusicSubtitle>
    </View>
  );
};

export default MusicInfo;
