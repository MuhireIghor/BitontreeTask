import { ChangeEvent, useState, useEffect } from "react";
import { useUserContext } from "../contexts/AddUser";
const AddUser = () => {
    const userRegex = /^[a-zA-z0-9(?\s)]{8,75}$/;
    const emailRegex = /^[a-zA-Z0-9]{3,}@(gmail|yahoo)\.(fr|com)$/i;
    const phoneRegex = /^[0-9]{10,12}$/;
    const [validName, setValidName] = useState<boolean>(false);
    const [validEmail, setValidEmail] = useState<boolean>(false);
    const [validPhone, setValidPhone] = useState<boolean>(false);
    const [userfocus, setUserFocus] = useState<boolean>(false);
    const [emailfocus, setEmailFocus] = useState<boolean>(false);
    const [phonefocus, setPhoneFocus] = useState<boolean>(false);
    const [err, setErr] = useState("");
    const [formdata, setFormData] = useState({
        userName: '', email: '', phone: '', dob: '', state: ''
    });
    const {createUser} = useUserContext();

    useEffect(() => {
        const result = userRegex.test(formdata.userName);
        setValidName(result);
    }, [formdata.userName])
    useEffect(() => {
        const result = emailRegex.test(formdata.email);
        setValidEmail(result);
    }, [formdata.email])
    useEffect(() => {
        const result = phoneRegex.test(formdata.phone);
        setValidPhone(result);
    }, [formdata.phone])
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formdata, [name]: value });

    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formdata);
        createUser({name:formdata.userName,age:formdata.dob as unknown as number,state:formdata.state})
        // localStorage.setItem('user', JSON.stringify(formdata))
        // setFormData({ userName: '', email: '', phone: '', dob: '', state: '' });
    }
    return (
        <div className="flex flex-col h-screen w-full py-4 ">
            <p>Add User</p>
            <form onSubmit={handleSubmit}>
                <div className="w-full h-[39rem] rounded-[10px] flex flex-col bg-white space-y-16 p-20 ">
                    {err && (
                        <div className="text-red-500">
                            {err}
                        </div>
                    )}
                    <div className="flex flex-col items-center">

                        <div className="flex  mx-40 justify-between w-1/2">
                            <label className="text-[gray] mr-4">Username</label>
                            <input
                                type="text"
                                className="w-full bg-gray-200 rounded-[5px] p-1  mr-12 ml-4 "
                                name="userName"
                                value={formdata.userName}
                                onChange={handleChange}
                                onFocus={() => setUserFocus(true)}
                                onBlur={() => setUserFocus(false)}
                                aria-invalid={validName ? "false" : "true"}
                                aria-describedby="uidnote"
                            />
                        </div>
                        <p id="uidnote" className={userfocus && formdata.userName && !validName ? "text-[red] block w-1/4" : "hidden"}> A valid user Name must have a minimu of 8 characters and a maximum of 75 characters composed of alphanumeric characters and underscore only</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex mx-40 justify-between w-1/2">
                            <label className="text-[gray] mr-4">Email</label>
                            <input
                                type="email"
                                className="w-full bg-gray-200 rounded-[5px] p-1 mx-12"
                                name="email"
                                value={formdata.email}
                                onChange={handleChange}
                                onFocus={() => setEmailFocus(true)}
                                onBlur={() => setEmailFocus(false)}
                                aria-invalid={validEmail ? "false" : "true"}
                                aria-describedby={"emailNote"}
                            />
                        </div>
                        <p id="emailNote" className={emailfocus && formdata.email && !validEmail ? "text-[red] block w-1/4" : "hidden"}>You must enter a valid email .</p>
                    </div>
                    <div className="flex flex-col items-center justify-center ">
                        <div className="flex mx-40 justify-between w-1/2">
                            <label className="text-[gray] mr-4">Phone</label>
                            <input type="number"
                                className="w-full bg-gray-200 rounded-[5px] p-1 mr-12 ml-10"
                                name="phone"
                                value={formdata.phone}
                                onChange={handleChange}
                                onFocus={() => setPhoneFocus(true)}
                                onBlur={() => setPhoneFocus(false)}
                                aria-invalid={validPhone ? "false" : "true"}
                                aria-describedby={"phoneNote"}

                            />
                        </div>
                        <p className={phonefocus && formdata.phone && !validPhone ? "text-[red] block w-1/4" : "hidden"} id="phoneNote">Enter a valid phone Number between 10 and 12 characters</p>
                    </div>
                    <div className="flex flex-col items-center justifty-center">
                        <div className="flex mx-40 justify-between w-1/2 ">
                            <label className="text-[gray] mr-4">DOB</label>
                            <input type="date" className="w-full bg-gray-200 rounded-[5px] p-1 mx-12 " name="dob" onChange={handleChange} value={formdata.dob} />
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center ">
                        <div className="flex mx-40 justify-between w-1/2">
                            <label className="text-[gray] mr-4">Date</label>
                            <select placeholder="state" name="state" onChange={handleChange} className="w-full bg-gray-200 rounded-[5px] p-1 mx-12" >
                                <option value={"Gujarair"} >Gujarair</option>
                                <option value={"Gujarair"}>Gujarair</option>
                                <option value={"Gujarair"}>Gujarair</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center ">
                        <button type="submit" className="flex items-center justify-center px-6 py-2  rounded bg-blue-400 text-white  font-semibold text-lg">
                            submit
                        </button>
                    </div>
                </div>
            </form>

        </div>
    )
}
export default AddUser;