import { useState, useEffect } from "react";

export default function componentDidUpdate() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log(value);
    console.log("Updating phase: same when componentDidUpdate runs");
  }, [value]);

  return <button onClick={() => setValue(value + 1)}>{value}</button>;
}
