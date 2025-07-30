import "./App.css";
import "@mdxeditor/editor/style.css";

import DefaultAdminLayout from "./layouts/Layout";

function App() {
  return (
    <DefaultAdminLayout>{localStorage.getItem("test")}</DefaultAdminLayout>
  );
}

export default App;
