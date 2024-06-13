import React, { useState,useEffect,useRef } from 'react';
import '../css/HomePage.css';
import Header from './layout/header';
import Footer from './layout/footer';
import { toPng } from 'html-to-image';
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
function HomePage() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const [isRotating, setIsRotating] = useState(false);
  const [scale, setScale] = useState(1);
  const [rotationAngle1, setRotationAngle1] = useState(0); 
  const [isVisible, setIsVisible] = useState(true);
  const [position1, setPosition1] = useState({ x: 0, y: 0 });
  const [dragging1, setDragging1] = useState(false);
  const [startPosition1, setStartPosition1] = useState({ x: 0, y: 0 });
  const [isRotating1, setIsRotating1] = useState(false);
  const [scale1, setScale1] = useState(1);
  const [rotationAngle2, setRotationAngle2] = useState(0); 
  const [isVisible1, setIsVisible1] = useState(true);
  const [showRotateButton2, setShowRotateButton2] = useState(null);
  const [position2, setPosition2] = useState({ x: 0, y: 0 });
  const [dragging2, setDragging2] = useState(false);
  const [startPosition2, setStartPosition2] = useState({ x: 0, y: 0 });
  const [isRotating2, setIsRotating2] = useState(false);
  const [scale2, setScale2] = useState(1);
  const [rotationAngle3, setRotationAngle3] = useState(0); 
  const [isVisible2, setIsVisible2] = useState(true);
  const [showRotateButton3, setShowRotateButton3] = useState(null);
  const [position3, setPosition3] = useState({ x: 0, y: 0 });
  const [dragging3, setDragging3] = useState(false);
  const [startPosition3, setStartPosition3] = useState({ x: 0, y: 0 });
  const [isRotating3, setIsRotating3] = useState(false);
  const [scale3, setScale3] = useState(1);
  const [rotationAngle4, setRotationAngle4] = useState(0); 
  const [isVisible3, setIsVisible3] = useState(true);
  const [showRotateButton4, setShowRotateButton4] = useState(null);
  const [position4, setPosition4] = useState({ x: 0, y: 0 });
  const [dragging4, setDragging4] = useState(false);
  const [startPosition4, setStartPosition4] = useState({ x: 0, y: 0 });
  const [isRotating4, setIsRotating4] = useState(false);
  const [scale4, setScale4] = useState(1);
  const [rotationAngle5, setRotationAngle5] = useState(0); 
  const [isVisible4, setIsVisible4] = useState(true);
  const [showRotateButton5, setShowRotateButton5] = useState(null);
  const [position5, setPosition5] = useState({ x: 0, y: 0 });
  const [dragging6, setDragging6] = useState(false);
  const [startPosition5, setStartPosition5] = useState({ x: 0, y: 0 });
  const [isRotating5, setIsRotating5] = useState(false);
  const [scale5, setScale5] = useState(1);
  const [rotationAngle6, setRotationAngle6] = useState(0); 
  const [isVisible5, setIsVisible5] = useState(true);
  const [showRotateButton6, setShowRotateButton6] = useState(null);
  const divRef = useRef(null);
  const defaultImages = {
    meme: 'assets/mouse1.png',
    hat: '',
    face: '',
    front: '',
    accessory: '',
    shirt: '',
    pant: '',
    bg: '',
    upload:'',
  };
  const memeOptions = ['mouse1.png', 'mouse2.png', 'mouse3.png', 'mouse4.png', 'mouse5.png','mouse4.png', 'mouse1.png'];
  const hatOptions = ['hat6.jpg','hat1.png', 'hat2.png', 'hat3.png', 'hat4.png', 'hat5.png'];
  const hatsOptions = ['hat1.png', 'hat1.png', 'hat1.png', 'hat1.png', 'hat1.png'];
  const faceOptions = ['hat6.jpg','face1.png', 'face2.png', 'face3.png', 'face4.png', 'face5.png'];
  const facesOptions = ['face1.png', 'face2.png', 'face3.png', 'face4.png', 'face5.png'];
  const frontOptions = ['hat6.jpg','glasses1.png', 'glasses1.png', 'glasses3.png', 'glasses4.png', 'glasses5.png'];
  const frontsOptions = ['glasses1.png', 'glasses1.png', 'glasses3.png', 'glasses4.png', 'glasses5.png'];
  const accessoryOptions = ['hat6.jpg','accessory1.png', 'accessory2.png', 'accessory4.png', 'accessory5.png', 'accessory1.png'];
  const shirtOptions = ['hat6.jpg','shirt1.png', 'shirt4.png', 'shirt5.png', 'shirt1.png', 'shirt4.png'];
  const pantOptions = ['hat6.jpg','pent1.png', 'pent4.png', 'pent5.png', 'pent1.png', 'pent5.png'];
  const bgOptions = ['hat6.jpg', 'bg1.png', 'bg4.png', 'bg5.png', 'bg1.png','bg5.png'];
  const bgsOptions = ['bg1.png', 'bg4.png', 'bg5.png', 'bg1.png','bg5.png'];
  const [selectedImages, setSelectedImages] = useState(defaultImages);
  const [activeImages, setActiveImages] = useState([]);
  const initialImages = [
  ];

  const [images, setImages] = useState(initialImages);
  const [showRotateButton, setShowRotateButton] = useState(null);
  const [showRotateButton1, setShowRotateButton1] = useState(false);

  useEffect(() => {
    const updatedImages = activeImages.map((id, index) => ({
      id: `active-${id}`,
      src: `assets/${id}.png`,
      position: { top: 100 + index * 20, left: 100 + index * 20 },
      rotation: 0,
      scale: 1,
      isDragging: false,
      isRotating: false,
    }));

    setImages([...initialImages, ...updatedImages]);
  }, [activeImages]);
  
  const handleMouseDown = (e, id) => {
    const updatedImages = images.map((image) =>
      image.id === id
        ? { ...image, isDragging: true, dragOffset: { offsetX: e.clientX - image.position.left, offsetY: e.clientY - image.position.top } }
        : image
    );
    setImages(updatedImages);
  };

  const handleMouseMove = (e) => {
    const updatedImages = images.map((image) => {
      if (image.isDragging) {
        return {
          ...image,
          position: {
            left: e.clientX - image.dragOffset.offsetX,
            top: e.clientY - image.dragOffset.offsetY,
          },
        };
      }
      if (image.isRotating) {
        const rotationAngle = (e.clientX - image.dragOffset.offsetX) % 360;
        return { ...image, rotation: rotationAngle };
      }
      return image;
    });
    setImages(updatedImages);
  };

  const handleMouseUp = () => {
    const updatedImages = images.map((image) => ({ ...image, isDragging: false, isRotating: false }));
    setImages(updatedImages);
  };

  const handleImageClick = (id) => {
    if (showRotateButton === id) {
      setShowRotateButton(null);
    } else {
      setShowRotateButton(id);
    }
  };
  const handleRotateButtonClick = (id) => {
    const updatedImages = images.map((image) =>
      image.id === id ? { ...image, isRotating: true, isDragging: false } : image
    );
    setImages(updatedImages);
  };
  const handleDeleteButtonClick = (id) => {
    const updatedImages = images.filter((image) => image.id !== id);
    setImages(updatedImages);
    const imageIdWithoutPrefix = id.replace(/^active-/, '');
    const updatedActiveImages = activeImages.filter((activeId) => activeId !== imageIdWithoutPrefix);
    setActiveImages(updatedActiveImages);
  };
  const handlePlusButtonClick = (id) => {
    const updatedImages = images.map((image) =>
      image.id === id ? { ...image, scale: image.scale + 0.1 } : image
    );
    setImages(updatedImages);
  };

  const handleMinusButtonClick = (id) => {
    const updatedImages = images.map((image) =>
      image.id === id ? { ...image, scale: image.scale - 0.1 } : image
    );
    setImages(updatedImages);
  };
  const handleClick = (id) => {
    if (activeImages.includes(id)) {
      setActiveImages(activeImages.filter(imageId => imageId !== id));
    } else {
      setActiveImages([...activeImages, id]);
    }
  };
