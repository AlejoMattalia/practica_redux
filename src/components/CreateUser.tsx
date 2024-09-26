import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/features/auth/userSlice';

export const CreateUser = () => {

    const dispatch = useDispatch();

    // Estado para los valores del formulario
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });

    // Manejar el cambio de los inputs
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Manejar el envío del formulario
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Evita la recarga de la página
        
        dispatch(addUser(formData));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                />

                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                />

                <button type="submit">Crear</button>
            </form>
        </div>
    );
};
