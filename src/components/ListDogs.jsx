import { useState } from 'react';
import { Dog } from './Dog';

const initialState = [
    {
        id: 'dog-1',
        name: 'Poodle',
        temperament: ['Intelligent',
            'Active',
            'Alert',
            'Faithful',
            'Trainable',
            'Instinctual',
        ],
    }, {
        id: 'dog-2',
        name: 'Bernese Mountain Dog',
        temperament: ['Affectionate', 'Intelligent', 'Loyal', 'Faithful'],
    }, {
        id: 'dog-3',
        name: 'Labrador Retriever',
        temperament: ['Intelligent',
            'Even Tempered',
            'Kind',
            'Agile',
            'Outgoing',
            'Trusting',
            'Gentle',
        ],
    },
];

export const ListDogs = () => {
    const [dogs, setDogs] = useState(initialState);

    return (
        <section>
            <h2>Lista de Perritos</h2>

            {dogs.map((dog) => (
                <div key={dog.id}>
                    <Dog dog={dog} />
                </div>
            ))}
        </section>
    );
};