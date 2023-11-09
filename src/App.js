import { useContext } from "react";
import { ContextData } from "./context/Context";
import DarkTable from "./Table";
import FormModal from "./Modal";
import './Main.css';

function App() {
  const { modal, openModal } = useContext(ContextData);

  return (
    <div className="App container mt-5 d-flex flex-column">
      <DarkTable />
      <button onClick={openModal} className='btn btn-dark p-3 fs-5'>Add</button>

      {/* modal */}
      {
        modal ?
          <div onClick={openModal} className="modal_custom">
            <span id="exit">❌</span>
            <FormModal />
          </div>
          : ''
      }
    </div>
  );
}

export default App;
