import { View, Text, TouchableHighlight } from "react-native";
import React, { useEffect, useState } from "react";
import { Audio } from "expo-av";

import PlaySvg from "../../assets/images/play.svg";
import PauseSvg from "../../assets/images/pause.svg";
import NextSvg from "../../assets/images/next.svg";

import {
  MusicControlContainer,
  MusicPauseButton,
  NextPreviusMusicButton,
} from "./styles";

interface Props {
  nextSound: () => void;
  handlePlaySound: () => void;
  handlePauseSound: () => void;
  currentSound: Audio.Sound | null;
}

const MusicControl: React.FC<Props> = ({
  currentSound,
  nextSound,
  handlePlaySound,
  handlePauseSound,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    verifyIsPlaying();
  }, [currentSound]);

  const verifyIsPlaying = async () => {
    console.log("AAAAAAAAAAAAA");
    const status = await currentSound?.getStatusAsync();
    console.log(status);
    if (status?.isLoaded == true) console.log(status.isPlaying);
  };

  return (
    <MusicControlContainer>
      <NextPreviusMusicButton rotate={180} onPress={() => {}}>
        <NextSvg width="25" height="25"></NextSvg>
      </NextPreviusMusicButton>
      {isPlaying && (
        <MusicPauseButton onPress={() => handlePlaySound()}>
          <PauseSvg width="45" height="45"></PauseSvg>
        </MusicPauseButton>
      )}
      {!isPlaying && (
        <MusicPauseButton onPress={() => handlePauseSound()}>
          <PlaySvg width="45" height="45"></PlaySvg>
        </MusicPauseButton>
      )}
      <NextPreviusMusicButton rotate={0} onPress={() => nextSound()}>
        <NextSvg width="25" height="25"></NextSvg>
      </NextPreviusMusicButton>
    </MusicControlContainer>
  );
};

export default MusicControl;
