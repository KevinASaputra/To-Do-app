import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { BackIcon, MenuIcon } from "../component/Icons";
import { TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../theme/colors";

export const CreateScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <View style={styles.navigation}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.goBack()}
          >
            <View style={styles.icon}>
              <BackIcon />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Add new to-do</Text>
          <TextInput style={styles.input} />
        </View>

        <View style={styles.wrapper}>
          <Text style={styles.description}>Pleasae input your to-do below</Text>
          <TextInput style={styles.input} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    paddingTop: 16,
    justifyContent: "space-between",
    paddingBottom: 40,
    paddingHorizontal: 20,
  },
  container: {},
  navigation: {
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.secondary.shade2,
  },
  button: {},
  icon: {},
  wrapper: {},
  title: {},
  description: {},
});
