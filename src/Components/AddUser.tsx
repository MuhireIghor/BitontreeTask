import { ChangeEvent, useState } from "react";
const AddUser = () => {

    const [err, setErr] = useState("");
    const [formdata, setFormData] = useState({
        userName: '', email: '', phone: '', dob: '', state: ''
    });
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formdata, [name]: value });
        // if (typeof (e.target.value) != e.target.type) {
        //     setErr(`Input ${e.target.name} should have a type of ${e.target.type}`)
        // }
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formdata);
        setFormData({userName:'',email:'',phone:'',dob:'',state:''});
    }
    return (
        <div className="flex flex-col h-screen w-full  ">
            <p className="">Add User</p>
            <form onSubmit={handleSubmit}>
                <div className="w-full h-full flex flex-col bg-white items-stretch space-y-12 p-8 ">
                    {err && (
                        <div className="text-red-500">
                            {err}
                        </div>
                    )}

                    <div className="flex mx-40">
                        <label className="text-[gray] mr-4">Username</label>
                        <input type="text" className="w-4/5 bg-gray-200 rounded-[5px] p-1 mx-[16px]" name="userName" onChange={handleChange} value={formdata.userName} />
                    </div>
                    <div className="flex mx-40">
                        <label className="text-[gray] mr-4">Email</label>
                        <input type="email" className="w-full bg-gray-200 rounded-[5px] p-1 ml-[50px] mx-12" name="email" onChange={handleChange} value={formdata.email} />
                    </div>
                    <div className="flex mx-40">
                        <label className="text-[gray] mr-4">Phone</label>
                        <input type="number" className="w-full bg-gray-200 rounded-[5px] p-1 mx-12" name="phone" onChange={handleChange} value={formdata.phone} />
                    </div>
                    <div className="flex mx-40 ">
                        <label className="text-[gray] mr-4">DOB</label>
                        <input type="date" className="w-full bg-gray-200 rounded-[5px] p-1 mx-12 ml-[60px]" name="dob" onChange={handleChange} value={formdata.dob} />
                    </div>
                    <div className="flex mx-40">
                        <label className="text-[gray] mr-4">Date</label>
                        <select placeholder="state" name="state" onChange={handleChange}  >
                            <option value={"Gujarair"} >Gujarair</option>
                            <option value={"Gujarair"}>Gujarair</option>
                            <option value={"Gujarair"}>Gujarair</option>
                        </select>
                    </div>
                    <button type="submit" className="flex items-center justify-center px-6 py-2  rounded bg-blue-500 text-white  font-semibold text-lg">
                        submit
                    </button>
                </div>
            </form>

        </div>
    )
}
export default AddUser;