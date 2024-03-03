import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';

export default function CreateProfile() {
    const navigate = useNavigate();
    

    const [formData, setFormData] = useState({
        userImage: '',
        fullName: '',
        bio: '',
        certificates: [],
        skills: [],
    });

    const [newSkill, setNewSkill] = useState('');
    const [addedSkills, setAddedSkills] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Prepare form data
        const data = new FormData();
        for (const key in formData) {
            if (key === 'certificates' || key === 'skills') {
                formData[key].forEach((item, index) => {
                    data.append(`${key}[${index}]`, item);
                });
            } else {
                data.append(key, formData[key]);
            }
        }
    
        // Send POST request
        try {
            const response = await axios.post('http://localhost:4000/api/v1/user/createProfile', data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
    
            if (response.status === 200) {
                navigate('/profile');
            } else {
                // Handle error
                console.error('Error creating profile:', response);
            }
        } catch (error) {
            // Handle error
            console.error('Error creating profile:', error);
        }
    };

    const handleCancelCertificate = () => {
        setFormData((prevState) => ({
            ...prevState,
            certificates: [],
        }));
    };

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'userImage' && files[0]) {
            setFormData((prevState) => ({
                ...prevState,
                userImage: files[0],
            }));
        } else if (name === 'certificates' && files) {
            const certificateImages = Array.from(files);
            setFormData((prevState) => ({
                ...prevState,
                certificates: certificateImages,
            }));
        } else {
            setFormData((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        }
    };

    const handleAddCertificate = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.multiple = true;
        input.onchange = (e) => {
            setFormData((prevState) => ({
                ...prevState,
                certificates: [...prevState.certificates, ...e.target.files],
            }));
        };
        input.click();
    };

    const handleAddSkill = () => {
        if (newSkill.trim() !== '') {
            setAddedSkills([...addedSkills, newSkill]);
            setNewSkill('');
        }
    };

    const handleCancelSkill = (skillToRemove) => {
        const updatedSkills = addedSkills.filter(skill => skill !== skillToRemove);
        setAddedSkills(updatedSkills);
    };

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold mb-4">Create Your Portfolio</h1>
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                    <div className="flex justify-center items-center mb-4">
                        <div className="relative w-64 h-64 rounded-full overflow-hidden">
                            <input
                                type="file"
                                name="userImage"
                                onChange={handleChange}
                                className="absolute inset-0 w-full h-full opacity-0"
                            />
                            {formData.userImage ? (
                                <img
                                    src={URL.createObjectURL(formData.userImage)}
                                    className="object-cover w-full h-full"
                                    style={{ objectFit: "cover" }}
                                />
                            ) : (
                                <div className="w-full h-full bg-gray-200 flex justify-center items-center">
                                    <p className="text-gray-400 text-lg">Upload Image</p>
                                </div>
                            )}
                        </div>
                    </div>
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Full Name"
                        className="w-full mb-4 p-2 border border-gray-300 rounded"
                    />
                    <textarea
                        name="bio"
                        value={formData.bio}
                        onChange={handleChange}
                        placeholder="Bio"
                        className="w-full mb-4 p-2 border border-gray-300 rounded"
                    />
                    <div className="mb-4">
                        <label htmlFor="skills" className="block text-gray-700 font-bold mb-2">Skills</label>
                        <div className="flex items-center">
                            <input
                                type="text"
                                id="skills"
                                name="skills"
                                value={newSkill}
                                onChange={(e) => setNewSkill(e.target.value)}
                                placeholder="Add Skill"
                                className="w-full p-2 border border-gray-300 rounded mr-2"
                            />
                            <button
                                type="button"
                                onClick={handleAddSkill}
                                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                            >
                                Add Skill
                            </button>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {addedSkills.map((skill, index) => (
                                <div key={index} className="bg-gray-200 rounded-full px-3 py-1 flex items-center">
                                    <span className="mr-1">{skill}</span>
                                    <button
                                        type="button"
                                        onClick={() => handleCancelSkill(skill)}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        &times;
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="certificates" className="block text-gray-700 font-bold mb-2">Certificates</label>
                        <div className="flex flex-wrap gap-2">
                            {formData.certificates.map((certificate, index) => (
                                <p key={index}>{certificate.name}</p>
                            ))}
                        </div>
                        <button type="button" onClick={handleAddCertificate} className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Add Certificate</button>
                        {formData.certificates.length > 0 && (
                            <button type="button" onClick={handleCancelCertificate} className="mt-2 ml-2 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">Cancel Certificates</button>
                        )}
                    </div>
                    <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Create Portfolio</button>
                </form>
            </div>
        </motion.div>
    );
}
