import { useState } from "react"

export default function Menu(){
    const [coffees, setCoffees] = useState()
    const getCoffees = (temp) => {
        fetch(`https://api.sampleapis.com/coffee/${temp}`)
        .then( res => res.json())
        .then(setCoffees)
        .catch(alert)
    }
    return (
        <article>
        <div>
            <button onClick={() => getCoffees('hot')} >Iced Coffees</button>
            <button onClick={() => getCoffees('iced')} >Hot Coffees</button>
        </div>
        {!coffees
            ? <h2>Welcome to the Beach</h2>
            : <ul>
                {coffees.map(coffee => (
                    <li key={coffee.id}>{coffee.title}</li>
                ))}
            </ul>
            }
        </article>
    )
}