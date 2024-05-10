export const Dog = ({ dog }) => {
    console.log(dog.name);
    return (
        <article>
            <ul>
                <li>Name: {dog.name}</li>
                <br />
                <li>Temperamento: {dog.temperament.map((listTemp) => (
                    <div key={dog.id + listTemp}>{listTemp}</div>
                ))}</li>
            </ul>
        </article>
    );
};


