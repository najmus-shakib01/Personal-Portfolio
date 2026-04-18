import { useEffect, useState } from 'react'

const texts = [
    { text: "Hi, I'm Najmus Shakib", color: 'var(--black)' },
    { text: "I'm Backend Developer with Django", color: 'var(--teal)' },
    { text: "I'm Frontend Developer with React", color: 'var(--blue)' },
]

const TextChange = () => {
    const [currentText, setCurrentText] = useState('')
    const [endValue, setEndValue] = useState(0)
    const [isForward, setIsForward] = useState(true)
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const id = setInterval(() => {
            const full = texts[index].text
            setCurrentText(full.substring(0, endValue))

            if (isForward) {
                if (endValue < full.length) {
                    setEndValue(v => v + 1)
                } else {
                    setTimeout(() => setIsForward(false), 1200)
                }
            } else {
                if (endValue > 0) {
                    setEndValue(v => v - 1)
                } else {
                    setIsForward(true)
                    setIndex(v => (v + 1) % texts.length)
                }
            }
        }, 70)

        return () => clearInterval(id)
    }, [endValue, isForward, index])

    return (
        <span style={{ color: texts[index].color, transition: 'color 0.3s ease' }}>
            {currentText}
            <span
                style={{
                    display: 'inline-block',
                    width: '3px',
                    height: '1em',
                    background: 'currentColor',
                    marginLeft: '2px',
                    verticalAlign: 'text-bottom',
                    animation: 'blink 1s step-end infinite',
                }}
            />
        </span>
    )
}

export default TextChange;