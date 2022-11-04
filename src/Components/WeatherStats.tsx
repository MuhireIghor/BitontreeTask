import WeatherInfo from "./WeatherInfo";
import Welcome from "./Welcome"

const WeatherStats = ()=>{
    return(
        <div className="flex flex-col basis-3/4  h-full">
            <Welcome />
            <WeatherInfo />

        </div>
    )
}
export default WeatherStats;