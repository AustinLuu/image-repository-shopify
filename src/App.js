import React, {useState} from 'react';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';
import Header from './components/Header';
import UploadButton from './components/UploadButton';
function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="App">
      <Header/>
      <UploadButton/>
      <ImageGrid setSelectedImg={setSelectedImg}/>
      {selectedImg && <Modal selectedImg = {selectedImg} setSelectedImg = {setSelectedImg}/>}
    </div>
  );
}

export default App;
