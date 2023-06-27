import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View>
        <Text onPress={() => navigation.goBack()}>ProfileScreen</Text>
      </View>
    </SafeAreaView>
  );
};
