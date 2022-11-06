import { useEffect } from 'react';
import axios from 'axios';
const WeatherInfo = ()=>{
    const API = axios.create({baseURL:"http://api.weatherapi.com/v1"});
 useEffect(()=>{
    const location = "kigali";
    const API_KEY="c76ca0b1bf7a41d1bf1202636220511";
    let region = "Kigali";
    const fetchUrl = `/current.json?key=${API_KEY}&q=${region}&aqi=no`;
    const fetchWeather = async()=>{
        const {data} =  await API.get(fetchUrl); 
        console.log(data);
            }
            fetchWeather();
 })
    useEffect(()=>{

    })
    return(
        <div className="flex flex-col  flex-shrink-3/4">
   ho

        </div>
    )
}
export default WeatherInfo;