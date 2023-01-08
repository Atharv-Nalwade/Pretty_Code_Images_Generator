import './App.css';

import React, { useEffect,useState } from "react";
// import Prism from "prismjs";
// import "prismjs/themes/prism-tomorrow.css";

import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css'; //Example style, you can use another



const code=`function foo(){ a++; }`
let language='javascript';




function App() {
  // useEffect(() => {
  //   Prism.highlightAll();
  // }, []);
  // return (
  //   <div className="Code">
  //     <pre>
  //       <code className={`language-${language}`} ><textarea style={{background:"transparent"}}></textarea></code>
  //     </pre>
  //   </div>
  // );

  const [code, setCode] = useState(
    `function add(a, b) {\n  return a + b;\n}`
  )

  return(
   <Editor
      value={code}
      onValueChange={code => setCode(code)}
      highlight={code => highlight(code, languages.js)}
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 12,
        backgroundColor:"rgba(255,255,255)"
      }}
    />
  );
}

export default App;
