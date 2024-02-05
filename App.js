import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { images } from "./constants";

import "react-native-gesture-handler";
import {
  SimpleLineIcon,
  FontAwesome,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import { SafeAreaView } from "react-native-safe-area-context";
import {
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Book from "./screens/Book";
import Setting from "./screens/Setting";
import Audio from "./screens/Audio";
import { COLORS, SIZES } from "./constants/theme";

const Drawer = createDrawerNavigator();

export default function App() {
  const handleLogout = () => {
    alert("You have logged out");
  };
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => {
          return (
            <SafeAreaView style={styles.safeArea}>
              <View style={styles.itemView}>
                <Image source={images.profile} style={styles.profile} />
                <Text style={styles.username}>Temam Hashim</Text>
                <Text style={styles.role}>Admin</Text>
              </View>
              <DrawerItemList {...props} />
              <View style={styles.logoutView}>
                <DrawerItem
                  label="Logout"
                  labelStyle={{
                    color: COLORS.lightWhite,
                    fontWeight: "bold",
                    fontSize: 20,
                    fontStyle: "italic",
                  }}
                  icon={() => (
                    <FontAwesome
                      name="arrow-right"
                      size={20}
                      color={COLORS.lightWhite}
                    />
                  )}
                  onPress={() => {
                    alert("You have logged out");
                  }}
                />
              </View>
            </SafeAreaView>
          );
        }}
        screenOptions={{
          drawerStyle: {
            backgroundColor: COLORS.lightWhite,
            width: 250,
          },
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          headerTintColor: COLORS.lightWhite,
          headerTitleStyle: {
            fontWeight: "bold",
          },
          drawerActiveTintColor: "blue",
          drawerLabelStyle: {
            color: COLORS.primary,
          },
        }}
      >
        <Drawer.Screen
          name="Home"
          options={{
            drawerLabel: "Home",
            title: "Home",
            drawerIcon: () => (
              <FontAwesome name="home" size={20} color={COLORS.primary} />
            ),
          }}
          component={Home}
        />
        <Drawer.Screen
          name="Audio"
          options={{
            drawerLabel: "Audio",
            title: "Audio",
            drawerIcon: () => (
              <MaterialCommunityIcons
                name="cast-audio-variant"
                size={20}
                color={COLORS.primary}
              />
            ),
          }}
          component={Audio}
        />
        <Drawer.Screen
          name="Book"
          options={{
            drawerLabel: "Book",
            title: "Book",
            drawerIcon: () => (
              <FontAwesome name="book" size={20} color={COLORS.primary} />
            ),
          }}
          component={Book}
        />
        <Drawer.Screen
          name="Profile"
          options={{
            drawerLabel: "Profile",
            title: "Profile",
            drawerIcon: () => (
              <FontAwesome name="user" size={20} color={COLORS.primary} />
            ),
          }}
          component={Profile}
        />
        <Drawer.Screen
          name="Setting"
          options={{
            drawerLabel: "Setting",
            title: "Setting",
            drawerIcon: () => (
              <FontAwesome name="gear" size={20} color={COLORS.primary} />
            ),
          }}
          component={Setting}
        />
  
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  itemView: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#f4f4f4",
    backgroundColor: COLORS.gray,
    borderBottomWidth: 1,
  },
  profile: {
    height: 130,
    width: 130,
    borderRadius: 65,
  },
  username: {
    fontSize: 22,
    color: COLORS.lightWhite,
    fontWeight: "bold",
    marginVertical: 2,
  },
  role: {
    fontSize: 16,
    color: COLORS.gray2,
    marginVertical: 2,
  },
  safeArea:{
    flex:1,
    justifyContent:"space-between", 
    margin:"auto"
  },
  logoutView: {
    backgroundColor: COLORS.danger,
    borderRadius: 10,
    padding: 1,

  },
});
