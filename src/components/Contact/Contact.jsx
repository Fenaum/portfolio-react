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
        console.log(formState);
        // Here you can handle the form submission. For example, send the form data to a server
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
            <input type="submit" value="SUBMIT" className="submit-btn"/>
        </form>
    );
}
