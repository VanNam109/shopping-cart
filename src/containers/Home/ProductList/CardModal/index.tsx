
import React from "react";
import Swal from "sweetalert2";

const CardModal: React.FC<any> = (props) => {
  const { cart, deleteItemInCart, increaseOrDecrease } = props;
  //Swaf popup
  const submitCart = (cartNew: any): void => {
    for (const key in cartNew) {
      console.log(key);
      if (key !== "") {
        Swal.fire({
          title: "Bạn có chắc chắn mua hàng ko ?",
          icon: "question",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        })
          .then(() => {
            Swal.fire({
              title: "Bạn đã mua hàng thành công",
              icon: "success",
            });
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          })
          .catch(() => {
            Swal.fire({
              title: "Quay lại giỏ hàng",
              icon: "error",
            });
          });
      }
    }
  };
  return (
    <div>
      <div
        className="modal fade"
        id="modelCart"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content" style={{ width: "900px" }}>
            <div className="modal-header">
              <h5 className="modal-title">Giỏ hàng</h5>
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
              <table className="table">
                <thead>
                  <tr>
                    <th>Mã SP</th>
                    <th>Hình ảnh</th>
                    <th>Tên SP</th>
                    <th>Số lượng</th>
                    <th>Đơn giá</th>
                    <th>Thành tiền</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cart?.cart.map((itemCart: any, index: number) => {
                    return (
                      <tr key={index}>
                        <td>{itemCart.maSP}</td>
                        <td>
                          <img
                            src={itemCart.hinhAnh}
                            alt={itemCart.tenSP}
                            style={{
                              overflow: "hidden",
                              maxHeight: "40px",
                              maxWidth: "40px",
                              verticalAlign: "middle",
                            }}
                          />
                        </td>
                        <td>{itemCart.tenSP}</td>
                        <td>
                          <button
                            className="btn m-2"
                            style={{ border: "2px solid  #ddd" }}
                            onClick={() => increaseOrDecrease(index, true)}
                          >
                            +
                          </button>
                          {itemCart.soLuong}
                          <button
                            className="btn m-2"
                            style={{ border: "2px solid  #ddd" }}
                            onClick={() => increaseOrDecrease(index, false)}
                          >
                            -
                          </button>
                        </td>
                        <td>{itemCart.giaBan.toLocaleString()}</td>
                        <td>
                          {(
                            itemCart.giaBan * itemCart.soLuong
                          ).toLocaleString()}
                          {" VNĐ"}
                        </td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => deleteItemInCart(itemCart.maSP)}
                          >
                            Xóa
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={5}>Tổng tiền</td>
                    <td>
                      {cart.cart
                        .reduce((total: any, itemCart: any) => {
                          return (total = itemCart.soLuong * itemCart.giaBan);
                        }, 0)
                        .toLocaleString()}
                      {" VNĐ "}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Đóng
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => submitCart(cart)}
              >
                Mua
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div></div>
  );
};
export default CardModal;
