    import { useState } from "react"
    import Colas from "./Colas"

    const initialData = [
        { name: "Alice", amount: 200 },
        { name: "Bob", amount: 150 },
        { name: "Charlie", amount: 300 },
        { name: "Diana", amount: 50 },
        { name: "Ethan", amount: 400 }
    ]

    const ATM = () => {
        const [name, setName] = useState("")
        const [amount, setAmount] = useState("")
        const [queue] = useState(new Colas())
        const [personas, setPersonas] = useState(initialData)

        const handleAdd = (e) => {
            e.preventDefault()
            if (!name.trim() || amount <= 0) return;
            const newPerson = {name, amount: Number(amount)}
            queue.enqueue(newPerson)
            setPersonas([...personas, newPerson])
            setName("")
            setAmount("")
        }

        return (
            <>
                <div>
                    <h1>Welcome to the ATM!</h1>
                    <form onSubmit={handleAdd}>
                    <input
                        placeholder="Name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <br />
                    <input
                        placeholder="Withdrawal Amount"
                        type="number"
                        required
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                        <br/>
                        <br/>
                        <button type="submit">Add</button>
                    </form>
                    <h1>Current Queue:</h1>
                    {
                        <ul>
                            {personas.map((person, idx) => (
                            <li key={idx}>
                                {person.name} - ${person.amount}
                            </li>
                            ))}
                        </ul>
                    }
                </div>
            </>
        )
    }

    export default ATM