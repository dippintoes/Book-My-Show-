const settings = {
    infinite: false,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 2,
    InitialSlide: 0,
    responsive: [
        {
        breakpoints: 1024,
        settings: {
            slideToShow: 3,
            slideToScroll : 2,
            infinite: true,
        },
    },
    {
        breakpoints: 768,
        settings: {
            slideToShow: 2,
            slideToScroll : 1,
            infinite: true,
            InitialSlide: 1,
        },
    },
    {
        breakpoints: 480,
        settings: {
            slideToShow: 2,
            slideToScroll : 1,
            infinite: true,
            InitialSlide: 2,
        },
    },

],

};

export default settings;