import { ChangeEvent, useEffect,useState } from 'react';
import axios from 'axios';
const WeatherInfo = ()=>{
    const API = axios.create({baseURL:"http://api.weatherapi.com/v1"});
    const[temperature,setTemperature] = useState("");
    const[humidity,setHumidity] = useState("");
    const[pressure,setPressure] = useState("");
    const[location,setLocation] = useState("");

    const handleLocation = (e:ChangeEvent<HTMLInputElement>)=>{
        setLocation(e.target.value);
        console.log(location);
    }
const handleSubmit = (e:ChangeEvent<HTMLFormElement>)=>{
    e.preventDefault();
}

 useEffect(()=>{
    const API_KEY="c76ca0b1bf7a41d1bf1202636220511";

    const fetchUrl = `/current.json?key=${API_KEY}&q=${location}&aqi=no`;

    
    const fetchWeather = async()=>{
        const {data} =  await API.get(fetchUrl); 
       setHumidity(data)
    return data;
            }
        const answer= fetchWeather();

 })

    return(
        <div className="flex flex-col h-screen">
<div className="flex flex-col justify-center">Weather</div>
<div className='flex flex-col p-8 items-center  bg-white p-12 h-full '>
    <div className="formContainer flex flex-col items-center justify-center ">
    <form action="#" method='POST' className='flex flex-col' onSubmit={handleSubmit}>
<button >Get Weather</button>
<input type={'text'} value={location} onChange = {handleLocation} name="location" className="border-xl bg-gray-200 p-4 rounded-[5px] text-center outline-none " placeholder='Enter your location'/>
        </form>
    </div>
    <div className='flex  justify-center items-center text-center bg-[#A2E0FF] w-2/3 h-[212px] rounded-[23px] my-24 grid grid-cols-3 divide-x-  divide-white text-white '>
<div className='flex flex-col h-full '>
    <div className="main">Temperature</div>
    <div className='my-12 font-bold text-6xl'>{temperature}</div>
</div>
<div className='border-l-4 border-white h-full'>
    <div className="main">Humidity</div> 
    <div className='my-12 font-bold text-6xl'>{humidity}</div>
        </div>
<div className='border-l-4 border-white h-full'>
    <div className="main">Pressure  </div>
    <div className='my-12 font-bold text-6xl'>{pressure}</div>
</div>
    </div>

 
</div>

        </div>
    )
}
export default WeatherInfo;