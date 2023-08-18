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
  handlePlaySound: () => void;
  handlePauseSound: () => void;
  isPlaying: Boolean;
  nextSound: () => void;
  previousSound: () => void;
}

const MusicControl: React.FC<Props> = ({
  isPlaying,
  nextSound,
  previousSound,
  handlePlaySound,
  handlePauseSound,
}) => {
  return (
    <MusicControlContainer>
      <NextPreviusMusicButton rotate={180} onPress={() => previousSound()}>
        <NextSvg width="25" height="25"></NextSvg>
      </NextPreviusMusicButton>
      {isPlaying && (
        <MusicPauseButton onPress={() => handlePauseSound()}>
          <PauseSvg width="45" height="45"></PauseSvg>
        </MusicPauseButton>
      )}
      {!isPlaying && (
        <MusicPauseButton onPress={() => handlePlaySound()}>
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
