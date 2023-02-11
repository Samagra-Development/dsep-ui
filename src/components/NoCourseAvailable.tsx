import React,{FC} from 'react'
import imageUrl from '../assets/images/not-available.jpeg'
const NoCourseAvailable:FC = () => {
  return (
    <div className="mb-4 flex items-center bg-white rounded-lg shadow-md md:flex-row">
        <div className="flex items-center bg-white rounded-lg shadow-md md:flex-row">
      
          <div className="p-4">
            <div className="flex">
              <img
                className="w-[200px] rounded m-2"
                src={imageUrl}
                alt="courseImage"
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-xl tracking-tight text-gray-900 font-bold">
             
                 No Upcoming Courses Available
     
                </h5>
               
              </div>
            </div>

             
          </div>
         
       
      </div>
      
      </div>
  )
}

export default NoCourseAvailable