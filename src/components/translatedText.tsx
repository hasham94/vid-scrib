interface TranslatedTextProps {
    text: string
}

const TranslatedText = ({ text }: TranslatedTextProps) => {
    return (
        <div className="border border-gray-200 rounded-2xl p-4 max-h-80 overflow-y-auto flex flex-col gap-3">
            <h2 className="text-lg font-semibold">Translated Text</h2>
            <span>{text}</span>
        </div>
    )
}

export default TranslatedText