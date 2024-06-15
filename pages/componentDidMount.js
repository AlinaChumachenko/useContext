import { useState, useEffect } from "react";

export default function ComponentDidMount() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("Mouting phase: same when componentDidMount runs");
  }, []);

  return <button onClick={() => setValue(value + 1)}>{value}</button>;
}
