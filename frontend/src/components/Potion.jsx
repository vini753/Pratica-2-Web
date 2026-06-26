import { IoTrashBinSharp } from "react-icons/io5";

export default function Potion(props) {
    function handleDelete() {
        props.deletePotion(props.id);
    }
    
    return (
        <div className="potion">
            <p className="name">{props.name}</p>
            <img src={props.photo} alt={props.name} />
            <p className="price">{props.price} moedas</p>
            <p className="description">{props.description}</p>
            {props.deletePotion && <IoTrashBinSharp size="5vh" color="purple" onClick={handleDelete}/>}
            {props.store && <button>Comprar</button>}
        </div>
    );
}