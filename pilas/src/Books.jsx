import { useState } from "react";
import Stacks from "./Stacks";

const initialBooks = [
    { name: "The Quantum Paradox", ISBN: "978-1-23456-789-0", author: "Dr. Emily Carter", email: "emily.carter@mockbooks.com" },
    { name: "Artificial Minds", ISBN: "978-1-56789-012-3", author: "Prof. James Whitmore", email: "james.whitmore@mockbooks.com" },
    { name: "The Art of Code", ISBN: "978-1-89012-345-6", author: "Sarah Lin", email: "sarah.lin@mockbooks.com" },
    { name: "Deep Space Encounters", ISBN: "978-1-90123-456-7", author: "Dr. Michael Reynolds", email: "michael.reynolds@mockbooks.com" },
    { name: "Cybernetic Dreams", ISBN: "978-1-01234-567-8", author: "Laura Bennett", email: "laura.bennett@mockbooks.com" }
];


const Books = () => {
    const [name, setName] = useState("");
    const [isbn, setIsbn] = useState("");
    const [author, setAuthor] = useState("");
    const [email, setEmail] = useState("");
    const [stack] = useState(new Stacks());  
    const [books, setBooks] = useState(initialBooks);  

    const handleAdd = (e) => {
        e.preventDefault(); 
        const newBook = { name, ISBN: isbn, author, email };
        stack.push(newBook);  
        setBooks([...books, newBook]);  
        setName("");
        setIsbn("");
        setAuthor("");
        setEmail("");
    };

    

    return (
        <>
            <div>
                <h1>Add a book!</h1>
                <form onSubmit={handleAdd}>
                    <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required/>
                    <br />
                    <input placeholder="ISBN" value={isbn} onChange={(e) => setIsbn(e.target.value)} required/>
                    <br />
                    <input placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} required/>
                    <br />
                    <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    <br />
                    <br />
                    <button type="submit">Add!</button>
                </form>
                <h1>Current Books:</h1>
                <ul>
                    {books.map((book, idx) => (
                        <li key={idx}>
                            {book.name} - {book.ISBN} by {book.author} ({book.email})
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Books;
