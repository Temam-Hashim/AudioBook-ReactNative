import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet
} from "react-native";

import {icons, FONT, SIZES, COLORS} from "../../constants";


const Navbar = () => {

    const [search, setSearch] = useState("");
    const handleClick = ()=>{
        alert(search)
    }
    

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello, Welcome!</Text>
        <Text style={styles.welcomeMessage}>Find your perfect book</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={search}
            onChangeText={text=>setSearch(text)}
            placeholder='What are you looking for?'
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default Navbar;


const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginTop:10,
      },
      userName: {
        fontSize: 22,
        color: COLORS.secondary,
        opacity:0.6,
        marginLeft:10,
      },
      welcomeMessage: {
        fontSize: 22,
        color: COLORS.primary,
        marginTop: 2,
        marginLeft:10,
      },
      searchContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginTop: SIZES.large,
        height: 50,
      
      },
      searchWrapper: {
        flex: 1,
        marginRight: SIZES.small,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: SIZES.medium,
        height: "100%",
        backgroundColor: COLORS.gray2,
        marginLeft:5,
        color:COLORS.white,
      },
      searchInput: {
        width: "100%",
        height: "100%",
        paddingHorizontal: SIZES.medium,
        opacity:1.9
      },
      searchBtn: {
        width: 50,
        height: "100%",
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
        marginRight:5,
      },
      searchBtnImage: {
        width: "50%",
        height: "50%",
        tintColor: COLORS.white,
      },
     
  });
