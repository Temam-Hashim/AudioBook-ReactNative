import { Text, View, StyleSheet } from "react-native";
import React from "react";
import Navbar from "../components/Home/Navbar";
import ScreenHeaderBtn from "../components/Home/ScreenHeaderBtn";
import { icons } from "../constants";
import About from "../components/Home/About";
import { ScrollView } from "react-native-gesture-handler";

export default function Home() {
  return (
    <View>
      {/* navbar */}
      <Navbar />
      <ScrollView showsVerticalScrollIndicator={false}>
        <About />
      </ScrollView>
    </View>
  );
}
