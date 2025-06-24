import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function WebHelpHome() {
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-center bg-purple-300">
      <Text className="font-thin text-3xl mb-4">Pantalla de ayuda Web</Text>

      <Pressable
        onPress={() => router.back()}
        className="bg-red-500 px-4 py-2 rounded"
      >
        <Text className="text-white">Volver</Text>
      </Pressable>
    </View>
  );
}
