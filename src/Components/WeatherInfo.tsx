import { useEffect } from 'react';
import axios from 'axios';
const WeatherInfo = ()=>{
    const API = axios.create({baseURL:"http://api.weatherapi.com/v1"});
 useEffect(()=>{
    const location = "kigali";
    const fetchUrl = `current.json?key=c76ca0b1bf7a41d1bf1202636220511&city name=${location}`;
    const fetchWeather = async()=>{
        const {data} =  await API.get(fetchUrl);
        console.log(data);
            }
            fetchWeather();
 },[fetchUrl])
    useEffect(()=>{

    })
    return(
        <div className="flex flex-col  flex-shrink-3/4">
   ho

        </div>
    )
}
export default WeatherInfo;