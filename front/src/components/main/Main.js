import { Outlet, json, Link } from "react-router-dom"
import React from "react"




const Main = () => {

    return (
        <React.Fragment>
            <Link to="posts"> 게시글 작성 </Link>
            <main>
                <Outlet></Outlet>
            </main>

        </React.Fragment>


    )
}
export default Main