import { ChangeEvent, useState } from "react";
const AddUser = ()=>{
    const initialState = {
        userName:'',email:'',phone:'',dob:'',state:''
    }
    const[err,setErr] = useState("");
    const [formdata,setFormData] = useState(initialState);
    
const handleChange = (e:any)=>{
    setFormData({...formdata,[e.target.name]:e.target.value});
    console.log(formdata);
    if(typeof(e.target.value) != e.target.type){
        setErr(`Input ${e.target.name} should have a type of ${e.target.type}`)
    }
    
    
}
    return(
      
        <div className="flex flex-col h-screen w-full  ">
            <p className="">Add User</p>
            <div className="w-full h-full flex flex-col bg-white items-stretch space-y-12 p-8 ">
                {err &&(
                    <div className="text-red-500">
                        {err}
                    </div>
                )}
<div className="flex mx-40">
    <label className="text-[gray] mr-4">Username</label>
    <input type="text" className="w-4/5 bg-gray-200 rounded-[5px] p-1 mx-[16px]" name="userName" onChange={handleChange} />
</div>
<div className="flex mx-40">
    <label className="text-[gray] mr-4">Email</label>
    <input type="email" className="w-full bg-gray-200 rounded-[5px] p-1 ml-[50px] mx-12"  name="email"  onChange={handleChange}  />
</div>
<div className="flex mx-40">
    <label className="text-[gray] mr-4">Phone</label>
    <input type="number" className="w-full bg-gray-200 rounded-[5px] p-1 mx-12"  name="phone" onChange={handleChange} />
</div>
<div className="flex mx-40 ">
    <label className="text-[gray] mr-4">DOB</label>
    <input type="date" className="w-full bg-gray-200 rounded-[5px] p-1 mx-12 ml-[60px]" name="dob" onChange={handleChange} />
</div>
<div className="flex mx-40">
    <label className="text-[gray] mr-4">Date</label>
<select placeholder="state" name="state" onChange={handleChange}  >
    <option value={"Gujarair"} >Gujarair</option>
    <option value={"Gujarair"}>Gujarair</option>
    <option value={"Gujarair"}>Gujarair</option>
</select>
</div>

            </div>

        </div>
    )
}
export default AddUser;