import { useState, } from 'react'
import axios from 'axios';
import TranscribedText from './components/transcribedText'
import TranslatedText from "./components/translatedText"
import SelectLanguage from './components/selectLanguage'
import { ProcessResponse } from './types'

function App() {
  const [urlInput, setUrlInput] = useState<string>('')
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [targetLanguage, setTargetLanguage] = useState<string>('auto')
  const [transcribedText, setTranscribedText] = useState<string>('')
  const [translatedText, setTranslatedText] = useState<string>('')

  const submitHandler = async (e: any) => {
    e.preventDefault();
    setIsLoading(true)
    setError(null);

    const apiUrl = import.meta.env.VITE_API_URL;
    try {
      const res = await axios.post<ProcessResponse | null>(`${apiUrl}/process`, {
        url: urlInput,
        target_language: targetLanguage,
      });
      if (res.data) {
        setTranscribedText(res.data.transcribed)
        setTranslatedText(res.data.translated)
      }
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
      <div className="h-screen flex flex-col pb-6">
        <div className="h-full flex flex-col justify-center">
          <div className="-mt-20 max-w-4xl w-full text-center mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-4 flex justify-center items-center">
              Hasham.live
            </div>

            <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">
              Welcome to Translate Engine
            </h1>
            <p className="my-3 text-gray-600">
              Your AI-powered Youtube Video Translator
            </p>

            <SelectLanguage setTargetLanguage={setTargetLanguage} />
          </div>


          <div className="mt-6 max-w-2xl w-full mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className='flex gap-2 px-6 pb-4'>
          {transcribedText && <TranscribedText text={transcribedText} />}
          {translatedText && <TranslatedText text={translatedText} />}
        </div>

        <footer className="mt-auto max-w-4xl text-center mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-gray-600">© 2025 Hasham.live</p>
        </footer>
      </div>
    </>
  )
}

export default App
