import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const removeAppCookies = (): void => {
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      const cookieName = cookie.split("=")[0];
      // Set the cookie's value to an empty string and an expired date to delete it
      document.cookie = `${cookieName}=; path=/;`;
    }
    navigate("/");
  };

  return (
    <button className="text-white font-bold text-lg" onClick={removeAppCookies}>
      Logout
    </button>
  );
};

export default Logout;
