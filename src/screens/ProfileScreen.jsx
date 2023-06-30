import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title} onPress={() => navigation.goBack()}>
          Profile
        </Text>
        <View style={styles.wrapper}>
          <View>
            <View>
              <Text>Test Name</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  container: {
    width: 275,
    height: 234,
    flexShrink: 0,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontFamily: "JosefinSans-Medium",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: 20,
  },
  wrapper: {
    display: "flex",
    width: 241,
    paddingTop: 40,
    height: 80,
    alignItems: "center",
    gap: 20,
    flexShrink: 0,
  },
});
