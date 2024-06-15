import { useEffect } from "react";

export default function componentWillUnmount() {
  useEffect(() => {
    console.log("Mounting phase: same when componentDidMount runs");

    return () => {
      console.log("Unmounting phase: same when componentWillUnmount runs");
    };
  }, []);

  return null;
}
