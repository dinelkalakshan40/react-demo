import "./TextBoxStyle.css"

type props = {
    name: string;
    id: string;
    address: string;
    children?: React.ReactNode;
};
function TextBox({ name, id, address,children }:props){
    return(
        <div className="textBox">
            Student name: {name}, Id: {id}, Address: {address}

            {children && <div className="description">{children}</div>}
        </div>
    )
}
export default TextBox;