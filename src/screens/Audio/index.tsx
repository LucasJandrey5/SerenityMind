import React, { useState, useEffect, useDebugValue } from "react";
import { Audio } from "expo-av";
import { TouchableOpacity, Text, View } from "react-native";

import { AudioContainer } from "./styles";

import MusicInfo from "./MusicInfo";
import MusicControl from "./MusicControl";

import sounds from "../../model/SoundsData";

const MusicPlayer = () => {
  const [currentSound, setCurrentSound] = useState<Audio.Sound | null>(null);

  const audioUri = "http://webaudioapi.com/samples/audio-tag/chrono.mp3";
  const audioLocal = "../../assets/sounds/Sound1.mp3";

  const [currentMusicId, setCurrentMusicId] = useState(0);

  useEffect(() => {
    console.log(sounds.length);
    initMusic();
  }, []);

  useEffect(() => {
    return () => {
      if (currentSound) {
        currentSound.unloadAsync();
      }
    };
  }, [currentSound]);

  const initMusic = async () => {
    console.log("Loading Sound");

    try {
      let { sound } = await Audio.Sound.createAsync(sounds[0].url);

      setCurrentSound(sound);
    } catch {
      console.log("A");
    }
  };

  const nextSound = async () => {
    setCurrentMusicId(
      currentMusicId == sounds.length - 1 ? currentMusicId + 1 : 0
    );
  };

  const previousSound = async () => {};

  const handlePlaySound = async () => {
    if (!currentSound) await initMusic();

    await currentSound?.playAsync();
  };

  const handlePauseSound = async () => {
    await currentSound?.stopAsync();
  };

  return (
    <AudioContainer>
      <MusicInfo />
      <MusicControl
        currentSound={currentSound}
        handlePlaySound={() => handlePlaySound()}
        handlePauseSound={() => handlePauseSound()}
        nextSound={nextSound}
      />

      <TouchableOpacity onPress={() => handlePlaySound()}>
        <Text>Play Audio</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePauseSound()}>
        <Text>Stop Audio</Text>
      </TouchableOpacity>
    </AudioContainer>
  );
};

export default MusicPlayer;
