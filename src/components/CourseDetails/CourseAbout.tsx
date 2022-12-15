import { Card } from "flowbite-react";
import { FC } from "react";
import { CourseType } from "../../types/courses";
import DetailsHeader from "./DetailsHeader";

const CourseAbout: FC<{ course: CourseType }> = ({ course }) => {
  return (
    <>
      <DetailsHeader course={course} />
      <div className="pt-10 pb-6 bg-white">
        <div className="px-6">
          <span
            className="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-red-700 mr-2"
            onClick={(ev) => ev.preventDefault()}
          >
            {course?.category_id}
          </span>

          <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-700 mr-2">
            {course?.price?.value} {course?.price?.currency}
          </span>
        </div>
      </div>
      <div className="px-6 bg-white pb-10 font-regular">
        <div className="text-[22px] font-bold">Classical Physics</div>
        <p className="mt-2">
          Physics is exciting in many ways. To some people the excitement comes
          from the elegance and universality of its basic theories, from the
          fact that a few basic concepts and laws can explain phenomena covering
          a large range of magnitude of physical quantities. To some others, the
          challenge in carrying out imaginative new experiments to unlock the
          secrets of nature, to verify or refute theories, is thrilling. Applied
          physics is equally demanding. Application and exploitation of physical
          laws to make useful devices is the most interesting and exciting part
          and requires great ingenuity and persistence of effort.
        </p>
        <div className="text-[22px] font-bold mt-4">
          Physics, Technology and Society
        </div>
        <p className="mt-2">
          The connection between physics, technology and society can be seen in
          many examples. The discipline of thermodynamics arose from the need to
          understand and improve the working of heat engines. The steam engine,
          as we know, is inseparable from the Industrial Revolution in England
          in the eighteenth century, which had great impact on the course of
          human civilisation. Sometimes technology gives rise to new physics; at
          other times physics generates new technology. An example of the latter
          is the wireless communication technology that followed the discovery
          of the basic laws of electricity and magnetism in the nineteenth
          century. The applications of physics are not always easy to foresee.
          As late as 1933, the great physicist Ernest Rutherford had dismissed
          the possibility of tapping energy from atoms. But only a few years
          later, in 1938, Hahn and Meitner discovered the phenomenon of
          neutron-induced fission of uranium, which would serve as the basis of
          nuclear power reactors and nuclear weapons. Yet another important
          example of physics giving rise to technology is the silicon ‘chip’
          that triggered the computer revolution in the last three decades of
          the twentieth century
        </p>
      </div>
    </>
  );
};

export default CourseAbout;
