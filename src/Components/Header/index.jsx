import { View, Text, Button, TouchableHighlight } from "react-native";
import React from "react";
import { SvgXml } from "react-native-svg";
import { Entypo } from "@expo/vector-icons";

import ProfileSvg from "../../assets/images/profile.svg";
import LogoSvg from "../../assets/images/logo.svg";

import { Container, Logo, ProfileBox } from "./styles";

const index = () => {
  return (
    <Container>
      <TouchableHighlight title="Open Menu">
        <Entypo name="menu" size={35} color="white" />
      </TouchableHighlight>
      <LogoSvg width="40" height="40"></LogoSvg>
      <ProfileBox>
        <TouchableHighlight title="Open Profile">
          <ProfileSvg width="30" height="30"></ProfileSvg>
        </TouchableHighlight>
      </ProfileBox>
    </Container>
  );
};

export default index;
