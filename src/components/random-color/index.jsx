import { useState } from "react";

export default function RandomColor(params) {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");
  return (
    <div>
      <button>Create HEX Color</button>
      <button>Generate RGB Color</button>
      <button>Generate Random Color</button>
    </div>
  );
}