useEffect(() => {
    const hatImage = document.getElementsByClassName('hat-image')[0];
    if (hatImage) {
      hatImage.style.display = selectedImages.hat ? 'block' : 'none';
    }

    const faceImage = document.getElementsByClassName('face-image')[0];
    if (faceImage) {
      faceImage.style.display = selectedImages.face ? 'block' : 'none';
    }

    const frontImage = document.getElementsByClassName('front-image')[0];
    if (frontImage) {
      frontImage.style.display = selectedImages.front ? 'block' : 'none';
    }

    const accessoryImage = document.getElementsByClassName('accessory-image')[0];
    if (accessoryImage) {
      accessoryImage.style.display = selectedImages.accessory ? 'block' : 'none';
    }

    const shirtImage = document.getElementsByClassName('shirt-image')[0];
    if (shirtImage) {
      shirtImage.style.display = selectedImages.shirt ? 'block' : 'none';
    }
    const pentImage = document.getElementsByClassName('pant-image')[0];
    if (pentImage) {
      pentImage.style.display = selectedImages.pant ? 'block' : 'none';
    }
    const bgImage = document.getElementsByClassName('bg-image')[0];
    if (bgImage) {
      bgImage.style.display = selectedImages.bg ? 'block' : 'none';
    }
  }, [selectedImages]);

