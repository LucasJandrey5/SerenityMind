import React, { useState, useEffect, useDebugValue } from "react";
import { Audio } from "expo-av";
import { TouchableOpacity, Text, View } from "react-native";

import { AudioContainer } from "./styles";

import MusicInfo from "./MusicInfo";
import MusicControl from "./MusicControl";

import sounds from "../../model/SoundsData";

const MusicPlayer = ({ route }: { route: any }) => {
  const [currentSound, setCurrentSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState<Boolean>(false);
  const [currentMusicId, setCurrentMusicId] = useState(0);

  useEffect(() => {
    setCurrentMusicId(sounds.findIndex((i) => i.id === route?.params?.id));
  }, [route]);

  useEffect(() => {
    return () => {
      if (currentSound) {
        currentSound.unloadAsync();
      }
    };
    FcSetIsPlaying();
  }, [currentSound]);

  useEffect(() => {
    initMusic();
  }, [currentMusicId]);

  const handlePlaySound = async () => {
    if (!currentSound) await initMusic();

    await currentSound?.playAsync();

    FcSetIsPlaying();
  };

  const initMusic = async () => {
    try {
      let { sound } = await Audio.Sound.createAsync({
        uri: sounds[currentMusicId].url,
      });

      setCurrentSound(sound);
    } catch {
      console.log("A");
    }
  };

  const StopMusic = async () => {
    await currentSound?.pauseAsync();
    FcSetIsPlaying();
  };

  const nextSound = async () => {
    StopMusic();

    await setCurrentMusicId(
      currentMusicId == sounds.length - 1 ? 0 : currentMusicId + 1
    );
  };

  const previousSound = async () => {
    StopMusic();

    await setCurrentMusicId(
      currentMusicId == 0 ? sounds.length - 1 : currentMusicId - 1
    );
  };

  const handlePauseSound = async () => {
    StopMusic();
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
        previousSound={() => previousSound()}
      />
    </AudioContainer>
  );
};

export default MusicPlayer;
