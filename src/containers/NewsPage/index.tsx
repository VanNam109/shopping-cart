import React from "react";
import New from "./News";
import Review from "./Review";
const DetailPage: React.FC = () => {
  return (
    <div className="news" id="news">
      <div className="padding-class">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" data-toggle="tab" href="#tintuc">Tin tức </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#review">Review</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#khuyenMai">Khuyến mãi</a>
          </li>
        </ul>
        {/* <!-- Tab panes --> */}
        <div className="tab-content">
        <div className="tab-pane container active" id="tintuc">         
              <New/>                          
            </div>
            <div className="tab-pane container active" id="review">        
              <Review/>                          
            </div>
            <div className="tab-pane container active" id="khuyenMai">         
              <New/>                          
            </div>
         </div>
        </div>
      </div>
  );
};
export default DetailPage;
