import React, { useEffect, useState } from 'react';
import { NewState } from '../../../interfaces/DataModule';
import { NewApi } from '../../../services/NewsManagementApi';
import Comment from './Comment';

 const Deatil: React.FC<any> = (props)=> {
     const [state, setstate] = useState<NewState[]>()
     useEffect(() => {
        const id = props.match.params.id;
        console.log(id);
        NewApi.listDetailNew(id).then((res)=>{
            console.log(res.data)
            setstate(res.data)
        }).catch((err)=>{
            console.log(err)
        })

     },  [props.match.params.id])
    return (
        <div style={{ textAlign:'initial'}}>
          {
              state?.map((news: any, index: number)=>{
                  return(
                     <div key={index}>
                         <h1>{news.tieuDe}</h1>
                         <img src={news.hinhAnh1}></img>
                         <div>
                             <span>{news.noiDung}</span>
                             <span>{news.noiDung}</span>
                             <span>{news.noiDung}</span>
                         </div>                       
                     </div>
                  )
              })
          }
          <Comment/>        
        </div>
    )
}
export default Deatil