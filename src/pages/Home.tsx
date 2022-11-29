import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = (props: any) => {
  const socket = props.socket;
  const navigate = useNavigate();
  const FILTERS = [
    "provider",
    "course_level",
    "query",
    "rating",
    "max_price",
    "min_price",
    "competency",
    "exams",
    "subjects",
    "isCertified",
    "course_type",
    "seller_name",
    "seller_email",
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
    <div>
      <div>
        {FILTERS.map((filter): any => {
          return (
            <div>
              <label htmlFor={filter} id={filter}>
                {" "}
                {filter}
              </label>
              <input
                type="text"
                name={filter}
                onChange={(e) => {
                  setFilters({ ...filters, [filter]: e.target.value });
                  console.log("filters: ", filters);
                }}
              />
            </div>
          );
        })}
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Home;
