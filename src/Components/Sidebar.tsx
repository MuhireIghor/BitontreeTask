import { Navlinks } from "../Data/Navlinks";
import { Link } from 'react-router-dom'
type SidebarProps = {
    activeLink: string
}
const Sidebar = ({ activeLink }: SidebarProps) => {
    return (
        <div className=" mx-4 basis-1/4 flex flex-col bg-white rounded-[30px] px-16 py-8 w-[20vw] rounded-[15px space-y-4">
            <div className="flex text-[#58c8ff] ">
                <p className="text-3xl font-bold " >B</p>
                <div className="flex flex-col">
                    <p className="text-xl font-semibold">itontree</p>
                    <p className="text-xs tracking-[10px] font-extralight">SOLUTIONS</p>
                </div>
            </div>
            <div className="bg-[#58c8ff]  w-full h-[1px]" />
            {
                Navlinks.map((link, index) => (
                    <div key={index} className={activeLink === link.linkName ? "bg-[#A1E0FF] text-white rounded-xl p-4 space-x-4 flex" : "text-[#A1E0FF] bg-white flex rounded-xl p-4 space-x-4 "}>
                        <img src={link.icon} className={activeLink === link.linkName ? "bg-white" : "bg-transparent"} />
                        <Link to={`../${link.linkName}`}><p>{link.linkName}</p></Link>

                    </div>
                ))
            }

        </div>
    )
}
export default Sidebar;