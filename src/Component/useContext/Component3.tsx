import { useContext } from "react";
import { myName } from "../../App.tsx";

function Component3() {
    const { setUserName } = useContext(myName) as { setUserName: (value: string) => void };


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value); // Update username from input
    };

    return (
        <div>
            Third
            <br />
            <input type="text" onChange={handleChange} />
        </div>
    );
}

export default Component3;
