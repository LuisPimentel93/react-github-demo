import { useState } from "react"


function Input({ setUserData }){
    const [ username, setUserName] = useState('')

    const handleChange = (e) =>{
            setUserName(e.target.value)
    }

    const handleSumbit = async(e) =>{
        e.preventDefault()
        const res = await fetch(`https://api.github.com/users/${username}`)
        const data = await res.json()
        setUserData(data)
        setUserName('')
        
    }
    const clear = () =>{
        setUserData(undefined)
        setUserName('')
    } 
    return(
        <div>
            <form onSubmit={handleSumbit}>
                <input value={username} onChange={handleChange} placeholder="username" />
                <input type="submit"/>
            </form>
            <button onClick={clear}>Clear</button>
        </div>
    )
}

export default Input