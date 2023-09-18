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

  const handleThemeChange = (theme: string) => {
    setEditorTheme(theme);
  };

  return (
    <>
      <h2>Select a theme:</h2>
      <div className="flex justify-start ml-8 items-start">
        {themes.map((theme) => (
          <label key={theme}>
            <input
              type="radio"
              name="theme"
              value={theme}
              checked={editorTheme === theme}
              onChange={() => handleThemeChange(theme)}
              className="mr-2 ml-1"
            />
            {theme}
          </label>
        ))}
      </div>

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
