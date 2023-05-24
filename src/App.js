import { Sidebar } from "./Entities/Sidebar";
import { Workspace } from "./Entities/Workspace";
import './index.css';

function App() {
  return (
    <div className="mainContainer">
      <Sidebar />
      <Workspace />
    </div>
  );
}

export default App;
