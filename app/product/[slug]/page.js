'use client'

import Product from "@/components/Product";
import { useStateContext } from "@/context/StateContext";
import { client, urlFor } from "@/lib/client";
import { useEffect, useState } from "react";
import { AiOutlinePlus, AiOutlineMinus, AiFillStar, AiOutlineStar } from "react-icons/ai";

const ProductDetails = ({ params: { slug } }) => {
    const [product, setProduct] = useState(null);
    const [products, setProducts] = useState(null);
    const [index, setIndex] = useState(0);
    const { increaseQty, decreaseQty, qty, onAdd } = useStateContext();

    useEffect(() => {
        const fetchProducts = async () => {
            const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
            const productsQuery = `*[_type == "product"]`;

            const product = await client.fetch(query);
            const products = await client.fetch(productsQuery);

            setProduct(product);
            setProducts(products);
        };
        fetchProducts();
    }, [slug]);

    // console.log(product);

    return (
        <div>
            <div className="product-detail-container">
                <div>
                    <div className="image-container">
                        {product?.image?.length > 0 && (
                            <img
                                src={urlFor(product.image[index]).url()}
                                alt={product?.name || 'Product Image'}
                                className="product-detail-image"
                            />
                        )}
                    </div>
                    <div className="small-images-container">
                        {product?.image.map((item, i) => (
                            <img src={urlFor(item)} className={ i === index ? "small-image selected-image" : "small-image"} onMouseEnter={() => setIndex(i)} />
                        ))}
                    </div>
                </div>
                <div className="product-detail-desc">
                    <h1>{product?.name}</h1>
                    <div className="reviews">
                        <div>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar />
                        </div>
                        <p>(20)</p>
                    </div>
                    <h4>Details</h4>
                    <p>{product?.details}</p>
                    <p className="price">₹{product?.price}</p>
                    <div className="quantity">
                        <h3>Quanity:</h3>
                        <p className="quantity-desc">
                            <span className="minus" onClick={decreaseQty}><AiOutlineMinus /></span>
                            <span className="num" onClick="">{qty}</span>
                            <span className="plus" onClick={increaseQty}><AiOutlinePlus /></span>
                        </p>
                    </div>
                    <div className="buttons">
                        <button type="button" className="add-to-cart" onClick={() => onAdd(product, qty)}>Add to Cart</button>
                        <button type="button" className="buy-now" onClick="">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="maylike-products-wrapper">
                <h2>You may also like</h2>
                <div className="marquee">
                    <div className="maylike-products-container track">
                        {products?.map((item) => (
                            <Product key={item._id} product={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
