import React, { useState } from 'react'

const ContactForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [request, setRequest] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({name, email, request});
    }

    return ( 
        
        <form onSubmit={handleSubmit}>

            <label for="name">Enter your name:</label>
            <input 
                id="name"
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <label for="name">Enter your email:</label>
            <input 
                id="email"
                type="text" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <label for="name">Enter your request:</label>
            <textarea 
                id="request"
                type="text" 
                value={request}
                onChange={(e) => setRequest(e.target.value)}
            />

            <input type="submit" />

        </form>
     );
}
 
export default ContactForm;