import { faComments, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { NewState } from '../../../interfaces/DataModule';
import { NewApi } from '../../../services/NewsManagementApi';
const Review : React.FC = ()=> {
    const [state, setstate] = useState<NewState[]>();
    useEffect(() => {
       NewApi.listReview().then(
           (res)=>{
                setstate(res.data) 
           }
       ).catch(
           (err)=>{
               console.log(err)
           }
       )
    }, [])
    const news__largeItemArray = state?.reduce((news__largeItem: any, newArray: any) => {
        if (newArray.class === "news__largeItem") {
            news__largeItem.push(newArray);
        }
        return news__largeItem;
      }, []);
      const news__mediumItemArray = state?.reduce((news__mediumItem: any, newArray: any) => {
        if (newArray.class === "news__mediumItem") {
            news__mediumItem.push(newArray);
        }
        return news__mediumItem;
      }, []);
      const news__smallItemContainerArray = state?.reduce((news__smallItemContainer: any, newArray: any) => {
        if (newArray.class === "news__smallItemContainer") {
            news__smallItemContainer.push(newArray);
        }
        return news__smallItemContainer;
      }, []);
    return (
        <div className='row' id="review1">
                {
                    news__largeItemArray?.map((news: any,index: number)=>{
                        return(
                            <div className="col-12 col-md-6 news__largeItem" key={index}>
                            <img className="news__img" src={news.hinhAnh1} alt={news.hinhAnh1} />
                            <Link to={`/tintuc24/${news.id}`}>{news.tieuDe}</Link>
                            <p>
                                {news.noiDung}
                            </p>
                            <div className="new__facebookLikeAndComment">
                            <FontAwesomeIcon
                                icon={faThumbsUp}
                                style={{ cursor: "pointer" }}
                            />
                                <span className="span__icon">{news.like}</span>
                                <FontAwesomeIcon
                                icon={faComments}
                                style={{ cursor: "pointer" }}
                            />
                                <span className="span__icon">{news.comment}</span>
                            </div>
                         </div>
                        );
                    })
                }
                {
                    news__mediumItemArray?.map((news: any,index: number)=>{
                        return(
                            <div className="col-12 col-md-4 news__mediumItem" key={index}>
                            <img className="news__img" src={news.hinhAnh1} alt={news.hinhAnh1} />
                            <Link to={`/tintuc24/${news.id}`}>{news.tieuDe}</Link>
                            <p>
                                {news.noiDung}
                            </p>
                            <div className="new__facebookLikeAndComment">
                            <FontAwesomeIcon
                                icon={faThumbsUp}
                                style={{ cursor: "pointer" }}
                            />
                                <span className="span__icon">{news.like}</span>
                                <FontAwesomeIcon
                                icon={faComments}
                                style={{ cursor: "pointer" }}
                            />
                                <span className="span__icon">{news.comment}</span>
                            </div>
                         </div>
                        );
                    })
                }
                <div className="col-12 col-md-4 news__smallItemContainer">
                {
                    news__smallItemContainerArray?.map((news: any,index: number)=>{
                        return(     
                            <div className="news__smallItem" key={index}>
                            <img src={news.hinhAnh1} alt={news.hinhAnh1} />
                            <Link to={`/tintuc24/${news.id}`}>{news.tieuDe}</Link>
                            </div>                        
                        );
                    })
                }
                </div>
              
        </div>
    )
}
export default Review;