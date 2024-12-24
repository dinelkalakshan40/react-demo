import {useRef} from "react";


function App() {

    // Define the ref with type HTMLInputElement or null
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleClick = () => {
        // Check if the ref is not null
        if (inputRef.current) {
            const value = inputRef.current.value;

            if (value === "") {
                inputRef.current.focus();
            } else if (Number(value) > 50) {
                alert("Success");
            } else {
                alert("Error");
            }
        }
    };

    return (
        <>
            <input type="text" ref={inputRef} placeholder="Enter a number"/>
            <button onClick={handleClick}>Validate</button>
        </>
    );
}

export default App;
