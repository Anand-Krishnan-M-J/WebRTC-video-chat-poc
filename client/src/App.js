import Notifcation from "./components/Notifications";
import Options from "./components/Options";
import VideoPlayer from "./components/VideoPlayer";

function App() {
    return (<>
        Video chat app
        <VideoPlayer/>
        <Options/>
        <Notifcation/>
    </>);
}

export default App;
