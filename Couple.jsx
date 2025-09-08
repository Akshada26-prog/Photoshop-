import React , { useState } from 'react';
import couple1 from "../src/images/couple1.jpg"
import couple2 from "../src/images/couple2.jfif"
import couple3 from "../src/images/couple3.webp"
import couple4 from "../src/images/couple4.jfif"
import couple5 from "../src/images/couple5.jpg"
import couple6 from "../src/images/couple6.jfif"
import couple7 from "../src/images/couple7.webp"
import couple8 from "../src/images/couple8.jfif"





const Couple = () => {
    const [selectedImages, setSelectedImages] = useState([]);
    const onSelectfile = (event) => {
        const selectedFiles = event.target.files;
        const selectedFilesArray = Array.from(selectedFiles);

        const imagesArray = selectedFilesArray.map((file) => {
            return URL.createObjectURL(file);
        });
        
        setSelectedImages(imagesArray);
};
  return (
    <>
    <div class="container">
                <div class="row">
                    <div class="col-3">
                        <div class="card">
                            <img src={couple1} class="card-img-top" />
                                <div class="cad-body">
                                </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="card">
                            <img src={couple2} class="card-img-top"  />
                                <div class="cad-body">
                                </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="card">
                            <img src={couple3}class="card-img-top" />
                                <div class="cad-body">
                                </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="card">
                            <img src={couple4}class="card-img-top" />
                                <div class="cad-body">
                                </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="card">
                            <img src={couple5}class="card-img-top" />
                                <div class="cad-body">
                                </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="card">
                            <img src={couple6}class="card-img-top" />
                                <div class="cad-body">
                                </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="card">
                            <img src={couple7}class="card-img-top" />
                                <div class="cad-body">
                                </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="card">
                            <img src={couple8}class="card-img-top" />
                                <div class="cad-body">
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <section>
                <div className='field'> 
                <label >
                    +Add images
                    <br />
                    <span>Add multiple images</span>
                    <input  type="file"
                     name="images" 
                     onChange={onSelectfile}
                     multiple
                      accept="image/png , image/jpeg , image/webp" />
                </label>
                </div>
                <div className="images">
                    {selectedImages &&
                    selectedImages.map((image, index) =>{
                          return (
                            <div key={image} className="image">
                                <img src={image} height="300" alt='uplaod' />
                                <button 
                                 onClick={ () =>
                                  setSelectedImages(selectedImages.filter((e)=> e !== image)) }>
                                    Delete Image
                                </button>
                                <p>{index + 1}</p>
                            </div>
                        );
                    })
                    }
                </div>
                </section>   

    </>
  )
}

export default Couple
