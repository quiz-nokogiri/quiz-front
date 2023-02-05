import { DependencyList, useEffect } from "react";

export const useKeyPressEffect = (
  targetKey: string,
  onKeyPressed: VoidFunction,
  deps: DependencyList = []
) => {
  useEffect(() => {
    const downHandler = (event: KeyboardEvent) => {
      if (event.key === targetKey) {
        onKeyPressed();
      }
    };

    window.addEventListener("keydown", downHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
    };
  }, [onKeyPressed, targetKey, deps]);
};