const handleImageSelect = (category, image) => {
  setIsVisible(true);
  setIsVisible1(true);
  setIsVisible2(true);
  setIsVisible3(true);
  setIsVisible4(true);
  setIsVisible5(true);
    if (category === 'hat' && image === `assets/${hatOptions[0]}`) {
      setSelectedImages(prevState => ({ ...prevState, hat: '' }));
    } else if (category === 'face' && image === `assets/${faceOptions[0]}`) {
      setSelectedImages(prevState => ({ ...prevState, face: '' }));
    } else if (category === 'front' && image === `assets/${frontOptions[0]}`) {
      setSelectedImages(prevState => ({ ...prevState, front: '' }));
    } else if (category === 'accessory' && image === `assets/${accessoryOptions[0]}`) {
      setSelectedImages(prevState => ({ ...prevState, accessory: '' }));
    } else if (category === 'shirt' && image === `assets/${shirtOptions[0]}`) {
      setSelectedImages(prevState => ({ ...prevState, shirt: '' }));
    } else if (category === 'pant' && image === `assets/${pantOptions[0]}`) {
        setSelectedImages(prevState => ({ ...prevState, pant: '' }));
      }
      else if (category === 'bg' && image === `assets/${bgOptions[0]}`) {
        setSelectedImages(prevState => ({ ...prevState, bg: '' }));
      }
    else {
      setSelectedImages(prevState => ({ ...prevState, [category]: image }));
    }
  };
  const handleReset = () => {
    setSelectedImages(defaultImages);
  };
  const handleGenerateRandom = () => {
    const randomMemeIndex = Math.floor(Math.random() * memeOptions.length);
    const randomHatIndex = Math.floor(Math.random() * hatsOptions.length);
    const randomFrontsIndex = Math.floor(Math.random() * frontsOptions.length);
    const randomFacesIndex = Math.floor(Math.random() * facesOptions.length);
    const randomBgsIndex = Math.floor(Math.random() * bgsOptions.length);
    setSelectedImages({
      meme: `assets/${memeOptions[randomMemeIndex]}`,
      hat: `assets/${hatsOptions[randomHatIndex]}`,
      front: `assets/${frontsOptions[randomFrontsIndex]}`,
      face: `assets/${facesOptions[randomFacesIndex]}`,
      bg: `assets/${bgsOptions[randomBgsIndex]}`,
    });
  };
  const handleDownload = async () => {
    console.log("clicked");
  
    if (divRef.current === null) {
      console.error("divRef is null");
      return;
    }
  
    try {
      const dataUrl = await toPng(divRef.current, { cacheBust: true });
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = 'image-preview.png';
      link.click();
    } catch (err) {
      console.error('Oops, something went wrong!', err);
    }
  };
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImages({ ...selectedImages, meme: reader.result });
        toastr.success("Image Uploaded Successfully");
      };
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  const handleTouchStart = (e, id) => {
    handleMouseDown(e, id);
  };
  
  const handleTouchMove = (e, id) => {
    handleMouseMove(e, id);
  };
  
  const handleTouchEnd = (e, id) => {
    handleMouseUp(e, id);
  };
  const handleMouseDown1 = (e) => {
    if (e.target.classList.contains('rotate-button1')) {
      setIsRotating(true);
    } else {
      setDragging(true);
      setStartPosition({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
    setDragging(true);
  
  };
  const handleMouseMove1 = (e) => {
    if (dragging) {
      setPosition({
        x: e.clientX - startPosition.x,
        y: e.clientY - startPosition.y
      });
    }
    if (isRotating) {
      const rotationAngle = (e.clientX - startPosition.x) % 360;
      setRotationAngle1(rotationAngle);
    }
  };

  const handleMouseUp1 = () => {
    setDragging(false);
    setIsRotating(false);
  };
  const handleRotateButtonClick1 = () => {
    setIsRotating(true);
  };
  const handleImageClick1 = () => {
    setShowRotateButton1(!showRotateButton1);
  };
  
  const handleDeleteButtonClick1 = () => {
    setIsVisible(false);
  };

  const handlePlusButtonClick1 = () => {
    setScale(scale + 0.1);
  };

  const handleMinusButtonClick1 = () => {
    setScale(Math.max(scale - 0.1, 0.1));
  };
  const handleMouseDown2 = (e) => {
    if (e.target.classList.contains('rotate-button2')) {
      setIsRotating1(true);
    } else {
      setDragging1(true);
      setStartPosition1({ x: e.clientX - position1.x, y: e.clientY - position1.y });
    }
    setDragging1(true);
  
  };
  const handleMouseMove2 = (e) => {
    if (dragging1) {
      setPosition1({
        x: e.clientX - startPosition1.x,
        y: e.clientY - startPosition1.y
      });
    }
    if (isRotating1) {
      const rotationAngle = (e.clientX - startPosition1.x) % 360; // Adjust as needed
      setRotationAngle2(rotationAngle);
    }
  };

  const handleMouseUp2 = () => {
    setDragging1(false);
    setIsRotating1(false);
  };
  const handleRotateButtonClick2 = () => {
    setIsRotating1(true);
  };
  const handleImageClick2 = () => {
    setShowRotateButton2(!showRotateButton2); // Toggle between true and false
  };
  
  const handleDeleteButtonClick2 = () => {
    setIsVisible1(false);
  };

  const handlePlusButtonClick2 = () => {
    setScale1(scale1 + 0.1);
  };

  const handleMinusButtonClick2 = () => {
    setScale1(Math.max(scale1 - 0.1, 0.1));
  };
  const handleMouseDown3 = (e) => {
    if (e.target.classList.contains('rotate-button3')) {
      setIsRotating2(true);
    } else {
      setDragging2(true);
      setStartPosition2({ x: e.clientX - position2.x, y: e.clientY - position2.y });
    }
    setDragging2(true);
  
  };
  const handleMouseMove3 = (e) => {
    if (dragging2) {
      setPosition2({
        x: e.clientX - startPosition2.x,
        y: e.clientY - startPosition2.y
      });
    }
    if (isRotating2) {
      const rotationAngle = (e.clientX - startPosition2.x) % 360; // Adjust as needed
      setRotationAngle3(rotationAngle);
    }
  };

  const handleMouseUp3 = () => {
    setDragging2(false);
    setIsRotating2(false);
  };
  const handleRotateButtonClick3 = () => {
    setIsRotating2(true);
  };
  const handleImageClick3 = () => {
    setShowRotateButton3(!showRotateButton3); // Toggle between true and false
  };
  
  const handleDeleteButtonClick3 = () => {
    setIsVisible2(false);
  };

  const handlePlusButtonClick3 = () => {
    setScale2(scale2 + 0.1);
  };

  const handleMinusButtonClick3 = () => {
    setScale2(Math.max(scale2 - 0.1, 0.1));
  };
  const handleMouseDown4 = (e) => {
    if (e.target.classList.contains('rotate-button4')) {
      setIsRotating3(true);
    } else {
      setDragging3(true);
      setStartPosition3({ x: e.clientX - position3.x, y: e.clientY - position3.y });
    }
    setDragging3(true);
  
  };
  const handleMouseMove4 = (e) => {
    if (dragging3) {
      setPosition3({
        x: e.clientX - startPosition3.x,
        y: e.clientY - startPosition3.y
      });
    }
    if (isRotating3) {
      const rotationAngle = (e.clientX - startPosition3.x) % 360; // Adjust as needed
      setRotationAngle4(rotationAngle);
    }
  };

  const handleMouseUp4 = () => {
    setDragging3(false);
    setIsRotating3(false);
  };
  const handleRotateButtonClick4 = () => {
    setIsRotating3(true);
  };
  const handleImageClick4 = () => {
    setShowRotateButton4(!showRotateButton4); // Toggle between true and false
  };
  
  const handleDeleteButtonClick4 = () => {
    setIsVisible3(false);
  };

  const handlePlusButtonClick4 = () => {
    setScale3(scale3 + 0.1);
  };

  const handleMinusButtonClick4 = () => {
    setScale3(Math.max(scale3 - 0.1, 0.1));
  };
  const handleMouseDown5 = (e) => {
    if (e.target.classList.contains('rotate-button5')) {
      setIsRotating4(true);
    } else {
      setDragging4(true);
      setStartPosition4({ x: e.clientX - position4.x, y: e.clientY - position4.y });
    }
    setDragging4(true);
  
  };
  const handleMouseMove5 = (e) => {
    if (dragging4) {
      setPosition4({
        x: e.clientX - startPosition4.x,
        y: e.clientY - startPosition4.y
      });
    }
    if (isRotating4) {
      const rotationAngle = (e.clientX - startPosition4.x) % 360; // Adjust as needed
      setRotationAngle5(rotationAngle);
    }
  };

  const handleMouseUp5 = () => {
    setDragging4(false);
    setIsRotating4(false);
  };
  const handleRotateButtonClick5 = () => {
    setIsRotating4(true);
  };
  const handleImageClick5 = () => {
    setShowRotateButton5(!showRotateButton5); // Toggle between true and false
  };
  
  const handleDeleteButtonClick5 = () => {
    setIsVisible4(false);
  };

  const handlePlusButtonClick5 = () => {
    setScale4(scale4 + 0.1);
  };

  const handleMinusButtonClick5 = () => {
    setScale4(Math.max(scale4 - 0.1, 0.1));
  };
  const handleMouseDown6 = (e) => {
    if (e.target.classList.contains('rotate-button6')) {
      setIsRotating5(true);
    } else {
      setDragging6(true);
      setStartPosition5({ x: e.clientX - position5.x, y: e.clientY - position5.y });
    }
    setDragging6(true);
  
  };
  const handleMouseMove6 = (e) => {
    if (dragging6) {
      setPosition5({
        x: e.clientX - startPosition5.x,
        y: e.clientY - startPosition5.y
      });
    }
    if (isRotating5) {
      const rotationAngle = (e.clientX - startPosition5.x) % 360; // Adjust as needed
      setRotationAngle6(rotationAngle);
    }
  };

  const handleMouseUp6 = () => {
    setDragging6(false);
    setIsRotating5(false);
  };
  const handleRotateButtonClick6 = () => {
    setIsRotating5(true);
  };
  const handleImageClick6 = () => {
    setShowRotateButton6(!showRotateButton6); // Toggle between true and false
  };
  
  const handleDeleteButtonClick6 = () => {
    setIsVisible5(false);
  };

  const handlePlusButtonClick6 = () => {
    setScale5(scale5 + 0.1);
  };

  const handleMinusButtonClick6 = () => {
    setScale5(Math.max(scale5 - 0.1, 0.1));
  };
  return (
    <div className='background-color_custom'>
<Header></Header>
<section>
<div className='container mt-5'>
    <div className='row justify-content-center'>
        <div className='col-lg-6 col-12'>
            <div className='d-flex text-center justify-content-center'>
            <img src='assets/section-1-img-1.png' alt='logo' className='img-fluid custom_width_img'/>
            <h1>Solana</h1>
            </div>
            <h1 className='text-center'><span className='custom_gradient'>Meme</span> Maker</h1>
        </div>
    </div>
    <div className='row justify-content-center'>
        <div className='col-lg-6 col-12'>
            <p className='page-1-text'>Capturing picture's and turning them into shareable memes, That's Meme Maker's speciality</p>
        </div>
    </div>
    <div className='row justify-content-center'>
    <div className='col-lg-6 col-12 d-flex justify-content-center'>
        <button className='custom_button_1'>Create your meme</button>
        </div>
    </div>
</div>
<div className='container mt-5'>
<div className='row d-flex justify-content-center'>
          <div className='col-md-4 col-12 mt-4'>
                        <div className="image-preview1" onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} ref={divRef} style={{ backgroundImage: `url(${selectedImages.bg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: "black" }}>
                        {selectedImages.meme && <img src={selectedImages.meme} style={{ width: "268px", height: "350px" }} className='selected-image meme-image' alt='Image1' />}
                     {selectedImages.hat && isVisible &&
                      <div
                      className="draggable-container"
                      style={{ position: 'absolute', left: position.x, top: position.y }}
                      onMouseDown={handleMouseDown1}
                      onMouseMove={handleMouseMove1}
                      onMouseUp={handleMouseUp1}
                      onClick={handleImageClick1}
                    >
<img src={selectedImages.hat}   style={{
          transform: `rotate(${rotationAngle1}deg) scale(${scale})`
        }}  className='draggable' alt='Image2' />
{showRotateButton1  && (
              <div className="button-container">
                <button className="rotate-button1 buttonpopup" onClick={() => handleRotateButtonClick1(1)}>
                  <img src='assets/rotation.png' width='15' height='15' alt="Rotate" />
                </button>
                <button className="delete-button buttonpopup" onClick={() => handleDeleteButtonClick1()}>
                  <img src='assets/delete.png' width='15' height='15' alt="Delete" />
                </button>
                <button id="plus-button"className='buttonpopup' onClick={() => handlePlusButtonClick1()}>
                  <img src='assets/plus.png' width='15' height='15' alt="Plus" />
                </button>
                <button id="minus-button" className='buttonpopup' onClick={() => handleMinusButtonClick1()}>
                  <img src='assets/minus.png' width='15' height='15' alt="Minus" />
                </button>
              </div>
            )}
                    </div>
                     }
                                          {selectedImages.face && isVisible1 &&
                      <div
                      className="draggable-container"
                      style={{ position: 'absolute', left: position1.x, top: position1.y }}
                      onMouseDown={handleMouseDown2}
                      onMouseMove={handleMouseMove2}
                      onMouseUp={handleMouseUp2}
                      onClick={handleImageClick2}
                    >
<img src={selectedImages.face}   style={{
          transform: `rotate(${rotationAngle2}deg) scale(${scale1})`
        }}  className='draggable' alt='Image2' />
{showRotateButton2  && (
              <div className="button-container">
                <button className="rotate-button2 buttonpopup" onClick={() => handleRotateButtonClick2()}>
                  <img src='assets/rotation.png' width='15' height='15' alt="Rotate" />
                </button>
                <button className="delete-button buttonpopup" onClick={() => handleDeleteButtonClick2()}>
                  <img src='assets/delete.png' width='15' height='15' alt="Delete" />
                </button>
                <button id="plus-button"className='buttonpopup' onClick={() => handlePlusButtonClick2()}>
                  <img src='assets/plus.png' width='15' height='15' alt="Plus" />
                </button>
                <button id="minus-button" className='buttonpopup' onClick={() => handleMinusButtonClick2()}>
                  <img src='assets/minus.png' width='15' height='15' alt="Minus" />
                </button>
              </div>
            )}
                    </div>
                     }
                                                                     {selectedImages.front && isVisible2 &&
                      <div
                      className="draggable-container"
                      style={{ position: 'absolute', left: position2.x, top: position2.y }}
                      onMouseDown={handleMouseDown3}
                      onMouseMove={handleMouseMove3}
                      onMouseUp={handleMouseUp3}
                      onClick={handleImageClick3}
                    >
<img src={selectedImages.front}   style={{
          transform: `rotate(${rotationAngle3}deg) scale(${scale2})`
        }}  className='draggable' alt='Image2' />
{showRotateButton3  && (
              <div className="button-container">
                <button className="rotate-button3 buttonpopup" onClick={() => handleRotateButtonClick3()}>
                  <img src='assets/rotation.png' width='15' height='15' alt="Rotate" />
                </button>
                <button className="delete-button buttonpopup" onClick={() => handleDeleteButtonClick3()}>
                  <img src='assets/delete.png' width='15' height='15' alt="Delete" />
                </button>
                <button id="plus-button"className='buttonpopup' onClick={() => handlePlusButtonClick3()}>
                  <img src='assets/plus.png' width='15' height='15' alt="Plus" />
                </button>
                <button id="minus-button" className='buttonpopup' onClick={() => handleMinusButtonClick3()}>
                  <img src='assets/minus.png' width='15' height='15' alt="Minus" />
                </button>
              </div>
            )}
                    </div>
                     }
                                                                                          {selectedImages.accessory && isVisible3 &&
                      <div
                      className="draggable-container"
                      style={{ position: 'absolute', left: position3.x, top: position3.y }}
                      onMouseDown={handleMouseDown4}
                      onMouseMove={handleMouseMove4}
                      onMouseUp={handleMouseUp4}
                      onClick={handleImageClick4}
                    >
<img src={selectedImages.accessory}   style={{
          transform: `rotate(${rotationAngle4}deg) scale(${scale3})`
        }}  className='draggable' alt='Image2' />
{showRotateButton4  && (
              <div className="button-container">
                <button className="rotate-button4 buttonpopup" onClick={() => handleRotateButtonClick4()}>
                  <img src='assets/rotation.png' width='15' height='15' alt="Rotate" />
                </button>
                <button className="delete-button buttonpopup" onClick={() => handleDeleteButtonClick4()}>
                  <img src='assets/delete.png' width='15' height='15' alt="Delete" />
                </button>
                <button id="plus-button"className='buttonpopup' onClick={() => handlePlusButtonClick4()}>
                  <img src='assets/plus.png' width='15' height='15' alt="Plus" />
                </button>
                <button id="minus-button" className='buttonpopup' onClick={() => handleMinusButtonClick4()}>
                  <img src='assets/minus.png' width='15' height='15' alt="Minus" />
                </button>
              </div>
            )}
                    </div>
                     }
                                                                                                               {selectedImages.shirt && isVisible4 &&
                      <div
                      className="draggable-container"
                      style={{ position: 'absolute', left: position4.x, top: position4.y }}
                      onMouseDown={handleMouseDown5}
                      onMouseMove={handleMouseMove5}
                      onMouseUp={handleMouseUp5}
                      onClick={handleImageClick5}
                    >
<img src={selectedImages.shirt}   style={{
          transform: `rotate(${rotationAngle5}deg) scale(${scale4})`
        }}  className='draggable' alt='Image2' />
{showRotateButton5  && (
              <div className="button-container">
                <button className="rotate-button5 buttonpopup" onClick={() => handleRotateButtonClick5()}>
                  <img src='assets/rotation.png' width='15' height='15' alt="Rotate" />
                </button>
                <button className="delete-button buttonpopup" onClick={() => handleDeleteButtonClick5()}>
                  <img src='assets/delete.png' width='15' height='15' alt="Delete" />
                </button>
                <button id="plus-button"className='buttonpopup' onClick={() => handlePlusButtonClick5()}>
                  <img src='assets/plus.png' width='15' height='15' alt="Plus" />
                </button>
                <button id="minus-button" className='buttonpopup' onClick={() => handleMinusButtonClick5()}>
                  <img src='assets/minus.png' width='15' height='15' alt="Minus" />
                </button>
              </div>
            )}
                    </div>
                     }
                                                                                                                                    {selectedImages.pant && isVisible5 &&
                      <div
                      className="draggable-container"
                      style={{ position: 'absolute', left: position5.x, top: position5.y }}
                      onMouseDown={handleMouseDown6}
                      onMouseMove={handleMouseMove6}
                      onMouseUp={handleMouseUp6}
                      onClick={handleImageClick6}
                    >
<img src={selectedImages.pant}   style={{
          transform: `rotate(${rotationAngle6}deg) scale(${scale5})`
        }}  className='draggable' alt='Image2' />
{showRotateButton6  && (
              <div className="button-container">
                <button className="rotate-button6 buttonpopup" onClick={() => handleRotateButtonClick6()}>
                  <img src='assets/rotation.png' width='15' height='15' alt="Rotate" />
                </button>
                <button className="delete-button buttonpopup" onClick={() => handleDeleteButtonClick6()}>
                  <img src='assets/delete.png' width='15' height='15' alt="Delete" />
                </button>
                <button id="plus-button"className='buttonpopup' onClick={() => handlePlusButtonClick6()}>
                  <img src='assets/plus.png' width='15' height='15' alt="Plus" />
                </button>
                <button id="minus-button" className='buttonpopup' onClick={() => handleMinusButtonClick6()}>
                  <img src='assets/minus.png' width='15' height='15' alt="Minus" />
                </button>
              </div>
            )}
                    </div>
                     }
                            {images.map((image) => (
          <div
            key={image.id}
            className="draggable-container"
            style={{
              top: `${image.position.top}px`,
              left: `${image.position.left}px`,
              position: 'absolute',
            }}
            onMouseDown={(e) => handleMouseDown(e, image.id)}
            onTouchStart={(e) => handleTouchStart(e, image.id)}
            onTouchMove={(e) => handleTouchMove(e, image.id)}
            onTouchEnd={(e) => handleTouchEnd(e, image.id)}
            onClick={() => handleImageClick(image.id)}
          >
            <img src={image.src} alt="Draggable" id={image.id} className="draggable" style={{ transform: `scale(${image.scale}) rotate(${image.rotation}deg)`, }} />
            {showRotateButton === image.id && (
              <div className="button-container">
                <button className="rotate-button buttonpopup" onClick={() => handleRotateButtonClick(image.id)}>
                  <img src='assets/rotation.png' width='15' height='15' alt="Rotate" />
                </button>
                <button className="delete-button buttonpopup" onClick={() => handleDeleteButtonClick(image.id)}>
                  <img src='assets/delete.png' width='15' height='15' alt="Delete" />
                </button>
                <button id="plus-button"className='buttonpopup' onClick={() => handlePlusButtonClick(image.id)}>
                  <img src='assets/plus.png' width='15' height='15' alt="Plus" />
                </button>
                <button id="minus-button" className='buttonpopup' onClick={() => handleMinusButtonClick(image.id)}>
                  <img src='assets/minus.png' width='15' height='15' alt="Minus" />
                </button>
              </div>
            )}
          </div>
        ))}
                      </div>
          </div>
        </div>
    <div className='row justify-content-center'>
        <div className='col-md-7 col-12'>
        <h2 className='heading_2 text-md-start text-center'>Create Your Mouse</h2>
        </div>
        <div className='col-md-5 col-12 d-flex justify-content-md-end justify-content-center'><button className='custom_button_2' data-bs-toggle="modal" data-bs-target="#exampleModal">Upload File</button></div>
    </div>
    <div className='row mt-3 justify-content-center'>
        <div className='col-lg-6 col-12 d-flex justify-content-center'>
        <input type="text" id="search" name="q" placeholder="Search..." className='custom_input_design'/>
        </div>
    </div>
    <div className='row'>
          <div className='col-lg-6 col-12 custom_slider_color mt-3'>
            <h5 className='slider_heading'>Meme Library</h5>
            <Swiper modules={[Navigation, A11y]} spaceBetween={50} slidesPerView={5} navigation>
              {memeOptions.map((option, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={`assets/${option}`}
                    width='70'
                    height='61'
                    onClick={() => handleImageSelect('meme', `assets/${option}`)}
                    alt='sliderImg'
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className='col-lg-6 col-12 custom_slider_color mt-3'>
            <h5 className='slider_heading'>Hats</h5>
            <Swiper modules={[Navigation, A11y]} spaceBetween={50} slidesPerView={5} navigation>
              {hatOptions.map((option, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={`assets/${option}`}
                    width='70'
                    height='61'
                    onClick={() => handleImageSelect('hat', `assets/${option}`)}
                    alt='sliderImg1'
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className='col-lg-6 col-12 custom_slider_color mt-3'>
             <h5 className='slider_heading'>Face</h5>
             <Swiper modules={[Navigation, A11y]} spaceBetween={50} slidesPerView={5} navigation>
               {faceOptions.map((option, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={`assets/${option}`}
                    width='70'
                    height='61'
                    onClick={() => handleImageSelect('face', `assets/${option}`)}
                    alt='sliderImg2'
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className='col-lg-6 col-12 custom_slider_color mt-3'>
             <h5 className='slider_heading'>Front Accessories</h5>
             <Swiper modules={[Navigation, A11y]} spaceBetween={50} slidesPerView={5} navigation>
               {frontOptions.map((option, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={`assets/${option}`}
                    width='70'
                    height='61'
                    onClick={() => handleImageSelect('front', `assets/${option}`)}
                    alt='sliderImg3'
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className='col-lg-6 col-12 custom_slider_color mt-3'>
             <h5 className='slider_heading'>Back Accessories</h5>
             <Swiper modules={[Navigation, A11y]} spaceBetween={50} slidesPerView={5} navigation>
               {accessoryOptions.map((option, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={`assets/${option}`}
                    width='70'
                    height='61'
                    onClick={() => handleImageSelect('accessory', `assets/${option}`)}
                    alt='sliderImg4'
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className='col-lg-6 col-12 custom_slider_color mt-3'>
             <h5 className='slider_heading'>Outfit</h5>
             <Swiper modules={[Navigation, A11y]} spaceBetween={50} slidesPerView={5} navigation>
               {shirtOptions.map((option, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={`assets/${option}`}
                    width='70'
                    height='61'
                    onClick={() => handleImageSelect('shirt', `assets/${option}`)}
                    alt='sliderImg5'
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className='col-lg-6 col-12 custom_slider_color mt-3'>
             <h5 className='slider_heading'>Pant</h5>
             <Swiper modules={[Navigation, A11y]} spaceBetween={50} slidesPerView={5} navigation>
               {pantOptions.map((option, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={`assets/${option}`}
                    width='70'
                    height='61'
                    onClick={() => handleImageSelect('pant', `assets/${option}`)}
                    alt='sliderImg6'
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className='col-lg-6 col-12 custom_slider_color mt-3'>
             <h5 className='slider_heading'>Background</h5>
             <Swiper modules={[Navigation, A11y]} spaceBetween={50} slidesPerView={5} navigation>
               {bgOptions.map((option, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={`assets/${option}`}
                    width='70'
                    height='61'
                    onClick={() => handleImageSelect('bg', `assets/${option}`)}
                    alt='sliderImg7'
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className='row mt-5 mb-2 justify-content-center'>
          <div className='col-lg-4 col-md-6 col-12 d-flex justify-content-center mb-3'>
            <button className='custom-button-3' onClick={handleReset}>
              <img src='assets/fi_7134699.png' className='me-2' alt='btnImage1' />
              Reset File
            </button>
          </div>
          <div className='col-lg-4 col-md-6 col-12 d-flex justify-content-center mb-3'>
            <button className='custom-button-4' onClick={handleGenerateRandom}>
              <img src='assets/Group.png' className='me-2' alt='btnImage2' />
              Generate Random
            </button>
          </div>
          <div className='col-lg-4 col-md-6 col-12 d-flex justify-content-center mb-3'>
          <button className='custom-button-5' onClick={handleDownload}>
              <img src='assets/fi_7268609.png' className='me-2' alt='btnImage3' />
              Download
            </button>
          </div>
        </div>
</div>
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <button type="button" className="btn-close1 ms-4" data-bs-dismiss="modal" aria-label="Close">
              <img src="assets/Vector.png" alt='close' />
            </button>
            <div className="modal-body">
              <div className='container'>
                <div className='row mt-3'>
                  <div className='col-4'>
                    <div className='modal_box'>
                      <p className='box_text'>Inside</p>
                    </div>
                  </div>
                  <div className='col-4'>
                    <div className='modal_box1'>
                      <p className='box_text'>Below</p>
                    </div>
                  </div>
                  <div className='col-4'>
                    <div className='modal_box1'>
                      <p className='box_text'>More</p>
                    </div>
                  </div>
                </div>
                <div className='row mt-3'>
                  <div className='col-12 d-flex justify-content-between'>
                    {[1, 2, 3, 4, 5].map((id) => (
                      <img
                        key={id}
                        src={`assets/popupimg${id}.png`}
                        className={`modal_img ${activeImages.includes(`popupimg${id}`) ? 'activeimg' : ''}`}
                        alt={`popupimg${id}`}
                        onClick={() => handleClick(`popupimg${id}`)}
                      />
                    ))}
                  </div>
                </div>          <div className='row mt-3'>
            <div className='col-12 d-flex justify-content-between'>
            {[1, 2, 3, 4, 5].map((id) => (
                      <img
                        key={id}
                        src={`assets/popup1img${id}.png`}
                        className={`modal_img ${activeImages.includes(`popup1img${id}`) ? 'activeimg' : ''}`}
                        alt={`popupimg${id}`}
                        onClick={() => handleClick(`popup1img${id}`)}
                      />
                    ))}
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col-12 d-flex justify-content-between'>
            {[1, 2, 3, 4, 5].map((id) => (
                      <img
                        key={id}
                        src={`assets/popup2img${id}.png`}
                        className={`modal_img ${activeImages.includes(`popup2img${id}`) ? 'activeimg' : ''}`}
                        alt={`popup2img${id}`}
                        onClick={() => handleClick(`popup2img${id}`)}
                      />
                    ))}
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col-12 d-flex justify-content-between'>
            {[1, 2, 3, 4, 5].map((id) => (
                      <img
                        key={id}
                        src={`assets/popup3img${id}.png`}
                        className={`modal_img ${activeImages.includes(`popup3img${id}`) ? 'activeimg' : ''}`}
                        alt={`popup3img${id}`}
                        onClick={() => handleClick(`popup3img${id}`)}
                      />
                    ))}
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col-12 d-flex justify-content-between'>
            {[1, 2, 3, 4, 5].map((id) => (
                      <img
                        key={id}
                        src={`assets/popup4img${id}.png`}
                        className={`modal_img ${activeImages.includes(`popup4img${id}`) ? 'activeimg' : ''}`}
                        alt={`popup4img${id}`}
                        onClick={() => handleClick(`popup4img${id}`)}
                      />
                    ))}
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col-12 d-flex justify-content-between'>
            {[1, 2, 3, 4, 5].map((id) => (
                      <img
                        key={id}
                        src={`assets/popup5img${id}.png`}
                        className={`modal_img ${activeImages.includes(`popup5img${id}`) ? 'activeimg' : ''}`}
                        alt={`popup5img${id}`}
                        onClick={() => handleClick(`popup5img${id}`)}
                      />
                    ))}
           
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col-6 d-flex justify-content-start'>
            <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleImageUpload}
        />
              <button className='modal_button_custom' onClick={handleButtonClick}>Upload image</button>
            </div>
            <div className='col-6 d-flex justify-content-end'>
              <button className='modal_button_custom'>Past image URL</button>
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col-12'>
              <img src='assets/OrImage.png' className='img-fluid' alt='Imge'/>
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col-12'>
            <button className='modal_button_custom w-100'>Search Memes</button>
            </div>
          </div>
          <div className='row nt-3'>
            <div className='col-12 d-flex gap-3 modal_checkbox'>
            <div className="checkbox-container">
    <input type="checkbox" id="myCheckbox"/>
    <label for="myCheckbox">Indude NSFW</label>
  </div>
  <div className="checkbox-container">
    <input type="checkbox" id="myCheckbox"/>
    <label for="myCheckbox">Transprant Background</label>
  </div>
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col-12'>
            <button className='modal_button_custom w-100'>Recent Templates</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
<Footer></Footer>
    </div>
  );
}

export default HomePage;
