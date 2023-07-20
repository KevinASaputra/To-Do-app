import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { BackIcon, MenuIcon } from "../component/Icons";
import { TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../theme/colors";
import { useState } from "react";

export const CreateScreen = () => {
  const navigation = useNavigation();

  const [addItem, setAddItem] = useState();

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <View style={styles.navigation}>
          <TouchableOpacity
            style={styles.buttonIcon}
            onPress={() => navigation.goBack()}
          >
            <View style={styles.icon}>
              <BackIcon />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.wrapperContainer}>
          <View style={styles.wrapper}>
            <Text style={styles.title}>Add new to-do</Text>
            <Text style={styles.description}>
              Pleasae input your to-do below
            </Text>
          </View>

          <View style={styles.textInput}>
            <TextInput placeholder="Title" style={styles.titleInput} />
            <TextInput
              placeholder="Description"
              style={styles.descriptionInput}
            />
          </View>
        </View>
      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Create new to-do</Text>
        </TouchableOpacity>
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
    backgroundColor: colors.white,
  },
  container: {
    gap: 40,
  },
  navigation: {
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 6,
  },
  wrapperContainer: {
    gap: 60,
  },
  title: {
    color: colors.black,
    textAlign: "center",
    fontSize: 30,
    fontFamily: "JosefinSans-Medium",
    fontWeight: 600,
    lineHeight: 36,
    letterSpacing: -0.3,
    color: colors.white,
  },
  description: {
    color: colors.grey,
    textAlign: "center",
    fontSize: 14,
    fontFamily: "JosefinSans-Medium",
    lineHeight: 20,
  },
  button: {
    width: 24,
    height: 24,
    flexShrink: 0,
  },
  textInput: {
    gap: 16,
  },
  titleInput: {
    display: "flex",
    width: 335,
    height: 48,
    paddingVertical: 16,
    paddingStart: 16,
    paddingHorizontal: 217,
    alignItems: "center",
    gap: 3,
    flexShrink: 0,
    borderColor: "#E9E9E9",
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: "#fff",
  },
  descriptionInput: {
    display: "flex",
    width: 335,
    height: 48,
    paddingVertical: 16,
    paddingStart: 16,
    paddingHorizontal: 217,
    alignItems: "center",
    gap: 3,
    flexShrink: 0,
    borderColor: "#E9E9E9",
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: "#fff",
  },
  containerButton: {
    alignItems: "center",
  },
  button: {
    width: 335,
    height: 48,
    flexShrink: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary.shade1,
  },
  textButton: {
    color: colors.white,
    fontSize: 14,
    fontFamily: "JosefinSans-Medium",
    fontWeight: 500,
    lineHeight: 14,
    letterSpacing: -0.14,
  },
});
