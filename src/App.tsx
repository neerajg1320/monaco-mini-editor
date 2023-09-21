// import { useState } from "react";
import "./App.css";
import Landing from "./components/Landing/Landing";
import SelectionBox from "./components/selectionBox/SelectionBox";
import PopUp from "./components/setting/PopUp";
import Setting from "./components/setting/Setting";
import { useTheme } from "./contexts/Theme.context";
// import Signin from "./components/Signin";
// import Signup from "./components/Signup";
// import Editor from "@monaco-editor/react";

const App: React.FC = () => {
  const {theme, settingButton} = useTheme();

  // console.log("theme : ", theme);
  return (
    <div style={{...theme as React.CSSProperties}}>
      <Setting/>
      {settingButton && <PopUp/>}
      <Landing />
      {/* <Signin />
      <Signup /> */}
    </div>
  );
};

export default App;





// const [text, setText] = useState("");
// const themes = ["vs", "vs-dark", "hc-black", "hc-light"];
// const handleText: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
//   setText(e.target.value);
// };
// const [editorTheme, setEditorTheme] = useState<string>("vs");

// const handleThemeChange: React.ChangeEventHandler<HTMLSelectElement> = (
//   e
// ) => {
//   setEditorTheme(e.target.value);
//   // console.log(`theme ${e.target.value}`);
// };

// return (
//   <>
//     <h2>Select a theme:</h2>
//     <div className="border-2 inline-block border-gray-700 ml-12">
//     <select onChange={handleThemeChange} value={editorTheme}>
//       {themes.map((theme) => (
//         <option key={theme} value={theme}>
//           {theme}
//         </option>
//       ))}
//     </select>
//     </div>

//     <div className="border-solid border-2 border-indigo-600 m-12">
//       <Editor
//         height="90vh"
//         defaultLanguage="javascript"
//         defaultValue="// some comment"
//         theme={editorTheme}
//       />
//     </div>
//     <textarea value={text} onChange={handleText} />
//   </>
// );
