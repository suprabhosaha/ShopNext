'use client'

import { useStateContext } from "@/context/StateContext";
import { realisticLookConfetti } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsBagCheckFill } from "react-icons/bs";

const Sucess = () => {
    const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

    useEffect(() => {
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        realisticLookConfetti();
    }, []);

    return (
        <div className="success-wrapper">
            <div className="success">
                <p className="icon">
                    <BsBagCheckFill />
                </p>
                <h2>Order Placed Successfully!</h2>
                <p className="email-msg">Check your email inbox for the receipt.</p>
                <p className="description">
                    If you have any question feel free to mail us
                    <a className="email" href="mailto:suprabho04@gmail.com">suprabho04@gmail.com</a>
                </p>
                <Link href="/">
                    <button className="btn" type="button" width="300px">Continue Shopping</button>
                </Link>
            </div>

        </div>
    );
}

export default Sucess;