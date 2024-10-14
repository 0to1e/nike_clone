import { useState } from "react";

export const useBoolean = (initalState: boolean): [boolean, () => void] => {
  const [value, setvalue] = useState<boolean>(initalState);

  function switchState() {
    setvalue(!value);
  }

  return [value, switchState];
};
