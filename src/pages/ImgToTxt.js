import React, { useState } from 'react';
import Header from './layout/header';
import Footer from './layout/footer';
import '../css/ImgToTxt.css';
function ImgToTxt() {
    const [activeButton, setActiveButton] = useState(1);
    const [activeButton1, setActiveButton1] = useState(1);
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  const handleButtonClick1 = (buttonName) => {
    setActiveButton1(buttonName);
  };
  return (
    <div className='background-color_custom_2 '>
    <div className='page2_section_1_bg_img'>
    <Header></Header>
    <section>
    <div className='container mt-5 mb-5'>
    <div className='row d-flex justify-content-center'>
        <div className='col-lg-10 col-12'>
            <h1 className='text-center main-heading-page-2'>Free AI Image Generator Turn Text to Image</h1>
        </div>
    </div>
    <div className='row justify-content-center'>
        <div className='col-lg-6 col-12'>
            <p className='page-2-text'>Capturing picture's and turning them into shareable memes, That's Meme Maker's speciality</p>
        </div>
    </div>
    <div className='row justify-content-center'>
    <div className='col-lg-6 col-12 d-flex justify-content-center'>
        <button className='custom_button_1_pg2'><img src='assets/fi_3324855.png' className='me-2' alt='generate'/>Generate your Image</button>
        </div>
    </div>
    </div>
    <div className='container custom_border_pg2 p-3'>
        <div className='row'>
            <div className='col-12'>
                <h5 className='page2-section2-heading'>Create an Image from text prompt</h5>
                <textarea defaultValue="Enter your text" id="comments" name="comments" rows='3' className='w-100 custom_textarea'>
    </textarea>
            </div>
        </div>
        <div className='row d-flex justify-content-between p-3'>
            <div className='col-lg-5 col-12 p-0 mt-2'>
            <h5 className='page2-section2-heading'>Choose a Modal</h5>
            <div className='d-flex justify-content-between custom_border2'>
            <button
        className={activeButton === 1 ? 'custom-btn1-pg2 active1' : 'custom-btn1-pg2'}
        onClick={() => handleButtonClick(1)}
      >
        Standard
      </button>
      <button
        className={activeButton === 2 ? 'custom-btn1-pg2 active1' : 'custom-btn1-pg2'}
        onClick={() => handleButtonClick(2)}
      >
        Hd
      </button>
      </div>
            </div>
            <div className='col-lg-5 col-md-8 p-0 mt-2'>
            <h5 className='page2-section2-heading'>Preference</h5>
            <div className='d-flex justify-content-between custom_border2'>
            <button
        className={activeButton1 === 1 ? 'custom-btn1-pg2 active1' : 'custom-btn2-pg2 text-tint'}
        onClick={() => handleButtonClick1(1)}
      >
        Speed
      </button>
      <button
        className={activeButton1 === 2 ? 'custom-btn1-pg2 active1' : 'custom-btn2-pg2'}
        onClick={() => handleButtonClick1(2)}
      >
        Quality
      </button>
      </div>
            </div>
        </div>
        <div className='row'>
            <div className='col-lg-8 col-12'>
            <h5 className='page2-section2-heading'>Choose a Style</h5>
            <div className='d-flex flex-wrap gap-2'>
                <img src='assets/generator.png' className='generator_custom_width' alt='style1'/>
                <img src='assets/generator2.png' className='generator_custom_width' alt='style2'/>
                <img src='assets/generator2.png' className='generator_custom_width' alt='style3'/>
                <img src='assets/generator2.png' className='generator_custom_width' alt='style4'/>
                <img src='assets/generator2.png' className='generator_custom_width' alt='style5'/>
                <img src='assets/generator2.png' className='generator_custom_width' alt='style6'/>
                <img src='assets/generator2.png' className='generator_custom_width' alt='style7'/>
            </div>
            </div>
            <div className='col-lg-4 col-12 d-flex justify-content-lg-end justify-content-center align-items-center'>
            <button className='custom-button-3-pg2'>Choose Shapes<img src='assets/chevron-down.png' className='ms-2' alt='shapes'/></button>
        </div>
        </div>
        <div className='row mt-5'>
          <div className='col-6'>
          <button className='custom-button-4-pg2'>View all Style</button>
          </div>
          <div className='col-6 d-flex justify-content-end'>
          <button className='custom-button-5-pg2'>Generate</button>
          </div>
        </div>
    </div>
    </section>
    </div>
    <section>
    <div className='container mt-5 p-0 mb-5'>
    <div className='row'>
        <div className='col-12'>
            <img src='assets/2ndPageimage.png' className='w-100 img-fluid custom-img-border-2' alt='2ndimg'/>'
        </div>
    </div>
    <div className='row d-flex justify-content-center'>
      <div className='col-md-12 col-8 d-flex flex-md-row flex-column justify-content-lg-end justify-content-center gap-3 mt-3'>
      <button className='custom-button-6-pg2'>Download</button>
      <button className='custom-button-7-pg2'>Remove Background</button>
      </div>
    </div>
    </div>
    </section>
    <Footer></Footer>
    </div>
  );
}

export default ImgToTxt;
