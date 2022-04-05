import './resources/App.css'
import {ZoomMtg} from "@zoomus/websdk";
import {Link, Route, Router, Routes} from "react-router-dom";
import {Calendar} from "./pages/Calendar";
import {Home} from "./pages/Home";

ZoomMtg.setZoomJSLib('https://source.zoom.us/2.2.0/lib', '/av');

ZoomMtg.preLoadWasm();
ZoomMtg.prepareWebSDK();
// loads language files, also passes any error messages to the ui
ZoomMtg.i18n.load('en-US');
ZoomMtg.i18n.reload('en-US');

/**
 * TODO so data is set statically in zoom.js rn. Not sure what the best solution to getting andd passing it
 * to the file since it is popped out. Likely just best too make a variable or object to store stuff and populate it.
 */
function App() {
  return (
      <>
          <div className="App">
            <h1>Hi I'm a router!</h1>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calendar" element={<Calendar />} />
          </Routes>
      </>
  );
}

export default App;
