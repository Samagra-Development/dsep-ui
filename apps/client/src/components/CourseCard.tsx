import { FC, useMemo } from "react";
import Books from "../assets/images/books.jpg";
import { LinkContainer } from "react-router-bootstrap";
import { CourseType } from "../types/courses";
import Rating from "./Ratings";

const CourseCard: FC<{ course: CourseType }> = ({ course }) => {
  const imageUrl = useMemo(
    () => course?.descriptor?.images?.[0] ?? Books,
    [course, Books]
  );

  return (
    <LinkContainer to={`/courses/${course?.id}`} style={{ cursor: "pointer" }}>
      <div className="mb-4">
        <a
          href="#"
          className="flex items-center bg-white rounded-lg shadow-md md:flex-row"
        >
          <div className="p-4">
            <div className="flex">
              <img
                className="w-[200px] rounded m-2"
                src={imageUrl}
                alt="courseImage"
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-xl tracking-tight text-gray-900 font-bold">
                  {" "}
                  {course?.descriptor?.name}
                </h5>
                <h6 className="font-medium">{course?.tags?.offeringInstitue}</h6>
                <Rating value={4} size={1} />
              </div>
            </div>

              <div className="pt-2 pb-2 font-regular">
                This course will enlighten the knowledge of atoms and molecules
                and build up the pre-requisite knowledge for all science and
                engineering fields.
              </div>
          </div>
          <div className="w-[2px] h-[200px] bg-[#ECEDEC]"></div>
          <div className="ml-2 pt-4 pb-2 flex-col w-[250px]">
            <span
              className="inline-block bg-red-200 rounded-full px-3 py-1 text-sm text-red-700 mr-2 mb-2 font-medium break-keep"
              onClick={(ev) => ev.preventDefault()}
            >
              {course?.category_id.replace(/_/g, ' ')}
            </span>

            <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-medium text-green-700 mr-2 mb-2">
              {course?.price?.value} {course?.price?.currency}
            </span>
          </div>
        </a>
      </div>

    </LinkContainer>
  );
};

export default CourseCard;
