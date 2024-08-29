import { urlFor } from "@/lib/client";
import Link from "next/link";

const HeroBanner = ({ herobanner }) => {

    const imageUrl = herobanner?.image ? urlFor(herobanner.image).url() : null;

    return (
        <div className="hero-banner-container">
            <div>
                <p className="beats-solo">{herobanner.smallText}</p>
                <h3>{herobanner.midText}</h3>
                <h1>{herobanner.largeText1}</h1>
                <img src={imageUrl} alt="headphones" className="hero-banner-image" />

                <div>
                    <Link href={`/product/${herobanner.product}`}>
                        <button type="button">
                            {herobanner.buttonText}
                        </button>
                    </Link>
                    <div className="desc">
                        <h5>Description</h5>
                        <p>{herobanner.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroBanner;