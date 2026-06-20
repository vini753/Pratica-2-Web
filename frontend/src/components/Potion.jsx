import { IoTrashBinSharp } from "react-icons/io5";

export default function Potion(props) {
    function handleDelete() {
        props.deletePotion(props.id);
    }
    
    return (
        <div className="potion">
            <p>{props.name}</p>
            <img src={props.photo} alt={props.name} />
            <p>{props.price}</p>
            <p>{props.description}</p>
            {props.deletePotion && <IoTrashBinSharp onClick={handleDelete}/>}
            {props.store && <button>Comprar</button>}
        </div>
    );
}