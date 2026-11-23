import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addWishlist } from "../features/wishlistSlice";

function ProductCard({ product ,onDelete}) {
  const dispatch=useDispatch()
 return (
   <div className="card">
     <img
       src={product.image}
       alt={product.name}
     />

     <h3>{product.name}</h3>

     <p>{product.brand}</p>

     <p>{product.category}</p>

     <p>⭐ {product.rating}</p>

     <div className="card-actions">
 <Link
   className="view-btn"
   to={`/products/${product.id}`}
 >
   View
 </Link>

 <Link
   className="edit-btn"
   to={`/edit-product/${product.id}`}
 >
   Edit
 </Link>

 <button
   className="delete-btn"
   onClick={() => onDelete(product.id)}
 >
   Delete
 </button>
 <button className='edit-btn'
  onClick={()=>dispatch(addWishlist(product))}>
    add to addWishlist
 </button>
</div>

       




   </div>
 );
}

export default ProductCard;
