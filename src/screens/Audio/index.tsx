import React, { useState, useEffect, useDebugValue } from "react";
import { Audio } from "expo-av";
import { TouchableOpacity, Text, View } from "react-native";

import { AudioContainer } from "./styles";

import MusicInfo from "./MusicInfo";
import MusicControl from "./MusicControl";

import sounds from "../../model/SoundsData";

const MusicPlayer = () => {
  const [currentSound, setCurrentSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState<Boolean>(false);
  const [currentMusicId, setCurrentMusicId] = useState(0);

  const audioUri = "http://webaudioapi.com/samples/audio-tag/chrono.mp3";
  const audioLocal = "../../assets/sounds/Sound1.mp3";

  useEffect(() => {
    initMusic();
  }, []);

  useEffect(() => {
    return () => {
      if (currentSound) {
        currentSound.unloadAsync();
      }
    };
  }, [currentSound]);

  useEffect(() => {
    initMusic();
  }, [currentMusicId]);

  const initMusic = async () => {
    console.log("Loading Sound");

    try {
      let { sound } = await Audio.Sound.createAsync(sounds[currentMusicId].url);

      setCurrentSound(sound);
    } catch {
      console.log("A");
    }
  };

  const nextSound = async () => {
    await currentSound?.unloadAsync();
    FcSetIsPlaying();

    await setCurrentMusicId(
      currentMusicId == sounds.length - 1 ? 0 : currentMusicId + 1
    );
  };

  const previousSound = async () => {};

  const handlePlaySound = async () => {
    if (!currentSound) await initMusic();

    await currentSound?.playAsync();

    FcSetIsPlaying();
  };

  const handlePauseSound = async () => {
    await currentSound?.stopAsync();

    FcSetIsPlaying();
  };

  const FcSetIsPlaying = async () => {
    let status = await currentSound?.getStatusAsync();
    if (status?.isLoaded) setIsPlaying(status.isPlaying);
    else setIsPlaying(false);
  };

  return (
    <AudioContainer>
      <MusicInfo info={sounds[currentMusicId]} />
      <MusicControl
        isPlaying={isPlaying}
        handlePlaySound={() => handlePlaySound()}
        handlePauseSound={() => handlePauseSound()}
        nextSound={() => nextSound()}
      />
    </AudioContainer>
  );
};

export default MusicPlayer;
