import React from 'react';

const CertificateComponent = ({ formData, setFormData }) => {
    const handleAddCertificate = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.multiple = true;
        input.onchange = (e) => {
            setFormData(prevState => ({
                ...prevState,
                certificates: [...prevState.certificates, ...e.target.files],
            }));
        };
        input.click();
    };

    const handleCancelCertificate = () => {
        setFormData(prevState => ({
            ...prevState,
            certificates: [],
        }));
    };

    return (
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
    );
};

export default CertificateComponent;
