export interface ProductState {
  maSP: any;
  tenSP: string;
  manHinh: string;
  heDieuHanh: string;
  cameraTruoc: string;
  cameraSau: string;
  ram: string;
  rom: string;
  giaBan: number;
  hinhAnh: any;
  noiDung: string;
}
export interface CartState {
  maSP: any;
  tenSP: string;
  hinhAnh: any;
  giaBan: number;
  soLuong: number;
}
export interface CartListState {
  cart: Array<CartState>;
}
