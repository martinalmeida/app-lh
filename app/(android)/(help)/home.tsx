import Ionicons from "@expo/vector-icons/Ionicons";
import * as Haptics from "expo-haptics";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function AndroidHelpHome() {
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-center bg-yellow-300">
      <Text className="font-thin text-3xl mb-4">Pantalla de ayuda Android</Text>

      <Pressable
        onPress={() => {
          router.back();
          Haptics.selectionAsync();
        }}
        className="bg-red-500 px-4 py-2 rounded-2xl"
      >
        <View className="flex-row items-center">
          <Ionicons name="caret-back-circle-outline" size={24} color="white" />
          <Text className="text-white ml-2">Volver Atras</Text>
        </View>
      </Pressable>
    </View>
  );
}
