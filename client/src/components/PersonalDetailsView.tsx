//src/components/PersonalDetailsView.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../constants';

/**
 * Personal Detail Model interface
 * @interface
 */
interface PersonalDetail {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
}

/**
 * Component for displaying a list of personal details.
 * @component
 */
const PersonalDetailsView: React.FC = () => {
    /**
     * State to store personal details fetched from the API.
     * @type {Array<PersonalDetail>}
     */
    const [personalDetails, setPersonalDetails] = useState<PersonalDetail[]>([]);

    /**
     * State to manage error message if fetching data fails.
     * @type {string}
     */
    const [error, setError] = useState<string>('');

    /**
     * Fetches personal details data from the API when the component mounts.
     */
    useEffect(() => {
        const fetchPersonalDetails = async () => {
            try {
                const response = await axios.get<PersonalDetail[]>(API_URL);
                setPersonalDetails(response.data);
            } catch (error) {
                console.error('Error fetching personal details:', error);
                setError('Failed to fetch personal details. Please try again.');
            }
        };

        fetchPersonalDetails();
    }, []);

    return (
        <div className="view-container">
            <h2>Personal Details</h2>
            {error && <div className="error-message">{error}</div>}
            <ul className="details-list">
                {personalDetails.map((detail) => (
                    <li key={detail.id} className="detail-item">
                        <div>
                            <strong>Name:</strong> {detail.firstName} {detail.lastName}
                        </div>
                        <div>
                            <strong>Email:</strong> {detail.email}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PersonalDetailsView;
