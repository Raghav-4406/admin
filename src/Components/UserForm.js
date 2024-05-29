import React, { useState, useEffect } from 'react';
// import TextField from '@mui/material/TextField';

function UserForm() {
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        address: '',
        email: '',
        phone: ''
    });

    const [isDirty, setIsDirty] = useState(false);

    useEffect(() => {
        const handleBeforeUnload = (event) => {
            if (isDirty) {
                event.preventDefault();
                event.returnValue = 'You have unsaved changes, do you really want to leave?';
            }
        };
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => window.removeEventListener('beforeunload', handleBeforeUnload);
    }, [isDirty]);

    const generateUserId = () => `user-${Math.floor(Math.random() * 10000)}`;

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setIsDirty(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = { ...formData, id: generateUserId() };
        localStorage.setItem('user', JSON.stringify(userData));
        setIsDirty(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name: </label>
                <input type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange} required
                />
                {/* <TextField
                    id="outlined-password-input"
                    label="Name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange} required
                    // autoComplete="current-password"
                /> */}
            </div>
            <div>
                <label>Address: </label>
                <input type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Email: </label>
                <input type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Phone: </label>
                <input type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
            </div>
            <button style={{ backgroundColor: 'blue' }} type="submit">Submit</button>
        </form>
    );
}

export default UserForm;
