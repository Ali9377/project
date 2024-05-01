import { useState } from "react"
function Button() {
    // The current count
    const [count, setCount] = useState<number>(0);

    function increment() {
        setCount((prevCount) => prevCount + 1);
    }

    return (
        <>
            <button onClick={increment}>+</button>
            {count}
        </>
    );
}

export default Button