import LinkedList from "./linkedlist"
import { useState } from "react"
import {useNavigate} from 'react-router-dom'

const Songs = () => {
    const playlist = new LinkedList()

    const navigate = useNavigate()
    const sig = () => {
        navigate("/Pages", {replace:true})
    }

     const songs = [
        "Mili - Ocean Bby",
        "NAOKI - The Gravity",
        "Studio EIM - Audite Pauper, Vovete Miserias",
        "稲葉曇 - Ipace",
        "Mili - RTRT"
     ]

     songs.forEach(song => playlist.append(song))

    const [currentSong, setCurrentSong] = useState(playlist.head)

    const playNext = () =>{
        if(currentSong && currentSong.next){
            setCurrentSong(currentSong.next)
        }
        console.log(currentSong)
    }


     return (
        <>
            <div>
                <h1>Playlist</h1>
                <p>Now playing: {currentSong ? currentSong.value : "No song playing"}</p>
                <button onClick={playNext}>Next</button>
                <br/>
                <button onClick={sig}>Página Pages</button>
            </div>
        </>
     )
}

export default Songs