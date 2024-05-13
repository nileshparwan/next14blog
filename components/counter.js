'use client';
import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    setTimeout(() => setCount(count + 1), 1000);

    return (
        <div>
            The count is {count}
        </div>
    );
};

export default Counter;