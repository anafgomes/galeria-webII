import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import api from '../helpers/api.js'

export default function Album(){

    const [album, setAlbum] = useState(false)
    const [albumImages, setAlbumImages] = useState(false)

    const {id} = useParams()
    async function getAlbum(){
        await api.get(`albums/${id}`).then(response=>setAlbum(response.data))
    }

    async function getAlbumImages(){
        await api.get(`albums/${id}/photos`).then(response=>setAlbumImages(response.data))
    }

    useEffect(()=>{
        getAlbum()
        getAlbumImages()
    }, [])

    return(
        <div className="mt-4">
            <Link to="/" className=" px-4 py-2 bg-blue-200">{'< Voltar'}</Link>

            {album && (
                <>
                    <h1 className="ml-10 text-2xl font-bold py-4">{album.title}</h1>
                    {albumImages && (
                        <div className="w-[80%] flex flex-wrap justify-center m-auto gap-4">
                            {albumImages.map((image, index)=>(
                                <Link key={index+1} className="h-40 w-40 flex flex-col justify-between border-2 border-gray-800 p-2 hover:bg-gray-200" to={`/photo/${image.id}`}>
                                    <img className="w-full h-full" src={image.thumbnailUrl}></img>
                                </Link>
                            ))}
                        </div>
                    )}
                </>
            )}
        </div>
    )
}