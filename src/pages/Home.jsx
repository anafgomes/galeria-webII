import { useEffect, useState } from "react"
import api from "../helpers/api"
import AlbunsHomeContainer from "../components/AlbunsHomeContainer"

export default function Home(){
    const [albuns, setAlbuns] = useState([])

    async function getAlbuns(){
        await api.get('albums').then(response => setAlbuns(response.data))
    }

    useEffect(()=>{
        getAlbuns()
    }, [])

    if(!albuns) return
    return(
        <div>
            <div className="w-full mt-4">
                <AlbunsHomeContainer albuns={albuns} itemsPerPage={10}/>
            </div>
        </div>
    )
}