import { FC } from "react";
import Sidebar from "../Components/Sidebar";
import MainContent from "../Components/MainContent";

const Home:FC = ()=>{
    return(
   <div className="flex bg-[#EBF0F4]  h-screen px-4 ">
    <Sidebar activeLink="Add User"  />
    <MainContent />

   </div>
    )
}
export default Home;