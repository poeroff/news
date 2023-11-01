
import React, { useState } from "react"
import axios from "axios";
const Getpost = () => {
    const init = {
        username: "",
        password: "",
        title: "",
        content: ""
    }

    const [formData, setformData] = useState(init)

    const changehandler = (event) => {
        const { name, value } = event.target;
        setformData({
            ...formData,
            [name]: value
        });

    }



    const sumbithandler = async () => {
       
        console.log(formData)

    
        try {
            const response = await fetch("http://localhost:4000/", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            

        } catch (err) {
            console.error(err);
        }
        setformData(init)

    }
    return (
        <form onSubmit={sumbithandler}>
            <div>
                <input type="text" name="username" placeholder="usename" value={formData.username} onChange={changehandler} /> username
            </div>
            <div>
                <input type="password" name="password" placeholder="password" value={formData.password} onChange={changehandler} /> password
            </div>
            <div>
                <input type="text" name="title" placeholder="title" value={formData.title} onChange={changehandler} /> title
            </div>
            <div>
                <input type="text" name="content" placeholder="content" value={formData.content} onChange={changehandler} /> content
            </div>
            <button type="submit"> SUBMIT </button>
        </form>
    )
}
export default Getpost;