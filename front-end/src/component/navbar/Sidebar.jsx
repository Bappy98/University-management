import { AiOutlineClose } from "react-icons/ai";
const Sidebar = ({ hanleNavButto, open }) => {
  return (
    <div>
      <div
        onClick={hanleNavButto}
        className={`fixed h-screen left-0 bg-gray-900 opacity-90  ${
          open ? "translate-x-[-300px]" : "w-[300px] "
        }  transition-transform duration-300 ease-in-out   text-white opacity-100 top-0  p-8 z-50`}
      >
        <div className="flex justify-end ">
          <div className="flex justify-center items-center p-2 bg-white text-black rounded-full">
            <AiOutlineClose size={30} />
          </div>
        </div>
        <div className="py-16 ">
          <ul className="flex flex-col divide-y-2 uppercase w-32">
            <li>home</li>
            <li>Facaulty</li>
            <li>Admission</li>
            <li>claubs</li>
            <li> Activities</li>
            <li>contact</li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
