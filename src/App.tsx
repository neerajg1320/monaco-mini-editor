import {  useState } from 'react';
import './App.css'
import Editor from '@monaco-editor/react';
// import 

function App() {

  const [text, setText] = useState('');
  const handleText: React.ChangeEventHandler<HTMLTextAreaElement> = (e)=>{
    setText(e.target.value);
  }

  return (
    <>
    <div className='border-solid border-2 border-indigo-600 m-12'>

      <Editor height="90vh" defaultLanguage="javascript" defaultValue="// some comment" theme="vs-dark" />
    </div>
      <textarea value={text} onChange={handleText}/>
    </>
  )
}

export default App;
