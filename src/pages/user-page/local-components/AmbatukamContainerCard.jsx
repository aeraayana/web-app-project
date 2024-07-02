import React from "react";

export default function AmbatukamContainerCard({
  Judul,
  Bulan,
  SDHI,
  Persen,
  Tipe,
}) {
  return (
    <div className="card" style={{ width: "100%" }}>
      <div className="card-body">
        <div className="card-container">
          <p
            className="text-title"
            style={{
              color: Tipe,
            }}
          >
            {Judul}
          </p>
        </div>
        <div className="container">
          <div className="row">
            <div
              className="col-sm"
              style={{ borderLeft: "solid 2px", borderColor: Tipe }}
            >
              <div>
                <p className="text-subtitle">Bulan Ini</p>
                <p className="text-subtitle">{Bulan}</p>
              </div>
              <div
                style={{
                  color: Tipe,
                  borderColor:
                    Persen < 0
                      ? "var(--color-error)"
                      : "var(--color-primary-dark)",
                  border: "solid 1px",
                  width: "40%",
                  height: "20%",
                  borderRadius: "0.625rem",
                  backgroundColor: "var(--color-disable-light)",
                }}
              >
                <p
                  style={{
                    paddingLeft: "1%",
                    fontSize: "15px",
                    textAlign: "center",
                  }}
                >
                  {Persen}%
                </p>
              </div>
            </div>
            <div
              className="col-sm"
              style={{ borderLeft: "solid 2px", borderColor: Tipe }}
            >
              <div>
                <p
                  className="text-subtitle"
                >
                  SDHI
                </p>
                <p
                  className="text-subtitle"
                >
                  {SDHI}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
