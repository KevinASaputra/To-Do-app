import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const EditScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View>
        <Text onPress={() => navigation.goBack()}>editScreen</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});
