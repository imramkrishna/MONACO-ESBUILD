import { useState } from 'react'
import CodeEditor from './components/CodeEditor'
import { useCodeExecution } from './hooks/useCodeExecution'
import './App.css'

function App() {
  const [code, setCode] = useState<string>('// Write your JavaScript code here\nconsole.log("Hello, World!");')
  const { output, error, isExecuting, executeCode } = useCodeExecution()

  const handleCodeChange = (value: string | undefined) => {
    setCode(value || '')
  }

  const handleRun = () => {
    executeCode(code)
  }

  return (
    <div className="h-screen bg-gray-900 text-white flex flex-col">
      {/* Top Navigation Bar */}
      <header className="bg-gray-800 border-b border-gray-700 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
          <h1 className="text-xl font-bold">JavaScript Playground</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="text-gray-400 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
            </svg>
          </button>
          <button className="text-gray-400 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <aside className="w-12 bg-gray-800 border-r border-gray-700 flex flex-col items-center py-4 space-y-4">
          <button className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </button>
          <button className="w-8 h-8 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
          <button className="w-8 h-8 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </button>
        </aside>

        {/* Main Editor Area */}
        <div className="flex-1 flex">
          {/* Code Editor Panel */}
          <div className="flex-1 flex flex-col bg-gray-900">
            {/* Editor Header */}
            <div className="bg-gray-800 border-b border-gray-700 px-4 py-2 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                </div>
                <span className="text-sm text-gray-400 ml-3">main.js</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <button 
                  onClick={handleRun}
                  disabled={isExecuting}
                  className={`
                    px-4 py-1.5 rounded-md text-sm font-medium flex items-center space-x-2 transition-all
                    ${isExecuting 
                      ? 'bg-gray-700 text-gray-400 cursor-not-allowed' 
                      : 'bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-green-600/25'
                    }
                  `}
                >
                  {isExecuting ? (
                    <>
                      <div className="animate-spin w-3 h-3 border border-gray-400 border-t-transparent rounded-full"></div>
                      <span>Running</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                      <span>Run</span>
                    </>
                  )}
                </button>
              </div>
            </div>
            
            {/* Monaco Editor */}
            <div className="flex-1">
              <CodeEditor 
                onRun={handleRun} 
                onCodeChange={handleCodeChange} 
                isRunning={isExecuting}
              />
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="w-1 bg-gray-700 hover:bg-gray-600 cursor-col-resize"></div>

          {/* Console/Output Panel */}
          <div className="w-96 flex flex-col bg-gray-900 border-l border-gray-700">
            {/* Console Header */}
            <div className="bg-gray-800 border-b border-gray-700 px-4 py-2 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium text-gray-300">Console</span>
              </div>
              
              <button className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
            
            {/* Console Content */}
            <div className="flex-1 p-4 overflow-auto font-mono text-sm">
              {/* Output */}
              {output && (
                <div className="mb-4">
                  <div className="text-green-400 text-xs font-semibold mb-2 flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                    OUTPUT
                  </div>
                  <pre className="bg-gray-800 p-3 rounded border-l-2 border-green-400 text-gray-300 whitespace-pre-wrap">
                    {output}
                  </pre>
                </div>
              )}

              {/* Error */}
              {error && (
                <div className="mb-4">
                  <div className="text-red-400 text-xs font-semibold mb-2 flex items-center">
                    <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                    ERROR
                  </div>
                  <pre className="bg-red-900/20 p-3 rounded border-l-2 border-red-400 text-red-300 whitespace-pre-wrap">
                    {error}
                  </pre>
                </div>
              )}

              {/* Empty State */}
              {!output && !error && !isExecuting && (
                <div className="text-center text-gray-500 mt-16">
                  <div className="w-12 h-12 mx-auto mb-3 opacity-30">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm">Console output will appear here</p>
                  <p className="text-xs mt-1">Run your code to see results</p>
                </div>
              )}

              {/* Loading */}
              {isExecuting && (
                <div className="text-center text-blue-400 mt-16">
                  <div className="animate-spin w-6 h-6 border-2 border-blue-400 border-t-transparent rounded-full mx-auto mb-2"></div>
                  <p className="text-sm">Executing...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
