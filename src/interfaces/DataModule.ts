export interface ProductState {
  maSP: string;
  tenSP: string;
  manHinh: string;
  heDieuHanh: string;
  cameraTruoc: string;
  cameraSau: string;
  ram: string;
  rom: string;
  giaBan: number;
  hinhAnh: string;
  noiDung: string;
}
export interface CartState {
  maSP: string;
  tenSP: string;
  hinhAnh: string;
  giaBan: number;
  soLuong: number;
}
export interface CartListState {
  cart: Array<CartState>;
}

export interface NewState {
  id: string;
  tieuDe: string;
  hinhAnh1: string;
  hinhAnh2: string;
  noiDung: string;
  like: string;
  comment: string;
  class:string;
}
export interface CommentState {
  id: string;
  ten: string;
  noiDung: string;
}