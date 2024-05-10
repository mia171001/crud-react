import { useState } from 'react';

const initialState = 0;

export const Counter = () => {
    const [valueCounter, setValueCounter] = useState(initialState);

    const handleIncrement = () => {
        setValueCounter(valueCounter + 1);
    };

    const handleDecrement = () => {
        valueCounter <= 0 ?
            alert('No puede decrementar porque no se aceptan numeros negativos') :
            setValueCounter(valueCounter - 1);
    };

    const handleReset = () => {
        setValueCounter(initialState);
    }

    return (
        <section>
            <h2>Counter APP : {valueCounter}</h2>

            <div>
                <button onClick={handleIncrement} type="button">
                    Incrementar
                </button>
                <button onClick={handleDecrement} type="button">
                    Decrementar
                </button>
                <button onClick={handleReset} type='button'>
                    Resetear
                </button>
            </div>
        </section>
    );
};