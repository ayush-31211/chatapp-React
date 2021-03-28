import React from 'react';

function ProgressBar(prop)
{
    console.log("PRP",prop);
    return (
        <div id="Progress" style={prop.style}>
            <div id="ProgressBar" style={{width:prop.width,backgroundColor:prop.backgroundColor}}>
                <div id="ProgressBarStatus" style={{width:(prop.val),backgroundColor:prop.barColor}}>
                </div>
            </div>
        </div>
    )
}

export default ProgressBar;