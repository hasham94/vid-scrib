import { useState } from 'react'
import { languages } from "../models/languages";
import { Language } from "../types/"

interface SelectLanguageProps {
    setTargetLanguage: (code: string) => void
}

const SelectLanguage = ({ setTargetLanguage }: SelectLanguageProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(null);

    const handleLanguageSelect = (language: Language) => {
        setSelectedLanguage(language);
        setTargetLanguage(language.code);
        setIsOpen(false);
    };

    return (
        <div className="relative inline-flex z-50">
            <span
                className="inline-flex divide-x divide-gray-300 overflow-hidden rounded border border-gray-300 bg-white shadow-sm "
            >
                <button
                    type="button"
                    className="w-45 px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:relative"
                >
                    Translate To {(selectedLanguage?.name && selectedLanguage?.code !== 'auto') ? selectedLanguage?.name : ''}
                </button>

                <button
                    type="button"
                    className="px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:relative"
                    aria-label="Menu"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-4"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </button>
            </span>

            {
                isOpen && <div
                    role="menu"
                    className="absolute end-0 top-12 z-auto w-56 divide-y divide-gray-200 overflow-y-auto max-h-60 rounded border border-gray-300 bg-white shadow-sm"
                >
                    {
                        languages.map((item: Language) => (
                            <span
                                key={item.code}
                                className="block px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 cursor-pointer"
                                role="menuitem"
                                onClick={() => handleLanguageSelect(item)}
                            >
                                {item.name}
                            </span>
                        ))
                    }
                </div>
            }
        </div>
    )
}

export default SelectLanguage