import React from 'react';

export default function RekapitulasiPengajuanCard({
    Judul,
    Bulan,
    SDHI,
    Persen,
    Tipe,
}) {

    let accentColor;
    let percentBorderColor;
    let percentBackgroundColor;

    if (Tipe === 'masuk') {
        accentColor = "orange";
        percentBorderColor = "green";
        percentBackgroundColor = "lightgreen";
    } else if (Tipe === 'selesai') {
        accentColor = "green";
        percentBorderColor = "green";
        percentBackgroundColor = "lightgreen";
    } else if (Tipe === 'batal') {
        accentColor = "red";
        percentBorderColor = "red";
        percentBackgroundColor = "pink";
    }

    return (
        <div className="card mb-3 w-75 ms-3 me-3">
            <div className="card-body p-2 text-left">
                <p className="fs-6 rounded p-1 mb-0 " style={{ border: 'solid 2px ' + accentColor, color: accentColor}}>{Judul}</p>
                <div className="d-flex flex-row">
                    <div className="card d-flex flex-column p-2 m-1 rounded-0"
                        style={{ borderLeft: 'solid 2px ' + accentColor, borderTop: 'none', borderRight: 'none', borderBottom: 'none' }}>
                        <p>Bulan ini</p>
                        <p className="fw-bold fs-4">{Bulan}</p>
                        <p className="rounded p-1"
                            style={{ color: percentBorderColor, backgroundColor: percentBackgroundColor, border: 'solid 2px ' + percentBorderColor }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5" />
                            </svg>
                            {Persen} %
                        </p>
                    </div>
                    <div className="card d-flex flex-column p-2 m-1 rounded-0"
                        style={{ borderLeft: 'solid 2px ' + accentColor, borderTop: 'none', borderRight: 'none', borderBottom: 'none' }}>
                        <p>SDHI</p>
                        <p className="fw-bold fs-4">{SDHI}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
