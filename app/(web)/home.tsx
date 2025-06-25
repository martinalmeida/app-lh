import AntDesign from "@expo/vector-icons/AntDesign";
import * as Haptics from "expo-haptics";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function WebHome() {
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-center bg-blue-300">
      <Text className="font-thin text-3xl mb-4">Pantalla para Web</Text>

      <Pressable
        onPress={() => {
          router.push("/(web)/(help)/home" as any);
          Haptics.selectionAsync();
        }}
        className="bg-blue-500 px-4 py-2 rounded-2xl"
      >
        <View className="flex-row items-center">
          <AntDesign name="infocirlceo" size={24} color="white" />
          <Text className="text-white ml-2">Ir a pantalla de ayuda</Text>
        </View>
      </Pressable>
    </View>
  );
}
