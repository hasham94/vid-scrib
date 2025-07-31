import { useState, } from 'react'
import axios from 'axios';
import TranscribedText from './components/transcribedText'
import TranslatedText from "./components/translatedText"
import SelectLanguage from './components/selectLanguage'
import Footer from './layouts/footer';
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
    <div className='min-h-screen flex flex-col'>
      <div className={`relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('./polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-1 before:transform before:-translate-x-1/2`}>
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
          <div className="flex justify-center">
            <a className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-sm text-gray-800 p-1 ps-3 rounded-full transition hover:border-gray-300 focus:outline-hidden focus:border-gray-300 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200 dark:hover:border-neutral-600 dark:focus:border-neutral-600" href="#">
              hasham.live
              <a href='https://hasham.live/' target='_blank'>
                <span className="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-gray-200 font-semibold text-sm text-gray-600 dark:bg-neutral-700 dark:text-neutral-400">
                  <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                </span>
              </a>
            </a>
          </div>
          <div className="mt-5 max-w-2xl text-center mx-auto">
            <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
              <span className="bg-clip-text bg-linear-to-tl from-blue-600 to-violet-600 text-transparent">YT </span>
              Translate Engine
            </h1>
          </div>

          <div className="mt-5 max-w-2xl text-center mx-auto">
            <p className="text-lg text-gray-600 dark:text-neutral-400">Preline UI is an open-source set of prebuilt UI components, ready-to-use examples and Figma design system based on the utility-first Tailwind CSS framework.</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <SelectLanguage setTargetLanguage={setTargetLanguage} />

        <div className="mt-6 max-w-2xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <input
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              type="text"
              disabled={isLoading}
              className="p-3 sm:p-4 block w-full border border-gray-200 rounded-full sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Past Url Here..." />
            <div className="absolute top-1/2 end-2 -translate-y-1/2">
              <button disabled={!urlInput || isLoading} type="button" onClick={submitHandler} className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-white hover:text-gray-800 focus:outline-hidden focus:text-gray-800 bg-linear-to-tl from-blue-600 to-violet-600 disabled:opacity-50 disabled:pointer-events-none">
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

      <div className='flex flex-col lg:flex-row gap-2 px-6 pb-4 w-full mt-8'>
        {transcribedText && <TranscribedText text={transcribedText} />}
        {translatedText && <TranslatedText text={translatedText} />}
      </div>

      <Footer />
    </div>
  )
}

export default App
