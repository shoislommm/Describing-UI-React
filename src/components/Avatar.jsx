import { getImageUrl } from "../data/utils"

export default function Avatar({ person, size }) {
    let letter = 's'
    if (size < 90) {
        letter = 'b'
    }
    return (
        <img
            className="avatar"
            src={getImageUrl(person, letter)}
            alt={person.name}
            width={size}
            height={size}
        />
    )
}