import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import './pathLocations.scss'
import { useSelector } from 'react-redux';

const PathLocations = () => {
    const {productId, search} = useParams();
    const {products} = useSelector((state) => state.productsData);
    const product = products.filter((i) => i.id == productId)[0]
    const currentPathname = window.location.pathname;
    const pathsAll = currentPathname.split("/");
    const paths = pathsAll.slice(1, pathsAll.length);
    const [hideSearchPath, setHideSearchPath] = useState(false);

  return (
    <div className="pathLocations">
        <Link to="/">home</Link>
        { paths &&
            paths.map((path,key) => {
                    return(
                        path == productId ?
                        <Link key={key}>{product && product.name}</Link> :
                        path != search &&
                        <Link to={`/${path}`} key={key}>{path}</Link>
                    )
            })
        }
    </div>
  )
}

export default PathLocations
