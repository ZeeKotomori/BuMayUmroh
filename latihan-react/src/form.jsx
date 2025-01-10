import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Form() {
    const [text, setText] = useState('');
    const [button, setButton] = useState(false);

    useEffect(() => {
        console.log("Halo Faisal");
    }, [button])

    return (
        <>
            <form>
                <input value={text} onChange={(e) => setText(e.target.value)} />
            </form>
            <p>{text}</p>
            <button onClick={() => setButton(true)}>Munculkan Faisal</button>
        </>
    )
}