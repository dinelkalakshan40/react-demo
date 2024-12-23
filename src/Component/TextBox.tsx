import "./TextBoxStyle.css"

type props = {
    name: string;
    id: string;
    address: string;
};
function TextBox({ name, id, address }:props){
    return(
        <div className="textBox">
            Student name: {name}, Id: {id}, Address: {address}
        </div>
    )
}
export default TextBox;