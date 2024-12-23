import './App.css'
import Component from "./Component/Component.tsx";
import TextBox from "./Component/TextBox.tsx";


function App() {

    return (
        <>
            <Component/> {/*use componnent*/}
            <TextBox name="Dinelka" id="S001" address="Panadura"/>
            <TextBox name="Lakshan" id="S002" address="Galee"/>
            <TextBox name="Perera" id="S003" address="Colombo"/>

        </>
    )
}

export default App
