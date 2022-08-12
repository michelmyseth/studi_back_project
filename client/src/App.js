import React, { useState } from "react";

function App() {
    const [msg, setMsg] = useState();
    const handleClick = async () => {
        const data = await fetch("/api");
        const json = await data.json();
        console.log(json);
        const msg = json.users;
        setMsg(msg);
    };
    return (
        <div>
            <button onClick={handleClick}>hi</button>
            <p>{msg}</p>
            <p>sada</p>
        </div>
    );
}

export default App;
