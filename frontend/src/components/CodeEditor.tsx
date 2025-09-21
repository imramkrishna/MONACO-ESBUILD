import React from 'react'
import { Editor } from '@monaco-editor/react'

interface CodeEditorProps {
    onRun: () => void;
    onCodeChange: (value: string | undefined) => void;
    isRunning: boolean;
}

const CodeEditor = ({onRun, onCodeChange, isRunning}: CodeEditorProps) => {
  return (
    <div className='w-full h-full'>
      <Editor
        height="100%"
        defaultLanguage="javascript"
        theme="vs-dark"
        onChange={onCodeChange}
        defaultValue="// Write your JavaScript code here&#10;console.log('Hello, World!');"
        options={{
          readOnly: isRunning,
          automaticLayout: true,
          fontSize: 14,
          fontFamily: "'JetBrains Mono', 'Fira Code', 'Cascadia Code', 'Consolas', monospace",
          lineHeight: 1.6,
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          wordWrap: 'on',
          padding: { top: 20, bottom: 20 },
          suggestOnTriggerCharacters: true,
          quickSuggestions: true,
          tabSize: 2,
          insertSpaces: true,
          folding: true,
          lineNumbers: 'on',
          renderLineHighlight: 'line',
          smoothScrolling: true,
          cursorBlinking: 'smooth'
        }}
      />
    </div>
  )
}

export default CodeEditor
