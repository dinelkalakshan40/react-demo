import React, { useReducer } from "react";
import "./App.css"; // Import the CSS file


const reducer = (
    state: {
        id: string;
        name: string;
        city: string;
        position: string;
        students: { id: string; name: string; city: string; position: string }[];
    },
    action: { type: string; field?: string; value?: string }
) => {
    switch (action.type) {
        case "SET_INPUT":
            return {
                ...state,
                [action.field!]: action.value!,
            };
        case "ADD_STUDENT":
            return {
                ...state,
                students: [
                    ...state.students,
                    {
                        id: state.id,
                        name: state.name,
                        city: state.city,
                        position: state.position,
                    },
                ],
                id: "",
                name: "",
                city: "",
                position: "",
            };
        default:
            return state;
    }
};

// Initial state
const initialState = {
    id: "",
    name: "",
    city: "",
    position: "",
    students: [] as { id: string; name: string; city: string; position: string }[],
};

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: "SET_INPUT",
            field: e.target.name,
            value: e.target.value,
        });
    };

    const handleAddStudent = () => {
        dispatch({ type: "ADD_STUDENT" });
    };

    return (
        <div className="app-container">
            <h1>Student Registration</h1>
            <div className="form-group">
                <input
                    type="text"
                    name="id"
                    value={state.id}
                    onChange={handleChange}
                    placeholder="Enter ID"
                    className="input-field"
                />
                <input
                    type="text"
                    name="name"
                    value={state.name}
                    onChange={handleChange}
                    placeholder="Enter Name"
                    className="input-field"
                />
                <input
                    type="text"
                    name="city"
                    value={state.city}
                    onChange={handleChange}
                    placeholder="Enter City"
                    className="input-field"
                />
                <input
                    type="text"
                    name="position"
                    value={state.position}
                    onChange={handleChange}
                    placeholder="Enter Position"
                    className="input-field"
                />
                <button onClick={handleAddStudent} className="add-button">
                    ADD Student
                </button>
            </div>

            <div className="students-list">
                <h2>Registered Students</h2>
                <ul>
                    {state.students.map((student, index) => (
                        <li key={index}>
                            {`ID: ${student.id}, Name: ${student.name}, City: ${student.city}, Position: ${student.position}`}
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
};

export default App;
