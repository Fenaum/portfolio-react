import { useState } from "react";
import "./Contact.css"

export default function Contact() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (event) => {
        
        setFormState({
            ...formState,
            [event.target.name]: event.target.value,
        });
        console.log(formState);
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();

        // function to check for valid email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formState.email)) {
            alert("Please enter a valid email address");
            return;
        }

            // function to check if name is not empty
        if (formState.name.trim() === "") {
            alert("Please enter your name");
            return;
        }

        // function to check if message is not empty
        if (formState.message.trim() === "") {
            alert("Please enter a message");
            return;
        }

        console.log('Succesfully Submitted');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label className="fields">
                Name:
                <input
                type="text"
                name="name"
                value={formState.name}
                onChange={handleChange}
                />
            </label>
            <label className="fields">
                Email:
                <input
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
            />
            </label>
            <label className="fields">
                Message:
                <textarea
                name="message"
                value={formState.message}
                onChange={handleChange}
                />
            </label>
            <input type="submit" value="SUBMIT" className="submit-btn" onSubmit={handleSubmit}/>
        </form>
    );
}
