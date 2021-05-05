import React, { useEffect, useState } from 'react';
import { CommentState } from '../../../../interfaces/DataModule';
import { NewApi } from '../../../../services/NewsManagementApi';
import ModalComment from '../ModalComment';

 const Comment: React.FC = ()=> {
     const [state, setstate] = useState<CommentState[]>();
     useEffect(() => {
        NewApi
          .listComment()
          .then((res) => {
            setstate(res.data);
          })
          .catch((err) => {
            console.log(err.response.data);
          });
      }, [state]);
      const renderComment = ()=>{
          if(state){
            return state.reverse().map((comment: any, index: number)=>{
                return(
                    <div key={index}>
                       <div className="row">
                        <div className="col-12 col-md-12 col-lg-12">
                            <h6>{comment.ten}</h6>
                            <span>{comment.noiDung}</span>
                        </div>
                       </div>

                    </div>
                )
            })
         }
         else {
            return null;
          }
      }
    return (
        <div className="bg-light mt-5">
          <div className="youthink" data-toggle="modal" data-target="#exampleModal">
            <div className="youthink__items">
              <div className="items__img">
                <img src="https://www.kindpng.com/picc/m/136-1369892_avatar-people-person-business-user-man-character-avatar.png" alt="avt" height="32" />
                <span className="items__text">Bình luận đi nào .....</span>
              </div>
          </div>
          </div>
          <ModalComment/>
          <h4>Danh sách bình luận</h4>
          <div className="list__comment">{renderComment()}</div>
        </div>
    )
}
export default Comment;