import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"



function CreateBlogPostMuseum() {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()

        const newPost = {
            "title": title,
            "description": description,
        }

        axios.post("https://parisguideproject-default-rtdb.europe-west1.firebasedatabase.app/museumgallery.json", newPost)
            .then(() => {
                navigate("/Museums")
            })
            .catch(e => console.log("Error creating a new project...", e));
    }


    return (
        <div className="CreateBlogPostMuseum">
            
            <h3>Add Museum Or Gallery</h3>

            <form onSubmit={handleSubmit}>

                <label>
                    Title:
                    <input
                        type="text"
                        name="title"
                        placeholder="enter the title"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </label>

                <label>
                    Description:
                    <input
                        type="text"
                        name="description"
                        placeholder="enter the description"
                        value={description}
                        onChange={(e) => { setDescription(e.target.value) }}
                    />
                </label>

                <button>Create</button>

            </form>
        </div>
    )
}

export default CreateBlogPostMuseum