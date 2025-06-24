import { router, useRootNavigationState } from "expo-router";
import { useEffect } from "react";

export function useSafeRedirect(path) {
  const nav = useRootNavigationState();

  useEffect(() => {
    if (!nav?.key) return;

    const t = setTimeout(() => {
      router.replace(path);
    }, 10);

    return () => clearTimeout(t);
  }, [nav, path]);
}
