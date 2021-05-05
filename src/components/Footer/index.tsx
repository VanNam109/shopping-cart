import React from "react";

const Footer: React.FC = () => {
  return (
    <div>
      <section id="promotion" className="container-fluid pt-5 pb-5 bg-dark">
        <h1 className="text-center text-white">KHUYẾN MÃI</h1>
        <div className="container bg-light pt-5 pb-5">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-4">
              <div className="container">
                <img
                  src="https://cdn.tgdd.vn/Files/2021/04/22/1345567/minigamevivoy72-1000_800x450-1_800x450.jpg"
                  alt=""
                  style={{ maxWidth: "100%" }}
                />
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4">
              <div className="container">
                <img
                  src="https://cdn.tgdd.vn/Files/2021/05/04/1348395/mi_smart_band_6_800x450.jpg"
                  alt=""
                  style={{ maxWidth: "100%" }}
                />
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4">
              <div className="container">
                <img
                  src="https://cdn.tgdd.vn/Files/2021/05/03/1348122/samsung-thang-5_800x450.jpg"
                  alt=""
                  style={{ maxWidth: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default React.memo(Footer);
