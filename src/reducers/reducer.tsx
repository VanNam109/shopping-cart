import { CartListState } from "../interfaces/DataModule";

//Store
export const initialState: CartListState = {
  cart: [
    // {
    //   maSP: 1,
    //   tenSP: "VinSmart Live",
    //   soLuong: 1,
    //   giaBan: 5700000,
    //   hinhAnh: "./img/vsphone.jpg",
    // },
  ],
};

export function cartReducer(state: CartListState, action: any) {
  switch (action.type) {
    case "ADD_PRODUCT_CART": {
      // console.log(action);
      //Add item
      let cartUpdate = [...state.cart];
      // console.log(cartUpdate);
      const index = cartUpdate.findIndex(
        (item) => item.maSP === action.itemCart.maSP
      );
      // console.log(action.itemCart);
      // console.log("index " + index);
      if (index < 0) {
        cartUpdate.push(action.itemCart);
      } else {
        const cartUpdateItem = {
          ...cartUpdate[index],
        };
        cartUpdateItem.soLuong++;
        cartUpdate[index] = cartUpdateItem;
      }
      return { ...state, cart: cartUpdate };
    }
    case "DELETE_PRODUCT_CART": {
      let cartUpdate = [...state.cart];
      let index = cartUpdate.findIndex((item) => item.maSP === action.index);

      if (index !== -1) {
        cartUpdate.splice(index, 1);
      }
      state.cart = cartUpdate;
      return { ...state };
    }
    case "INCREASE_DECREASE": {
      const { index, increaseOrDecrease } = action;
      let cartUpdate = [...state.cart];
      if (increaseOrDecrease) {
        const cartUpdateItem = {
          ...cartUpdate[index],
        };
        cartUpdateItem.soLuong++;
        cartUpdate[index] = cartUpdateItem;
      } else {
        if (cartUpdate[index].soLuong >= 1) {
          const cartUpdateItem = {
            ...cartUpdate[index],
          };
          cartUpdateItem.soLuong--;
          cartUpdate[index] = cartUpdateItem;
        }
      }
      return { ...state, cart: cartUpdate };
    }
  }
  return { ...state };
}