import { faSignature } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Swal from "sweetalert2";
import { NewApi } from "../../../../services/NewsManagementApi";
 const ModalComment: React.FC= () => {
    const randomId = Math.floor(Math.random() * 9999);
    const [formData, setFormData] = useState(
      {
        id:randomId,
        ten:"",
        noiDung:""
      }
      );
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(formData);
        setFormData({...formData, [e.target.name]: e.target.value})
     }
     const handleSubmit = ()=>{
        console.log(formData);
        NewApi.postComment(formData).then(()=>{
            Swal.fire({
                title: "Đăng  bình luận thành công",
                icon: "success",
              });
              setTimeout(() => {
                window.location.reload();
              }, 1800);
        }).catch((err)=>{
            Swal.fire({
                title: err.response.data,
                text: "Điền lại thông bình luận !!!",
                icon: "error",
              });
        })
     }
    return (
<div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Bình luận</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div className="modal-body">
        <form role="form">
        <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                      <FontAwesomeIcon
                                icon={faSignature}
                                style={{ cursor: "pointer" }}
                     />
                      </span>
                    </div>
                    <input
                      type="text"
                      name="ten"
                      className="form-control input-sm"
                      placeholder="Tên bình luận"
                      onChange={handleChange}
                      required
                    />
                  </div>
                 <div className="form-group mt-2">
                    <input type="text" className="form-control" name="noiDung" placeholder="Bình luận" onChange={handleChange} required />
                </div>
            </div>                      
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-danger" data-dismiss="modal">Đóng</button>
        <button type="button" className="btn btn-success" onClick={handleSubmit}>Đăng bình luận</button>
      </div>
    </div>
  </div>
</div>

    )
}
export default ModalComment;