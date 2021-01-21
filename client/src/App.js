import React, { useState } from 'react';
import { Image } from 'cloudinary-react';
import './App.css';
import { upload } from './utils/API';

const App = () => {
  const [image, setImage] = useState("foo/v64ml1iqiztbmvx7vqtx");
  const handleChange = (e) => {
    uploadImage(e.target.files[0]);
  }

  const uploadImage = async (file) => {
    const { data: image } = await upload(file);
    setImage(image);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Image cloudName="jumpsacademy" publicId={image} secure="true" width="300" crop="scale" />
        <p>
          Upload an image example
        </p>
        <div className="file">
          <label className="file-label">
            <input 
              className="file-input" 
              type="file" 
              onChange={handleChange} 
            />
            <span className="file-cta">
              <span className="file-icon">
                <i className="fas fa-upload"></i>
              </span>
              <span className="file-label">
                Choose a file…
              </span>
            </span>
          </label>
        </div>
      </header>
    </div>
  );
}

export default App;
