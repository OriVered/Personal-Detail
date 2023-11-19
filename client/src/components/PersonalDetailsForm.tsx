//src/components/PersonalDetailsForm.tsx
import React, { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../constants';

/**
 * Component for collecting personal details through a form.
 * @component
 */
const PersonalDetailsForm: React.FC = () => {
    /**
     * State to manage form data.
     * @type {Object}
     * @property {string} firstName - First name input value.
     * @property {string} lastName - Last name input value.
     * @property {string} email - Email input value.
     */
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
    });

    /**
     * Handles input change for form fields.
     * @param {React.ChangeEvent<HTMLInputElement>} e - The input change event.
     */
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    /**
     * Submits the form data.
     * @param {React.FormEvent<HTMLFormElement>} e - The form submission event.
     */
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await axios.post(API_URL, formData);
            alert('Personal details submitted successfully!');
            // Clear the form after successful submission
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
            });
        } catch (error) {
            console.error('Error submitting personal details:', error);
            alert('An error occurred while submitting personal details');
        }
    };

    return (
        <div className="form-container">
            <h2>Fill Personal Details</h2>
            <form onSubmit={handleSubmit} className="form">
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    );
};

export default PersonalDetailsForm;
