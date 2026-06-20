import { useEffect, useState } from "react";
import potionsApi from "../api/potions.api.js";
import Potion from "./Potion.jsx";


export default function PotionStore() {
    const [potions, setPotions] = useState([]);

    useEffect(() => {
        potionsApi.getPotions().then( res => {
            if (res.status === 200) {
                setPotions(res.data);
            }
        })
    }, []);

    return (
        <div className="potion-stor">
            <h1>Poções</h1>

            { potions.map(potion => {
                return (
                    <Potion
                        key={potion.id}
                        id={potion.id}
                        name={potion.name}
                        photo={potion.photo}
                        price={potion.price}
                        description={potion.description}
                        store={true}
                    />
                )
            })
            }
        </div>
    )
}