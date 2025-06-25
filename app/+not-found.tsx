import * as Haptics from "expo-haptics";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function NotFound() {
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-center bg-red-400">
      <Text className="font-thin text-3xl mb-4">404</Text>

      <Pressable
        onPress={() => {
          router.push("/home" as any);
          Haptics.selectionAsync();
        }}
        className="bg-red-500 px-4 py-2 rounded"
      >
        <Text className="text-white">Volver</Text>
      </Pressable>
    </View>
  );
}
