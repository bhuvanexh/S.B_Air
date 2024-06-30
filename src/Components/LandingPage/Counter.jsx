import { animate } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { FaPlus } from "react-icons/fa";

function Counter({ from, to, isInView, unit }) {
    const [formattedNumber, setFormattedNumber] = useState("");

    useEffect(() => {
        if (isInView) {
            const controls = animate(from, to, {
                duration: 1.5,
                onUpdate(value) {
                    const formattedValue = value.toFixed(0); // Remove decimals
                    console.log(value, 'value');
                    setFormattedNumber(formattedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",")); // Add commas
                },
            });

            return () => controls.stop();
        }
    }, [from, to, isInView]);

    return (
        <div className="flex h-full">
            <p className="text-9xl  poppins-bold text-slate-900">{formattedNumber}</p>
            <div className="flex flex-col justify-between py-4">
                <span>
                    <FaPlus fill="red" />
                </span>
                {unit &&
                    <span>
                        {unit}
                    </span>
                }
            </div>
        </div>
    )
}

export default Counter;
