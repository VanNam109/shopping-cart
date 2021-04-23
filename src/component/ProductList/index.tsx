import { TablePagination } from "@material-ui/core";
import React, { useEffect, useReducer, useState } from "react";
import { ProductState } from "../../interfaces/DataModule";
import { cartReducer, initialState } from "../../reducers/reducer";
import { AdminService } from "../../services/ApiManagement";
import CardModal from "./CardModal";
import Product from "./Product";
import ProductModel from "./ProductModal";

const ProductList: React.FC = () => {
  const [phoneState, setPhoneState] = useState<ProductState[]>();
  const [phoneModalState, phoneModalSetState] = useState<ProductState>();
  useEffect(() => {
    AdminService.listPhone()
      .then((result) => {
        // console.log(result.data);
        setPhoneState(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  //View Detail Product
  const viewDetail = (phoneModal: ProductState): void => {
    console.log(phoneModal);
    phoneModalSetState(phoneModal);
  };
  //Add Item
  const [cardState, dispatch] = useReducer(cartReducer, initialState);
  const addItemInCart = (choseItem: any) => {
    const itemCart = {
      maSP: choseItem.maSP,
      tenSP: choseItem.tenSP,
      giaBan: choseItem.giaBan,
      hinhAnh: choseItem.hinhAnh,
      soLuong: 1,
    };

    // console.log(itemCart);
    const action = {
      type: "ADD_PRODUCT_CART",
      itemCart: itemCart,
    };
    dispatch(action);
  };
  const deleteItemInCart = (index: number) => {
    const action = {
      type: "DELETE_PRODUCT_CART",
      index,
    };
    dispatch(action);
  };
  //handling increases and decreases
  const increaseOrDecrease = (index: number, increaseOrDecrease: boolean) => {
    const action = {
      type: "INCREASE_DECREASE",
      index,
      increaseOrDecrease,
    };
    dispatch(action);
  };
  //
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(4);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <div className="container-fluid">
      <h3 className="display-4 text-center"> SMART PHONE</h3>
      <div className="row">
        {phoneState
          ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((phone: Object, index: number) => {
            return (
              <div className="col-12 col-md-6 col-lg-3" key={index}>
                <Product
                  phone={phone}
                  viewDetail={viewDetail}
                  addItemInCart={addItemInCart}
                />
              </div>
            );
          })}
      </div>
      <TablePagination
        labelRowsPerPage={"Số lượng cần hiển thị"}
        rowsPerPageOptions={[2, 5, 10, 15, 20]}
        component="div"
        count={20}
        page={page}
        onChangePage={handleChangePage}
        rowsPerPage={rowsPerPage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
      <ProductModel phoneModal={phoneModalState} />
      <CardModal
        cart={cardState}
        deleteItemInCart={deleteItemInCart}
        increaseOrDecrease={increaseOrDecrease}
      />
    </div>
  );
};
export default ProductList;
