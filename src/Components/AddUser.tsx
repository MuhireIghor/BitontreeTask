const AddUser = ()=>{
    return(
        <div className="flex flex-col h-screen w-full  ">
            <p className="">Add User</p>
            <div className="w-full h-full flex flex-col bg-white items-stretch space-y-12 p-8 ">
<div className="flex mx-40">
    <label className="text-[gray] mr-4">Username</label>
    <input type="text" className="w-4/5 bg-gray-200 rounded-[5px] p-1 mx-[16px]"/>
</div>
<div className="flex mx-40">
    <label className="text-[gray] mr-4">Email</label>
    <input type="email" className="w-full bg-gray-200 rounded-[5px] p-1 ml-[50px] mx-12"   />
</div>
<div className="flex mx-40">
    <label className="text-[gray] mr-4">Phone</label>
    <input type="tel" className="w-full bg-gray-200 rounded-[5px] p-1 mx-12"   />
</div>
<div className="flex mx-40 ">
    <label className="text-[gray] mr-4">DOB</label>
    <input type="date" className="w-full bg-gray-200 rounded-[5px] p-1 mx-12 ml-[60px]"   />
</div>
<div className="flex mx-40">
    <label className="text-[gray] mr-4">Date</label>
<select placeholder="state" >
    <option value={"Gujarair"}>Gujarair</option>
    <option value={"Gujarair"}>Gujarair</option>
    <option value={"Gujarair"}>Gujarair</option>
</select>
</div>

            </div>

        </div>
    )
}
export default AddUser;