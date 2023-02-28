import React from "react";
import EventCard from "./../../components/EventCard/EventCard";
import holi from '../Home/asset/Holi.jpg'
import Adventure from '../Home/asset/Adventure.png'
import ArtCrafts from '../Home/asset/ArtCrafts.png'
import Comedy from '../Home/asset/Comedy.png'
import Games from '../Home/asset/Games.jpg'
import Kids from '../Home/asset/Kids.jpg'
import KittyParty from '../Home/asset/KittyParty.png'
import Music from '../Home/asset/Music.jpg'
import Trip from '../Home/asset/Trip.png'
import Yoga from '../Home/asset/Yoga.png'


const Featured = () => {
  
  const imageDatabase = [
    {  id:1,
      src: holi, alt: 'Image 1', caption: 'Caption 1'
     },
    { id:2,
       src: Adventure, alt: 'Image 2', caption: 'Caption 2'
   },
    {  id:3,
      src:KittyParty , alt: 'Image 3', caption: 'Caption 3'
     }
   ,
    {  id:4,
      src:Music , alt: 'Image 3', caption: 'Caption 3'
     },
   
    {  id:5,
      src:Trip , alt: 'Image 3', caption: 'Caption 3'
     },
   
    {  id:6,
      src:Kids , alt: 'Image 3', caption: 'Caption 3'
     },
   
    {  id:7,
      src:Comedy , alt: 'Image 3', caption: 'Caption 3'
     },
   
    {  id:8,
      src:Games , alt: 'Image 3', caption: 'Caption 3'
     },
   
    {  id:9,
      src:Yoga , alt: 'Image 3', caption: 'Caption 3'
     }
   
   
   
  ];
  return (
    <>
      <div className="gap-6">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" >
  {imageDatabase.map((image) => (
    <li key={image.id} >
  
      <EventCard  className ="gap-6" src={image.src} alt={image.alt} />
      
    </li>
  ))}
</ul>

        

      </div>
      {/* <button>Explore Events</button> */}
    </>
  );
};

export default Featured;
