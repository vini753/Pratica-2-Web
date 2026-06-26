import { useState } from "react";
import potionsApi from "../api/potions.api";

export default function PotionForm(props) {
    const [potionData, setPotionData] = useState({name: "", photo: "", description: "", price: 0});

    function handleSubmit(event) {
        event.preventDefault();
        potionsApi.postPotion(potionData).then( res => {
            if (res.status === 201) {
                props.addPotion(res.data);
                setPotionData({name: "", photo: "", description: "", price: 0});
            }
        })
    }

    function handleChange(event) {
        setPotionData({ ...potionData, [event.target.name]: event.target.value });
    }

    function priceHandleChange(event) {
        if (event.target.value === "") {
            setPotionData({ ...potionData, price: 0 });
        } else {
            setPotionData({ ...potionData, price: parseInt(event.target.value, 10) });
        }
    }

    return (
        <form id="potion-form" onSubmit={handleSubmit}>
            <div>
                <label>Nome</label>
                <input type="text" name="name" value={potionData.name} onChange={handleChange}/>
            </div>
            <div>
                <label>Foto</label>
                <input type="text" name="photo" value={potionData.photo} onChange={handleChange}/>
            </div>
            <div>
                <label>Preço</label>
                <input type="text" name="price" value={potionData.price} onChange={priceHandleChange}/>
            </div>
            <div>
                <label>Descrição</label>
                <textarea name="description" value={potionData.description} onChange={handleChange}></textarea>
            </div>

            <button type="submit">Adicionar</button>
        </form>
    );
}