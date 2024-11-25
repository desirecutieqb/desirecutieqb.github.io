import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={increment}>Increment</button>
        </div>
    );
};

export default Counter;

/* wersja nieprawidłowa 
import React from 'react';

const Counter = () => {
    let count = 0;

    const increment = () => {
        count += 1; // To nie zaktualizuje stanu komponentu
        console.log(count);
    };

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={increment}>Increment</button>
        </div>
    );
};

export default Counter;
*/
