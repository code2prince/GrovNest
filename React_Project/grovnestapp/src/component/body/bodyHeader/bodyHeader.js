import '../bodyHeader/bodyHeader.css';
import {BsTicketPerforated} from 'react-icons/bs';
import {BiRevision} from 'react-icons/bi';
import {FiSettings} from 'react-icons/fi';
import {BsShare} from 'react-icons/bs';
import {SlEnergy} from 'react-icons/sl';
// import {BiSearch} from 'react-icons/bi';
export default function(){
    return (
        <>
            
            <div>
                <div className='header'>
                    <div>
                    <select className='board' id="board">
                    <option value="project">Board</option>
                    <option value="Select1">Select1</option>
                    <option value="Select2">Select2</option>
                    <option value="Select3">Select3</option>
                    </select>
                    </div>
                    <div className='relase-share'>
                        <div>
                            <button className='release-btn'><SlEnergy/>Release</button>
                        </div>
                        <div>
                            <button className='share-btn'><BsShare/> Share</button>
                        </div>
                    </div>
                </div>
                <div className='header1'>
                    <div>
                      <div>
                      {/* <BiSearch/> */}
                        <input className="searchInput" type='text' placeholder='Search...'></input>
                      </div>
                    </div>

                    <div className='ticket'>
                        <div><BsTicketPerforated/> My Tickets</div>
                        <div><BiRevision/> Recently Updated</div>
                        <div><FiSettings/></div>
                    </div>
                    
                    
                </div>
            </div>
        </>
    )
}