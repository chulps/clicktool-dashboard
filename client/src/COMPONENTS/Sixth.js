import React from 'react';
import '../CSS/Global.css';
import '../CSS/Dashboard.css';

// create a reusable Sixth section for Dashboard component with props for a header
function Sixth(props) {
    return (
        <div className='col-12 px-1 mb-2'>
            <div className='bg-white p-3' style={{height: '270px'}}>
                {props.heading}
                <div style={{height: 'calc(100% - 2rem)'}} className='row m-0 pt-3'>
                    {props.content}
                </div>
            </div>
        </div>
    );
}

export default Sixth;