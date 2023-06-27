import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../theme/colors";
import { MenuIcon, PlusIcon } from "../Icons";
import { Image } from "expo-image";
import { images } from "../../constans/images";
import { useLinkTo } from "@react-navigation/native";

export const Header = () => {
  const linkTo = useLinkTo();
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.secondary.shade1} />
      <View style={styles.menuWrapper}>
        <View style={styles.wrapper}>
          <TouchableOpacity style={styles.menuButton}>
            <View style={styles.icon}>
              <MenuIcon />
            </View>
            <Text style={styles.menu}>Menu</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.plus}
            onPress={() => linkTo("/Create")}
          >
            <PlusIcon />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.avatar}
          onPress={() => linkTo("/Profile")}
        >
          <Image source={images.avatar} style={styles.image} />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.substitle}>Increase your productivity</Text>
        <Text style={styles.title}>ToDo App</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingHorizontal: 26,
    backgroundColor: colors.secondary.shade1,
    gap: 34,
    position: "relative",
  },
  menuWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 2,
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  menuButton: {
    flexDirection: "row",
    alignItems: "center",
    height: 48,
    backgroundColor: colors.secondary.shade2,
    borderRadius: 50,
    paddingVertical: 4,
    paddingLeft: 4,
    paddingRight: 20,
    gap: 12,
  },
  icon: {
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 40,
    borderRadius: 40,
    backgroundColor: colors.secondary.shade3,
  },
  plus: {
    alignItems: "center",
    justifyContent: "center",
    height: 48,
    width: 48,
    borderRadius: 50,
    backgroundColor: colors.secondary.shade2,
  },
  menu: {
    fontSize: 18,
    fontWeight: 500,
    fontFamily: "IBMlexSans-Medium",
  },
  avatar: {
    width: 48,
    height: 48,
    backgroundColor: colors.secondary.shade3,
    borderRadius: 48,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 24,
    height: 31.2,
  },
  content: {
    gap: 6,
  },
  substitle: {
    fontSize: 16,
    fontWeight: 500,
    color: "#6C7EAB",
  },
  title: {
    fontSize: 60,
    fontFamily: "JosefinSans-Medium",
    fontWeight: 500,
    lineHeight: 60,
    letterSpacing: -0.6,
  },
});
