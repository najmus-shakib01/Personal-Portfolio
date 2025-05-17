import { useEffect, useState } from "react";

const texts = ["Hi, I'm Najmus Shakib", "Hi, I'm Najmus Shakib", "Hi, I'm Najmus Shakib"];

const TextChange = () => {
    const [currentText, setCurrentText] = useState("");
    const [endValue, setEndValue] = useState(0);
    const [isForward, setIsForward] = useState(true);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentText(texts[index].substring(0, endValue));

            if (isForward) {
                setEndValue((prev) => prev + 1);
            } else {
                setEndValue((prev) => prev - 1);
            }

            if (endValue > texts[index].length + 20) {
                setIsForward(false);
            }

            if (endValue < 2.2) {
                setIsForward(true);
                setIndex((prev) => (prev + 1) % texts.length);
            }
        }, 50);

        return () => clearInterval(intervalId);
    }, [endValue, isForward, index]);

    return (
        <div className="color-design">
            {currentText}
        </div>
    );
};

export default TextChange;