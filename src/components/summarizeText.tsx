import { useState } from 'react';
import axios from 'axios';
import { SummaryTextResponse } from '../types'

interface SummarizeTextProps {
    text: string;
}

const SummarizeText = ({ text }: SummarizeTextProps) => {

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [summary, setSummary] = useState<string>('');
    const [error, setError] = useState<string>('')

    const submitHandler = async (e: any) => {
        e.preventDefault();
        setIsLoading(true)

        const apiUrl = import.meta.env.VITE_API_URL;
        try {
            const res = await axios.post<SummaryTextResponse | null>(`${apiUrl}/process/text`, {
                text: text,
            });
            if (res.data) {
                setSummary(res.data.summary)
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
            <div className={`flex flex-col mt-2 border-t border-gray-300 pt-4`}>
                {
                    !summary ? <>
                        <span className="text-sm text-gray-500">Too long to read—mind summarizing it?</span>
                        <button onClick={submitHandler} disabled={isLoading} className='w-fit mt-4 inline-flex justify-center items-center gap-x-3 text-center bg-linear-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-hidden focus:from-violet-600 focus:to-blue-600 py-3 px-4'>
                            Show Summary
                            <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                        </button>
                    </> :
                        <>
                            <span className='block font-bold'>Summary</span>
                            {summary}
                        </>
                }
                {error && <span className='text-xs text-red-500'>{error}</span>}
            </div>
        </>
    )
}

export default SummarizeText;