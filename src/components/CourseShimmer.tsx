import { map } from 'lodash';
import React from 'react'
//@ts-ignore
import { ShimmerContentBlock } from "shimmer-react";
const CourseShimmer = () => {
  return (
    <div>
      {map(Array.from(Array(5).keys()),()=>  <ShimmerContentBlock title text cta thumbnailWidth={370} thumbnailHeight={370} />)}
        
    </div>
  )
}

export default CourseShimmer