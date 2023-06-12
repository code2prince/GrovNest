import BodyHeader from "../body/bodyHeader/bodyHeader"
import '../body/body.css';
import {AiOutlinePlusCircle} from 'react-icons/ai';
// import Calendar from "./Calender/calender";
import Calendar from "./Calender/calender";
export default function (){
    return (
        <>
        <div>
            <BodyHeader/>
            <div className="card">
                <div className="profile">
                    <div className="profile-header">Student's Profile <AiOutlinePlusCircle/></div>
                    <div>
                        <div>Profile</div>
                        <div>Guardian's</div>
                        <div>Resources</div>
                    </div>
                </div>

                <div className="topic">
                    <div className="topic-header">Ongoing Topics <AiOutlinePlusCircle/></div>
                    <div>Agenda (Student 1)</div>
                    <div>Agenda (Student 2)</div>
                    <div>Agenda (Student 3)</div>
                </div>

                <div className="overview">
                    <div className="overview-header">Overview <AiOutlinePlusCircle/></div>
                    <div>
                        <Calendar/>
                    </div>
                </div>
                
            </div>
        </div>
            
        </>
    )
}