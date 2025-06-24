import { useSafeRedirect } from "@hooksC/useSafeRedirect";
import { Platform } from "react-native";

export default function HomeRedirect() {
  const safeRedirect = useSafeRedirect;

  if (Platform.OS === "web") {
    safeRedirect("/(web)/home");
  } else if (Platform.OS === "android") {
    safeRedirect("/(android)/home");
  }

  return null;
}
