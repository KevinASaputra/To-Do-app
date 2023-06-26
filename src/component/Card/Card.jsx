import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../theme/colors";
import { Image } from "react-native-svg";
import { EditIcon } from "../Icons";

export const Card = ({ title, description }) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity style={styles.icon}>
          <EditIcon />
        </TouchableOpacity>
      </View>
      <Text numberOfLines={2} style={styles.description}>
        {description}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.card,
    paddingTop: 14,
    paddingHorizontal: 14,
    paddingBottom: 22,
    gap: 16,
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontFamily: "JosefinSans-Medium",
    fontWeight: 500,
    lineHeight: 24,
    letterSpacing: -0.24,
    color: colors.black,
  },
  icon: {
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  description: {
    display: "flex",
    flexDirection: "column",
    fontSize: 14,
    fontFamily: "JosefinSans-Medium",
    lineHeight: 20,
    color: "#6A7B81",
  },
});
