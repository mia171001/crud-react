export const Dog = ({ dog }) => {
    console.log(dog.name);
    return (
        <article>
            <ul>
                <li>{dog.name}</li>

            </ul>
        </article>
    );
};


