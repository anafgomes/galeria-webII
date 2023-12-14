import AlbumHomeLabel from "./AlbumHomeLabel"
export default function AlbunsHomeContainer({albuns}){
 
    return(
        <div className="flex flex-col w-[90%] m-auto">
            {albuns.map((card, key)=>(
                <AlbumHomeLabel key={key+1} card={card}/>
            ))}
        </div>
    )
}