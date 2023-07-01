import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../theme/colors";
import { Image } from "expo-image";
import { images } from "../constans/images";
import { EditIcon } from "../component/Icons";

export const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title} onPress={() => navigation.goBack()}>
          Profile
        </Text>
        <View style={styles.wrapper}>
          <View style={styles.icon}>
            <Image source={images.profile} style={styles.image} />
          </View>
          <View style={styles.wrapperBio}>
            <Text style={styles.nameProf}>Test Name</Text>
            <Text style={styles.gmailName}>kevinsaputra@gmail.com</Text>
          </View>
          <View>
            <EditIcon />
          </View>
        </View>
      </View>
      <View style={styles.cardProf}></View>
      <View style={styles.cardHistory}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.white,
  },
  container: {
    width: 375,
    height: 234,
    flexShrink: 0,
    alignItems: "center",
    backgroundColor: colors.rown,
  },
  title: {
    paddingTop: 20,
    fontSize: 20,
    fontFamily: "JosefinSans-Medium",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: 20,
  },
  wrapper: {
    justifyContent: "center",
    flexDirection: "row",
    display: "flex",
    width: 241,
    paddingTop: 40,
    paddingStart: 20,
    height: 80,
    alignItems: "center",
    gap: 20,
    flexShrink: 0,
  },
  wrapperBio: {
    gap: 6,
    flexDirection: "column",
    alignItems: "flex-start",
  },
  nameProf: {
    fontSize: 24,
    fontFamily: "JosefinSans-Medium",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 24,
    letterSpacing: -0.24,
  },
  gmailName: {
    fontSize: 14,
    fontFamily: "JosefinSans-Medium",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: 14,
    color: colors.grey,
  },
  icon: {
    alignItems: "center",
    justifyContent: "center",
    width: 80,
    height: 80,
    borderRadius: 80,
    backgroundColor: colors.white,
  },
  image: {
    width: 40,
    height: 52,
    flexShrink: 0,
  },
  cardProf: {
    marginTop: 30,
    width: 335,
    height: 210,
    flexShrink: 0,
    backgroundColor: colors.green,
  },
  cardHistory: {
    width: 375,
    height: 812,
  },
});
