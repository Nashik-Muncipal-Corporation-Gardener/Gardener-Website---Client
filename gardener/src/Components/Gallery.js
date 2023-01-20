import React, { useState, useEffect } from 'react'
import "../css/Gallery.css"
import { AiFillCloseCircle, AiFillRightCircle, AiFillLeftCircle } from 'react-icons/ai'


const Gallery = () => {
    const galleryImages = [
        { img: "https://thumbs.dreamstime.com/b/flowers-garden-26811177.jpg", tag: 'latest' },
        { img: "https://media.istockphoto.com/id/1192014583/photo/freshly-cut-grass.jpg?s=612x612&w=0&k=20&c=9yTli90SXBINfLvEMkb2Ta91XXT9y4IfQAlbjIRaULQ=", tag: 'latest' },
        { img: "https://thumbs.dreamstime.com/b/flowers-garden-26811177.jpg", tag: 'latest' },
        { img: "https://thumbs.dreamstime.com/b/flowers-garden-26811177.jpg", tag: 'latest' },
        { img: "https://thumbs.dreamstime.com/b/flowers-garden-26811177.jpg", tag: 'latest' },
        { img: "https://thumbs.dreamstime.com/b/flowers-garden-26811177.jpg", tag: 'latest' },
        { img: "https://thumbs.dreamstime.com/b/flowers-garden-26811177.jpg", tag: 'latest' },
        { img: "https://thumbs.dreamstime.com/b/flowers-garden-26811177.jpg", tag: 'latest' },
        { img: "https://thumbs.dreamstime.com/b/flowers-garden-26811177.jpg", tag: 'latest' },
        { img: "https://thumbs.dreamstime.com/b/flowers-garden-26811177.jpg", tag: 'latest' },
        { img: "https://thumbs.dreamstime.com/b/flowers-garden-26811177.jpg", tag: 'latest' },
        { img: "https://thumbs.dreamstime.com/b/flowers-garden-26811177.jpg", tag: 'latest' },
        { img: "https://thumbs.dreamstime.com/b/flowers-garden-26811177.jpg", tag: 'latest' },
        { img: "https://thumbs.dreamstime.com/b/flowers-garden-26811177.jpg", tag: 'latest' },
        { img: "https://thumbs.dreamstime.com/b/flowers-garden-26811177.jpg", tag: 'latest' },
        { img: "https://thumbs.dreamstime.com/b/flowers-garden-26811177.jpg", tag: 'latest' },
        { img: "https://thumbs.dreamstime.com/b/flowers-garden-26811177.jpg", tag: 'latest' },
        { img: "https://thumbs.dreamstime.com/b/flowers-garden-26811177.jpg", tag: 'latest' },
        { img: "https://thumbs.dreamstime.com/b/flowers-garden-26811177.jpg", tag: 'latest' },


    ]

    //open modal
    const handleOpenModal = (index) => {
        setSlideNumber(index)
        setOpenModal(true)
    }

    // close modal
    const handleCloseModal = (index) => {
        setOpenModal(false)
    }

    //left slide
    const preSlide = (index) => {
        slideNumber === 0 ? setSlideNumber(galleryImages.length - 1) : setSlideNumber(slideNumber - 1)
    }

    //right slide
    const nextSlide = (index) => {
        slideNumber + 1 === galleryImages.length ? setSlideNumber(0) : setSlideNumber(slideNumber + 1)

    }

    const [filteredImages, setFilteredImages] = useState([]);

    const [slideNumber, setSlideNumber] = useState(0)
    const [openModal, setOpenModal] = useState(false)

    return (
        <div>
            {
                openModal &&
                <div className='sliderWrap'>
                    <AiFillCloseCircle className='btnclose' onClick={handleCloseModal} />
                    <AiFillLeftCircle className='btnleft' onClick={preSlide} />
                    <AiFillRightCircle className='btnright' onClick={nextSlide} />
                    <div className='fullScreenImage'>
                        <img src={galleryImages[slideNumber].img} alt="" />
                    </div>
                </div>
            }
            <div className="container text-start py-5">
                <p className="d-inline-block  text-uppercase  fw-bold fs-5 mb-0">
                    Gallery
                </p>
                <hr className='text-danger fw-bold' />
            </div>

            <div className='container-fluid galleryWrap mt-2'>

                {
                    galleryImages.map((slide, index) => {
                        return (
                            <div
                                className='single'
                                key={index}
                                onClick={() => handleOpenModal(index)}
                            >
                                <img src={slide.img} alt="..." className='border border-2' />

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Gallery
