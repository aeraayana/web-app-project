import React from 'react'

export default function AmbatunatContainerCard({Title, Description, ReportTime, DeadlineTime, BorderColor}) {
    return (
        <div className="card rounded" style={{
            borderLeft: 'solid 2px ' + BorderColor
        }}>
            <div className="card-body">
                <p className="card-title fw-bold fs-5">{Title}</p>
                <p className="card-text fs-6">{Description}</p>
                <p style={{fontSize: "17px"}}>{ReportTime}</p>
                <p style={{fontSize: "15px"}} className='fw-bold text-end'>Due: {DeadlineTime}</p>
            </div>
        </div>
    )
}
