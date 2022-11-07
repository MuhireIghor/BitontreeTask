import dateFormat from 'dateformat';
const Welcome = ()=>{
    let now = new Date();
    return(
        <div>
       <div className="bg-white p-[10px] flex rounded-[10px] h-auto ">
           { dateFormat(now,"dddd mmmm dS yyyy h:MM:ss TT")}
            </div>
        </div>
    )
}
export default Welcome;