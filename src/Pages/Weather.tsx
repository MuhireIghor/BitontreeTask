import Sidebar from "../Components/Sidebar"
import WeatherStats from "../Components/WeatherStats"

const Weather = ()=>{
    return(
        <div className="flex bg-[#EBF0F4] h-screen p-4 ">
<Sidebar activeLink="Weather" />
<WeatherStats />

        </div>
    )
}
export default Weather;