import { DependencyList, useEffect } from "react";

export const useKeyPressEffect = (
  targetKey: string,
  onKeyPressed: VoidFunction,
  deps: DependencyList = [],
  options = { enableRepeat: false }
) => {
  useEffect(() => {
    const downHandler = (event: KeyboardEvent) => {
      if (!options.enableRepeat && event.repeat) {
        return;
      }
      if (event.key === targetKey) {
        onKeyPressed();
      }
    };

    window.addEventListener("keydown", downHandler);
    return () => {
      window.removeEventListener("keydown", downHandler);
    };
  }, [onKeyPressed, targetKey, deps, options.enableRepeat]);
};
