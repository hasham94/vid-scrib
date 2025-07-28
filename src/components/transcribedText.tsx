interface TranscribedTextProps {
    text: string
}

const TranscribedText = ({ text }: TranscribedTextProps) => {
    return (
        <>{text}</>
    )
}

export default TranscribedText