import './App.css'


function App() {
    const a = 30;

    const message = "Welcome to React with TypeScript"

    const getTotal =(num1:number,num2:number):number=>{
        return num1 + num2;
    }
    const total =getTotal(10,20)

    return (
        <>
            <h1 className="heading">React</h1>
            <p>{a}</p>
            <p>{message}</p>
            <h2>the Total is{total}</h2>
        </>
    )
}

export default App
