import Potion from "./Potion.jsx";
import potionsApi from "../api/potions.api.js";
import { useEffect, useState } from "react";
import PotionForm from "./PotionForm.jsx";
import "./Potion.css";


export default function PotionAdmin() {
    const [potions, setPotions] = useState([]);

    useEffect(() => {
        potionsApi.getPotions().then( res => {
            if (res.status === 200) {
                setPotions(res.data);
            }
        })
    }, []);

    function deletePotion(id) {
        potionsApi.deletePotion(id).then( res => {
            if (res.status === 200) {
                const list = potions.filter( p => p.id != id );
                setPotions(list);
            }
        });
    }

    function addPotion(potion) {
        setPotions([...potions, potion]);
    }

    return (
        <div className="potion-admin">
            <h1>Poções</h1>

            <div className="potion-list">
                { potions.map(potion => {
                    return (
                        <Potion
                            key={potion.id}
                            id={potion.id}
                            name={potion.name}
                            photo={potion.photo}
                            price={potion.price}
                            description={potion.description}
                            deletePotion={deletePotion}
                        />
                    )
                })
                }
            </div>

            <h1>Adicionar poção</h1>
            <PotionForm addPotion={addPotion}/>

        </div>
    )
}