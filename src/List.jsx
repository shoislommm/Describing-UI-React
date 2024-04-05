import { people } from "./data/people";
import { getImageUrl } from "./data/utils.js";

export default function List() {
    const listItems = people.map(person => 
        <li key={person.id}>
            <img
                src={getImageUrl(person)}
                alt={person.name}
            />
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </li>
    )
    return <ul>{listItems}</ul>
}