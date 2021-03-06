
import React from "react";
const Product: React.FC<any> = (props) => {
  const { viewDetail, phone, addItemInCart } = props;
  return (
    <div className="card bg-light mb-2" style={{ width: 300 }}>
      <img
        className="card-img-top"
        src={phone.hinhAnh}
        alt="Card image"
        style={{ maxWidth: "100%", height: 250 }}
      />
      <div className="card-body text-center">
        <h4 className="card-title text-center">{phone.tenSP}</h4>
        <h6 className="card-title text-center text-danger">
          {phone.giaBan.toLocaleString("vi", {
            style: "currency",
            currency: "VND",
          })}
        </h6>

        <p className="card-text text-truncate">{phone.noiDung}</p>
        <button
          className="btn btn-primary mr-2"
          data-toggle="modal"
          data-target="#modelId"
          onClick={() => viewDetail(phone)}
        >
          Xem chi tiết
        </button>
        <button className="btn btn-danger" onClick={() => addItemInCart(phone)}>
          Mua hàng
        </button>
      </div>
    </div>
  );
};
export default Product;
