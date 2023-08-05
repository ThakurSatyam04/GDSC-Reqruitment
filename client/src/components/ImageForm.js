import React, { useState } from 'react';
import axios from 'axios';
import { APIURL } from '../env';
import { useNavigate,useParams } from 'react-router-dom';

const ImageForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();
  const { _id } = useParams();

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      console.error('Please select an image.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('image', selectedFile);
      await axios.put(`${APIURL}/api/card/upload-image/${_id}`, formData);
      console.log('Image uploaded successfully.');
      navigate('/eventPage')
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button type="submit">Upload</button>
    </form>
  );
};

export default ImageForm;
