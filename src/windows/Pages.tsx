import { useEffect, useState } from "react";
import DefaultAdminLayout from "../layouts/Layout";

export default function Pages() {
  const [text, setText] = useState<string>(localStorage.getItem("test") || "");

  useEffect(() => {
    localStorage.setItem("test", text);
  }, [text]);

  return (
    <DefaultAdminLayout>
      <button className="btn btn-primary">Tst</button>

      <input
        value={text}
        onInput={(event) => {
          setText(event.currentTarget.value);
        }}
      />
    </DefaultAdminLayout>
  );
}
