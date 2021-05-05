import React, { useEffect, useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductState } from '../../../../interfaces/DataModule';
import { cartReducer, initialState } from '../../../../reducers/reducer';
import { AdminService } from '../../../../services/ProductManagementApi';
import CardModal from '../../ProductList/CardModal';
import Product from '../../ProductList/Product';
import ProductModel from '../../ProductList/ProductModal';

 const CategoryProduct: React.FC<any> = (props)=> {
    const [state, setstate] = useState<ProductState[]>();
    const [phoneModalState, phoneModalSetState] = useState<ProductState>();
   useEffect(() => {
      const id = props.match.params.hangSX;
      console.log(id);
      AdminService.detailPhone(id).then((res)=>{
        setstate(res.data)
        console.log(res.data)
      }).catch((err)=>{
        console.log(err)
      })
    },[props.match.params.hangSX]);
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
    return (
      <div className="container-fluid">
          <div className="filter">
                <div className="manu manu14">
                    <Link  
                       to={`/category/iPhone`}
                    ><img src="//cdn.tgdd.vn/Brand/1/iPhone-(Apple)42-b_52.jpg"
                        />
                   </Link>
                   <Link
                       to={`/category/samsung`}
                    ><img src="//cdn.tgdd.vn/Brand/1/Samsung42-b_25.jpg"
                    />
                   </Link>
                   <Link
                       to={`/category/oppo`}
                    ><img src="//cdn.tgdd.vn/Brand/1/OPPO42-b_5.jpg"
                    />
                   </Link>
                   <Link
                       to={`/category/vivo`}
                    ><img src="//cdn.tgdd.vn/Brand/1/Vivo42-b_50.jpg"
                    />
                   </Link>
                   <Link
                       to={`/category/xiaomi`}
                    ><img src="//cdn.tgdd.vn/Brand/1/logo-xiaomi-big-220x48.jpg"
                    />
                   </Link>
                   <Link
                       to={`/category/realme`}
                    ><img src="//cdn.tgdd.vn/Brand/1/Realme42-b_37.png"
                    />
                   </Link>
                   <Link
                       to={`/category/vsmart`}
                    ><img src="//cdn.tgdd.vn/Brand/1/Vsmart42-b_40.png"
                    />
                   </Link>
                   <Link
                       to={`/category/huawei`}
                    ><img src="//cdn.tgdd.vn/Brand/1/Huawei42-b_30.jpg"
                    />
                   </Link>
                </div>
            </div> 
        <div className="row m-2">
        {state?.map((phone: any, index: number) => {
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
         <ProductModel phoneModal={phoneModalState} />
         <CardModal
        cart={cardState}
        deleteItemInCart={deleteItemInCart}
        increaseOrDecrease={increaseOrDecrease}
      />
      </div>
    )
}
export default CategoryProduct