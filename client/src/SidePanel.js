import './SidePanel.css';
import {Routes,Route} from "react-router-dom";
import RatingForm from './RatingForm.js';
import ThankYou from './ThankYou.js';
import QuestionForm from './QuestionForm';
import {Link} from "react-router-dom";
import { AiOutlineClose,  } from "react-icons/ai";

function children(condition, toggle){
  if(condition){
    return (
      <div>
        <Link to="" className="closebtn" onClick={toggle}><AiOutlineClose /></Link>
          <Routes>
            <Route path="/" element={<RatingForm />}/>
            <Route path="/questions" element={<QuestionForm />} />
            <Route path="/thankyou" element={<ThankYou />}/>
        </Routes>
      </div>
    )
  }
}
function SidePanel(props) {
  let sidebarClass = props.isOpen ? "sidepanel": "sidepanelclose";
    return (
      <div id={sidebarClass} className={sidebarClass}>
        {children(props.isOpen, props.toggle)}
      </div>
    );
  }
  
  export default SidePanel;