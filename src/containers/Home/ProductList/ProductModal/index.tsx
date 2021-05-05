import React, { useEffect, useState } from "react";
import { ProductState } from "../../../../interfaces/DataModule";

const ProductModel: React.FC<any> = (props) => {
  const { phoneModal } = props;
  const [state, setstate] = useState<ProductState>();
  useEffect(() => {
    setstate(phoneModal);
  }, [phoneModal]);
  return (
    <div
      className="modal fade"
      id="modelId"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="modelTitleId"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Chi tiết {state?.tenSP}</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-6 col-md-6 col-lg-6">
                <img
                  src={state?.hinhAnh}
                  width={250}
                  height={250}
                  alt={state?.tenSP}
                />
              </div>
              <div className="col-6 col-md-6 col-lg-6">
                <h6>Thông số kỹ thuật</h6>
                <table className="table">
                  <thead></thead>
                  <tbody>
                    <tr>
                      <td>Màn hình</td>
                      <td>{state?.manHinh}</td>
                    </tr>
                    <tr>
                      <td>Hệ điều hành</td>
                      <td>{state?.heDieuHanh}</td>
                    </tr>
                    <tr>
                      <td>Camera trước</td>
                      <td>{state?.cameraTruoc}</td>
                    </tr>
                    <tr>
                      <td>Camera sau</td>
                      <td>{state?.cameraSau}</td>
                    </tr>
                    <tr>
                      <td>Ram</td>
                      <td>{state?.ram}</td>
                    </tr>
                    <tr>
                      <td>Rom</td>
                      <td>{state?.rom}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-12 col-md-12 col-lg-12">{state?.noiDung}</div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              data-dismiss="modal"
            >
              Đóng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductModel;
