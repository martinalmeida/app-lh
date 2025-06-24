import { useSafeRedirect } from "@hooksC/useSafeRedirect";

export default function Index() {
  const safeRedirect = useSafeRedirect;

  safeRedirect("/home" as any);

  return null;
}
