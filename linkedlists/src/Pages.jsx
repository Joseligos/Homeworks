import { useState } from "react"
import {useNavigate} from 'react-router-dom'
import DoubleLinkedList from "./doublelist"

const Pages = () => {
    const pages = new DoubleLinkedList()

    const navigate = useNavigate()
    const back = () => {
        navigate("/", {replace:true})
    }
    
    pages.append("https://x.com")
    pages.append("https://reddit.com")
    pages.append("https://youtube.com")
    pages.append("https://4chan.org")
    pages.append("https://limbuscompany.wiki.gg")

    const [currentPage, setCurrentPage] = useState(pages.head)

    const nextPage = () =>{
        if(currentPage && currentPage.next){
            setCurrentPage(currentPage.next)
        }
        console.log(currentPage)
    }
    
    const previousPage = () => {
        if(currentPage && currentPage.prev){
            setCurrentPage(currentPage.prev)
        }
        console.log(currentPage)
    }
    return (
        <>
            <div>
                <h1>Page Browsing</h1>
                <p>{currentPage  ? currentPage.value : "no page"}</p>
                <button onClick={previousPage}>Previous Page</button>
                <button onClick={nextPage}>Next Page</button>
                <br/>
                <button onClick={back}>Página Songs</button>
            </div>
        </>
    )
}

export default Pages