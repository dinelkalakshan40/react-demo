import './App.css'


function App() {
    const a = 30;

    const message = "Welcome to React with TypeScript"

    const getTotal =(num1:number,num2:number):number=>{
        return num1 + num2;
    }
    const total =getTotal(10,20)

    const person = {
        name : "Dinelka Lakshan",
        age : 25,
        address : "Panadura",
    }
    return (
        <>
            <h1 className="heading">React</h1>
            <p>{a}</p>
            <p>{message}</p>
            <h2>The Total is{total}</h2> <br/>
            <h3>Name : {person.name}</h3>
            <h3>Age : {person.age}</h3>
            <h3>Address : {person.address}</h3>
        </>
    )
}

export default App
