import { useState } from 'react'
import axios from "axios";

function App() {
  const [urlInput, setUrlInput] = useState<string>('')
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const submitHandler = async (e: any) => {
    e.preventDefault();
    setIsLoading(true)
    setError(null);

    const apiUrl = import.meta.env.VITE_API_URL;
    try {
      const res = await axios.post(`${apiUrl}/process`, {
        url: urlInput,
        target_language: 'en',
      });
    } catch (err: any) {
      if (axios.isAxiosError(err)) {
        const message = err.response?.data?.detail || 'An error occurred.';
        setError(message);
      } else {
        setError('Something went wrong.');
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>

      {/* Content */}
      <div className="h-screen flex flex-col pb-6">
        <div className="h-full flex flex-col justify-center">
          <div className="-mt-20 max-w-4xl w-full text-center mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-4 flex justify-center items-center">
              Hasham.live
            </div>

            <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">
              Welcome to Translate Engine
            </h1>
            <p className="mt-3 text-gray-600">
              Your AI-powered Youtube Video Translator
            </p>
          </div>


          <div className="mt-10 max-w-2xl w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative">
              <input
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                type="text"
                disabled={isLoading}
                className="p-3 sm:p-4 block w-full border border-gray-200 rounded-full sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Past Url Here..." />
              <div className="absolute top-1/2 end-2 -translate-y-1/2">
                <button disabled={!urlInput || isLoading} type="button" onClick={submitHandler} className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">
                  <svg className="size-4 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7 7 7M12 3v18" />
                  </svg>
                </button>
              </div>
            </div>
            {error && <span className='text-xs text-red-500'>{error}</span>}
            {isLoading && <span className='text-xs text-gray-600'>Generating Text...</span>}
          </div>
        </div>

        <footer className="mt-auto max-w-4xl text-center mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-gray-600">© 2025 Hasham.live</p>
        </footer>
      </div>
    </>
  )
}

export default App
