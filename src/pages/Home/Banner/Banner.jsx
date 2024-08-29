import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

// import img1 from './../../../assets/home/01.jpg'
// import img2 from './../../../assets/home/02.jpg'
// import img3 from './../../../assets/home/03.png'
// import img4 from './../../../assets/home/04.jpg'
// import img5 from './../../../assets/home/05.png'
// import img6 from './../../../assets/home/06.png'

import bannerContent from './../../../assets/home/BannerVideo.mp4'
import './banner.css'
import { motion } from 'framer-motion';

const Banner = () => {
    return (
        // <Carousel>
        //         <div>
        //             <img src={img1} />
        //         </div>
        //         <div>
        //             <img src={img2} />
        //         </div>
        //         <div>
        //             <img src={img3} />
        //         </div>
        //         <div>
        //             <img src={img4} />
        //         </div>
        //         <div>
        //             <img src={img5} />
        //         </div>
        //         <div>
        //             <img src={img6} />
        //         </div>
        //     </Carousel>

        <div className='videoContainer'>
            <div className='overlay max-w-screen-lg'></div>
            <motion.video
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: 'spring', stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
             src={bannerContent} autoPlay loop muted></motion.video>
            <div className='content max-w-screen-lg gap-y-4'>
                {/* <h2 className='fontStyle text-2xl f font-bold text-yellow-400'>REGGIE NEBULON COSMIC CHRONICLES</h2>
                <h1 className='fontStyle text-5xl font-bold text-white font-mono'>MISADVENTURES</h1>
                <h1 className='fontStyle text-5xl font-bold text-white font-mono'>OF A GALACTIC GADGETEER</h1> */}
                {/* <button className='neon'>START STORY</button> */}
            </div>
        </div>
    );
};

export default Banner;