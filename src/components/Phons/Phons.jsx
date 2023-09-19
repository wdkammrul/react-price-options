import axios from "axios";
import { useEffect, useState } from "react";

const Phons = () => {
    // step-1 Phons
    const [phons, setPhons] = useState([])
 
    // step-2 এটা আমরা fetch দিয়ে করতাম আগে ।
    useEffect(() =>{
        // fetch('https://jsonplaceholder.typicode.com/todos')
        // .then(res => res.json())
        // .then(data => setPhons(data))

        // step-2 এখন আমরা axios দিয়ে সেইম কাজ করবো ।
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(data => setPhons(data.data))

    })

    return (
        <div>
            {/* step-3  */}
            <h1 className="text-5xl"> Phons: {phons.length}</h1>
        </div>
    );
};

export default Phons;