import React, { useState } from 'react';

const Notepad = () => {

    const [show, setShow] = useState(true);
    return (
        <div className="notepad">
            <div>
                <button className='open-btn notes' onClick={() => setShow(!show)}> Notes </button>
            </div>


            {
                show &&
                <div className="paper-content">
                    <textarea defaultValue="Thank you for visiting Dojoneer! This notepad will clear when the browser is closed.."></textarea>
                </div>
            }

        </div>
    );
}

export default Notepad;
