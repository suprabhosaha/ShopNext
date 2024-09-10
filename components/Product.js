import { urlFor } from "@/lib/client";
import Link from "next/link";

const Product = ({ product }) => {

    const imageUrl = product?.image?.length > 0 ? urlFor(product.image[0]).url() : null;

    return ( 
        <div>
            <Link href={`/product/${product.slug.current}`}>
            <div className="product-card">
                <img src={imageUrl} alt="product-image" width={250} height={250} className="product-image" />
                <p className="product-name">{product?.name}</p>
                <p className="product-price">₹{product?.price}</p>
            </div>
            </Link>
        </div>
     );
}
 
export default Product;