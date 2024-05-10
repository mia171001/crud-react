import { useState } from 'react';

const initialState = 0;

export const Counter = () => {
    const [valueCounter, setValueCounter] = useState(initialState);

    const handleIncrement = () => {
        setValueCounter(valueCounter + 1);
    };

    const handleDecrement = () => {

        setValueCounter(valueCounter - 1);
    };

    const handleReset = () => {
        setValueCounter(initialState);
    }

    console.log('aaaa');

    return (
        <section>
            <h2>Counter APP : {valueCounter}</h2>

            <div>
                <button onClick={handleIncrement} type="button">
                    Incrementar
                </button>
                <button onClick={handleDecrement} type="button" disabled={valueCounter <= 0}>
                    Decrementar
                </button>
                <button onClick={handleReset} type='button'>
                    Resetear
                </button>
            </div>
        </section>
    );
};