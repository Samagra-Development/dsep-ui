import { Card } from "flowbite-react";
import React, { FC, useMemo } from "react";
import Books from "../assets/images/books.jpg";
import { LinkContainer } from 'react-router-bootstrap';
const CourseCard: FC<{
    course: unknown;
}> = ({ course }) => {
    console.log("bnm:", { course });
    const imageUrl = useMemo(() => course?.descriptor?.images?.[0] ?? Books, [course, Books]);

    return (
        // <div className="rounded overflow-hidden shadow-lg bg-white font-regular my-4 flex">
        //     <div className="p-2">                
        //          <img className="w-[200px]" src={imageUrl} alt="Books" />
        //     </div>

        //     <div>
        //         <div className="px-6 py-4">
        //             <div className="font-bold text-xl mb-2">
        //                 {course?.descriptor?.name}
        //             </div>
        //             <p className="text-gray-700 text-base">
        //                 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        //                 Voluptatibus quia, nulla! Maiores et perferendis eaque,
        //                 exercitationem praesentium nihil.
        //             </p>
        //         </div>
        //         <div className="px-6 pt-4 pb-2">
        //             <span className="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-red-700 mr-2 mb-2">
        //                 {course?.fulfilments?.type}
        //             </span>
        //             <span className="inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-yellow-700 mr-2 mb-2">
        //                 {course?.provider?.id}
        //             </span>
        //             <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-700 mr-2 mb-2">
        //                 {course?.price?.value} {course?.price?.currency}
        //             </span>
        //         </div>
        //     </div>

        // </div>
        <LinkContainer to={`/courses/${course?.id}`} style={{ cursor: 'pointer' }}>
        <div className="mb-3">
            <Card
                horizontal={true}
                imgSrc={imageUrl}
            >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {course?.descriptor?.name}
                </h5>
               
                <p className="font-normal text-gray-700 dark:text-gray-400">
               Provided By: {course?.tags?.offeringInstitue}
                </p>
                <h5> {course?.tags?.instructors}</h5>
                <div className="px-6 pt-4 pb-2">
                    {/* <span className="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-red-700 mr-2 mb-2">
                        {course?.fulfilments?.type}
                    </span> */}
                    <span className="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-red-700 mr-2 mb-2" onClick={ev=>ev.preventDefault()}>
                      {course?.category_id}  
                    </span>
                    {/* <span className="inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-yellow-700 mr-2 mb-2">
                        {course?.tags?.offeringInstitue}
                    </span> */}
                    <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-700 mr-2 mb-2">
                        {course?.price?.value} {course?.price?.currency}
                    </span>
                </div>
            </Card>
        </div>
        </LinkContainer>
    );
};

export default CourseCard;
