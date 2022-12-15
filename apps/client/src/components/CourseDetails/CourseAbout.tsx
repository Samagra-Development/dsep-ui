import { Card } from "flowbite-react";
import { FC } from "react";
import { CourseType } from "../../types/courses";
import DetailsHeader from "./DetailsHeader";

const CourseAbout: FC<{ course: CourseType }> = ({ course }) => {
  return (
    <>
      <DetailsHeader course={course} />
      <Card>
        <div className="py-10">
          <div className="px-6 py-5 pb-2">
            <span
              className="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-red-700 mr-2 mb-2"
              onClick={(ev) => ev.preventDefault()}
            >
              {course?.category_id}
            </span>

            <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-700 mr-2 mb-2">
              {course?.price?.value} {course?.price?.currency}
            </span>
          </div>
        </div>
        <div>
          <p className="px-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolores
            unde laboriosam atque, labore ratione in sunt molestias nobis
            repudiandae voluptatum eveniet cumque voluptatem? A odit optio porro
            cum quasi facere reprehenderit sed amet quod autem illum, error
            tenetur? Error veritatis provident ratione unde cum nemo
            consequuntur culpa ipsam labore debitis veniam repellat doloribus,
            ipsum alias aperiam ducimus, in aliquid animi placeat,
            exercitationem officiis! Repellendus doloribus, cumque officia
            aliquam consectetur laboriosam recusandae minus in minima odit nihil
            eligendi sapiente ipsum exercitationem commodi? Doloremque earum
            harum aut quas laborum quam. Recusandae, tempore tempora doloribus
            accusantium iure dolor doloremque quo nobis perspiciatis saepe
            officiis quia voluptatum numquam neque itaque est perferendis,
            quidem non reiciendis at veritatis illum! Reprehenderit impedit
            aspernatur cum suscipit deleniti est animi tenetur dicta eius ex
            architecto quisquam ab, doloribus inventore enim minus laboriosam
            accusamus qui molestiae non tempore cumque ad. Asperiores ducimus
            dolorem, eius quia quisquam animi repellat, id pariatur possimus
            officiis quod molestias enim non ipsam sed cum vero fugit totam
            suscipit. Error vitae sunt hic debitis nesciunt et nobis pariatur
            repellendus vel quam iusto quas aliquam minima, mollitia sint
            repellat ea eligendi consectetur eius accusamus natus minus!
            Corporis, odit vitae itaque architecto obcaecati cupiditate, rerum
            earum tempore deleniti nobis eum. Eaque eos iure nisi porro, sint
            dolorum quaerat doloremque nihil sit nobis cupiditate eum vel, qui
            quos, commodi laudantium saepe. Quae ratione corporis, aperiam optio
            non obcaecati, nesciunt maiores dolorum repellat at magnam? Vel
            facilis doloremque aut, illum fugit earum libero, exercitationem
            saepe architecto in eius nobis! Aliquid molestiae voluptatibus
            dolore corrupti beatae facere, error, ducimus ipsum itaque
            accusantium numquam possimus iste dicta? Vero laboriosam velit nam
            ipsam in, earum assumenda neque dolores repudiandae facilis et!
            Harum obcaecati autem deleniti architecto consequatur repellat
            accusamus non odio, aliquam assumenda tempora sequi illum similique
            id, dolores repellendus. Laudantium aut quaerat sed unde cum est
            porro beatae, veniam iusto in, voluptas delectus magnam, totam
            maxime enim doloribus error cumque sint. Quos sint deleniti animi
            sunt mollitia obcaecati vero numquam autem accusamus quis, fugit
            repellat, blanditiis magni, ex sapiente. Explicabo quod eius optio
            quasi eaque ratione neque, quas facere quis cum id ipsa,
            voluptatibus amet corrupti et obcaecati quos consectetur veritatis
            voluptatem sit cupiditate sed alias fugit repudiandae? Praesentium a
            aut dolore. Magnam nisi necessitatibus soluta, quas similique ad
            unde, magni culpa itaque atque labore debitis fugit pariatur dolores
            vitae iure reprehenderit nobis ipsa tenetur! Nostrum voluptatibus
            quasi laudantium vero!
          </p>
        </div>
      </Card>
    </>
  );
};

export default CourseAbout;
