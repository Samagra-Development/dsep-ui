import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeIllustartion from "../assets/images/illustration.svg";
import LoginIllustration from "../assets/images/login.svg";

const Home = (props: any) => {
  const socket = props.socket;
  const navigate = useNavigate();
  const FILTERS = [
    "Username",
    "Password",
    // "course_level",
    // "query",
    // "rating",
    // "max_price",
    // "min_price",
    // "competency",
    // "exams",
    // "subjects",
    // "isCertified",
    // "course_type",
    // "seller_name",
    // "seller_email",
  ];

  const [filters, setFilters] = useState({});
  const [connected, setIsConnected] = useState<boolean>(false);
  useEffect(() => {
    socket.on("connect", () => {
      console.log("socket connected");
      setIsConnected(true);
    });

    socket.on("disconnect", () => {
      setIsConnected(false);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("response");
    };
  }, []);

  const handleSubmit = () => {
    props.socket.emit("search", filters);
    navigate("/courses");
  };
  return (
    <div className="grid grid-cols-2 gap-4 min-h-screen">
      <div className="col-span-1">
        <div className="flex flex-col justify-center items-center min-h-screen">
          <div className="px-11 mx-5 py-11 my-10">
            <img className="m-auto mb-5 w-8/12" src={LoginIllustration} alt="" />
            <div>
              <h1 className="text-5xl text-sky-500 font-bold mb-8 uppercase text-center">
                welcome
              </h1>
            </div>
            <form className="mt-10">
              {FILTERS.map((filter, index): any => {
                return (
                  <div className="mb-4" key={index}>
                    <label
                      htmlFor={filter}
                      id={filter}
                      className="text-sky-500 block text-md font-medium mb-2"
                    >
                      {filter}
                    </label>
                    <input
                      type="text"
                      name={filter}
                      onChange={(e) => {
                        setFilters({ ...filters, [filter]: e.target.value });
                        console.log("filters: ", filters);
                      }}
                      className={`border-b-2 border-sky-500 w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline`}
                    />
                  </div>
                );
              })}
              <button
                type="submit"
                onClick={handleSubmit}
                className="bg-sky-500 hover:bg-sky-600 text-white font-medium py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline mt-4 w-full text-lg"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="col-span-1 flex justify-center items-center min-h-screen">
        <img
          src={HomeIllustartion}
          className="ml-auto w-fit h-screen icons-styling"
        />
      </div>
    </div>
  );
};

export default Home;