import React, { useEffect, useState } from 'react'

// stars will be created with params as : id, size, x, y, opacity, animationDuration
// meteors will be created with params as : id, size, x, y , delay, animationDuration

const Background = () => {

  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(()=>{
    generateStars();
    generateMeteors();

    // during resizing of window need to keep stars and meteors within the viewframe
    const handleResize = () => {
        generateStars();
    }
    window.addEventListener("resize", handleResize);

    // on unmount
    return ()=>window.removeEventListener("resize", handleResize);
  }, [])
// callback function is called only once the page renders.

  const generateStars = ()=>{
    const numOfStars = Math.floor(window.innerWidth*window.innerHeight)/10000;
    const newStars = []

    for(let i=0;i<numOfStars;i++){
        newStars.push({
            id:i, size: Math.random()*3 + 1, //size bw 1 and 4
            x:Math.random()*100,y:Math.random()*100,opacity:Math.random()*0.5 + 0.5, animationDuration: Math.random()*4 + 2
        })
    }
    setStars(newStars)
  }


  const generateMeteors = ()=>{
    const numOfMeteors = 4;
    const newMeteors = []

    for(let i=0;i<numOfMeteors;i++){
        newMeteors.push({
            id:i, size: Math.random()*2 + 1, //size bw 1 and 4
            x:Math.random()*100,y:Math.random()*20,delay:Math.random()*15, animationDuration: Math.random()*3 + 3
        })
    }
    setMeteors(newMeteors)
  }
  return (
    <div className='fixed inset-0 overflow-hidden pointer-events-none z-0'>{stars.map((star)=>(
        <div key={star.id} className='star animate-pulse-subtle' style={{
            width: star.size + "px", height: star.size + "px" , left: star.x + "%" , top: star.y + "%", opacity: star.opacity, animationDuration: star.animationDuration +"s"
        }} />
        // index.css contains the star class
    ))}
    
    {meteors.map((meteor)=>(
        <div key={meteor.id} className='meteor animate-meteor' style={{
            width: meteor.size*20 + "px", height: meteor.size*2 + "px" , left: meteor.x + "%" , top: meteor.y + "%", animationDelay: meteor.delay, animationDuration: meteor.animationDuration +"s"
        }} />
        // index.css contains the star class
    ))}
    
    </div>
  )
}

export default Background