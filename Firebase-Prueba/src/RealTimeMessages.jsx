import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fethFirebaseData, addDataToFirebase } from "./store/slices/firebaseThunk";

const RealTimeMessages = () => {
    const dispatch = useDispatch();
    const { data: messages, loading } = useSelector((state) => state.firebase);
    const [messageText, setMessageText] = useState("");

    useEffect(() => {
        dispatch(fethFirebaseData());
    }, [dispatch]);

    const handleSendMessage = () => {
        if (messageText.trim()) {
            const newMessage = {
                text: messageText,
            };
            dispatch(addDataToFirebase(newMessage));
            setMessageText("");
        }
    };

    return (
        <div>
            <h2>Mensajes en tiempo real</h2>
            <div>
                <input
                    type="text"
                    placeholder="Escribe un mensaje..."
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                />
                <br/>
                <br/>
                <button onClick={handleSendMessage}>Enviar</button>
            </div>
            <hr/>
            <h2>Aquí puedes ver los mensajes enviados:</h2>
            {loading ? (
                <p>Cargando mensajes...</p>
            ) : (
                <div>
                    {messages.map((msg, index) => (
                        <p key={index}>
                            {msg.text} 
                        </p>
                    ))}
                </div>
            )}
        </div>
    );
};

export default RealTimeMessages;
