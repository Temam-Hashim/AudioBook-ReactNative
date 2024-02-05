import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { icons, FONT, SIZES, COLORS, images } from "../../constants";

export default function About() {
  return (
    <View style={style.container}>
      <Text style={style.outerHeader}>
        <Text style={style.innerHeader}>About </Text> Us
      </Text>
      <Text style={style.aboutInfo}>
        Welcome to AudioVista, your premier destination for a captivating
        auditory experience! Immerse yourself in a world of literature like
        never before with our extensive collection of audiobooks, presented in
        the form of engaging episodes that bring stories to life in a whole new
        way
      </Text>
      <Image source={images.about} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: COLORS.gray,
    color: COLORS.white,
    height: "fit-content",
    padding: 20,
    marginTop: 20,
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "column",
    border: "1px solid",
    borderColor:COLORS.primary,
    borderRadius: 10,
    margin: 5,
  },
  outerHeader: {
    fontSize: 26,
    marginLeft: 5,
    fontWeight:COLORS.bold,
  },
  innerHeader: {
    color: COLORS.primary,
    fontWeight:COLORS.bold,
  },
  serviceInfo: {
    fontSize: 16,
    lineHeight: 24,
    color: COLORS.white,
    marginLeft: 5,
  },
});
