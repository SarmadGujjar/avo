"use client"

// components/AutoCounter.tsx
import React, { useState, useEffect } from 'react';

const AutoCounter: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    const maxCount = 400;

    useEffect(() => {
        // Set up an interval to increment the count every second
        const intervalId = setInterval(() => {
            setCount(prevCount => {
                if (prevCount >= maxCount) {
                    clearInterval(intervalId); // Stop the interval when maxCount is reached
                    return maxCount;
                }
                return prevCount + 1;
            });
        }, 10);

        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="flex flex-col items-center mt-10">
            <p className="text-3xl gap-2 flex font-bold pl-8 mb-4"> {count} <i className='h-10 w-2 flex bg-red-500 rounded-lg'></i></p>
            <span className='w-36 text-end'>More than a hundred successful projects</span>
        </div>
    );
}

export default AutoCounter;
