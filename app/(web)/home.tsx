import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function WebHome() {
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-center bg-blue-300">
      <Text className="font-thin text-3xl mb-4">Pantalla para Web</Text>

      <Pressable
        onPress={() => router.push("/(web)/(help)/home" as any)}
        className="bg-blue-500 px-4 py-2 rounded"
      >
        <Text className="text-white">Ir a pantalla de ayuda</Text>
      </Pressable>
    </View>
  );
}
