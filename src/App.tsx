import { useState } from "react";
import "./App.css";
import Editor from "@monaco-editor/react";
// import

function App() {
  const [text, setText] = useState("");
  const themes = ["vs", "vs-dark", "hc-black", "hc-light"];
  const handleText: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setText(e.target.value);
  };
  const [editorTheme, setEditorTheme] = useState<string>("vs");

  const handleThemeChange: React.ChangeEventHandler<HTMLSelectElement> = (
    e
  ) => {
    setEditorTheme(e.target.value);
    // console.log(`theme ${e.target.value}`);
  };

  return (
    <>
      <h2>Select a theme:</h2>
      <select onChange={handleThemeChange} value={editorTheme}>
        {themes.map((theme) => (
          <option key={theme} value={theme}>
            {theme}
          </option>
        ))}
      </select>

      <div className="border-solid border-2 border-indigo-600 m-12">
        <Editor
          height="90vh"
          defaultLanguage="javascript"
          defaultValue="// some comment"
          theme={editorTheme}
        />
      </div>
      <textarea value={text} onChange={handleText} />
    </>
  );
}

export default App;
