import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import PhotoInfo from "../components/PhotoInfo";
import api from "../helpers/api";

const Photo = () => {
    const {id} = useParams()

    const [photo, setPhoto] = useState(false)

    async function getPhoto(){
        await api.get(`photos/${id}`).then(result=>setPhoto(result.data))
    }

    useEffect(()=>{
        getPhoto()
    },[])

    return (
        <div className="mt-4">
            <Link to={`/album/${photo.albumId}`} className=" px-4 py-2 bg-blue-200">{'< Voltar'}</Link>
            
            <PhotoInfo photo={photo}/>
        </div>
    )
}

export default Photo