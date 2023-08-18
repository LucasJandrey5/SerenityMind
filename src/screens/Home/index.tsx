import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import React from "react";

import { HomeContainer } from "./styles";
import MusicRow from "./MusicRow";

import sounds from "../../model/SoundsData";

interface Props {
  navigation: any;
}

const Home: React.FC<Props> = ({ navigation }) => {
  return (
    <HomeContainer>
      <FlatList
        data={sounds}
        renderItem={({ item }) => (
          <MusicRow info={item} navigation={navigation} />
        )}
      />
    </HomeContainer>
  );
};

export default Home;
