import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Tilt } from "react-tilt";
import webIcon from "../assets/web.png";
import { styles } from "../styles";
import { fadeIn } from "../utils/motion";
import { ComputersCanvas } from "./canvas";

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
    { 
      index: 0, 
      title: "Web Development", 
      icon: webIcon 
    }
  ];

  return (     
    <section className={`relative w-full h-screen mx-auto`}>       
      <div         
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}       
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
        <div className='absolute inset-0 top-[100px] w-full h-full'>           
          <ComputersCanvas />         
        </div>       
      ) : (         
        <div 
          className="absolute w-full flex flex-wrap justify-center gap-5"
          style={{
            top: "370px", 
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
    </section>   
  ); 
};  

export default Hero;
