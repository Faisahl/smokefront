import { useEffect } from "react";

const useBeforeUnload = (dirty: boolean, message: string): void => {
  useEffect(() => {
    const listener = (event: BeforeUnloadEvent): string | void => {
      if (dirty) {
        event.preventDefault();
        event.returnValue = message; // For modern browsers
        return message; // For older browsers
      }
    };
    window.addEventListener("beforeunload", listener);
    return () => {
      window.removeEventListener("beforeunload", listener);
    };
  }, [dirty, message]);
};

export default useBeforeUnload;
