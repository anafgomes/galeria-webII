import { Link } from "react-router-dom"

export default function AlbumHomeLabel({card}){
    return(
        <Link className="p-4 border-2 border-gray-800 text-2xl hover:bg-gray-200" to={`/album/${card.id}`}>{card.title}</Link>
    )
}