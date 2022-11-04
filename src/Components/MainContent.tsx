import AddUser from './AddUser';
import Welcome from './Welcome';
const MainContent = () => {
    return (
        <div className=" basis-3/4 flex flex-col">
            <Welcome />
            <AddUser />
        </div>
    )
}
export default MainContent;