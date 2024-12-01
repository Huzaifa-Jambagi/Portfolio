import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { fadeIn } from "../utils/motion";
import { ComputersCanvas } from "./canvas";

// Import images directly from the assets folder
import backendIcon from "../assets/backend.png";
import webIcon from "../assets/web.png";

const ServiceCard = ({ index, title, icon }) => (   
  <Tilt className='xs:w-[250px] w-full'>     
    <motion.div       
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}       
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'     
    >       
      <div         
        options={{           
          max: 45,           
          scale: 1,           
          speed: 450,         
        }}         
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'       
      >         
        <img           
          src={icon}           
          alt={title}           
          className='w-16 h-16 object-contain'         
        />         
        <h3 className='text-white text-[20px] font-bold text-center'>           
          {title}         
        </h3>       
      </div>     
    </motion.div>   
  </Tilt> 
);  

const Hero = () => {   
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 800);    

  useEffect(() => {     
    const handleResize = () => {       
      setIsDesktop(window.innerWidth >= 800);     
    };      

    window.addEventListener('resize', handleResize);     
    return () => window.removeEventListener('resize', handleResize);   
  }, []);    

  const mobileCards = [
    { index: 0, title: "Web Development", icon: webIcon },
    { index: 1, title: "Backend Development", icon: backendIcon }
  ];

  return (     
    <section className="relative w-full h-screen mx-auto">       
      <div         
        className="absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5"
      >         
        <div className='flex flex-col justify-center items-center mt-5'>           
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />           
          <div className='w-1 sm:h-80 h-40 violet-gradient' />         
        </div>                  

        <div>           
          <h1 className={`${styles.heroHeadText} text-white`}>             
            Hi, I'm <span className='text-[#915EFF]'>Huzaifa</span>           
          </h1>           
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>             
            A passionate MERN stack developer skilled in <br className='sm:block hidden' />             
            building end-to-end full-stack applications           
          </p>         
        </div>       
      </div>              

      {isDesktop ? (         
        <div 
          className="absolute inset-0 top-[100px] w-full h-full"
        >           
          <ComputersCanvas />         
        </div>       
      ) : (         
        <div 
          className="absolute w-full flex flex-wrap justify-center gap-5"
          style={{
            top: "380px", // Match Canvas rendering position
          }}
        >           
          {mobileCards.map((card) => (
            <ServiceCard 
              key={card.title}
              index={card.index} 
              title={card.title} 
              icon={card.icon} 
            />
          ))}         
        </div>       
      )}              

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>         
        <a href='#about'>           
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>             
            <motion.div               
              animate={{                 
                y: [0, 24, 0],               
              }}               
              transition={{                 
                duration: 1.5,                 
                repeat: Infinity,                 
                repeatType: "loop",               
              }}               
              className='w-3 h-3 rounded-full bg-secondary mb-1'             
            />           
          </div>         
        </a>       
      </div>     
    </section>   
  ); 
};  

export default Hero;
