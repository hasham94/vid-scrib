import { useState } from 'react'
import './App.css'

function App() {
  const [urlInput, setUrlInput] = useState<string>('')

  return (
    <>
      <h2>Past Url Here</h2>
      <input
        className='border border-gray-200 rounded p-2'
        type='text'
        value={urlInput}
        onChange={(e) => setUrlInput(e.target.value)} />
    </>
  )
}

export default App
