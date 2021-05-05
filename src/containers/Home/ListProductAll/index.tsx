import React from 'react';
import { Link } from 'react-router-dom';
import ProductList from '../ProductList';
const ListProductAll: React.FC = () => {
    return (
        <div>
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
            <ProductList />
        </div>
    )
}
export default ListProductAll;