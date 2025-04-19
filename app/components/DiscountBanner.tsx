import React from 'react'

const DiscountBanner = () => {
    return (
        <div className="max-w-[1440px] mx-auto bg-gradient-to-r from-brand-primary to-brand-secondary100">
            <p className="p-5 md:py-2.5 font-figtree text-base sm:text-[22px] leading-[20px] md:leading-[26px] text-center">
                <span className="text-brand-secondary100 font-extrabold">🚀 FRESH BEGINNINGS SALE:</span>
                <span> </span>
                <span className="text-white font-semibold">Extra 25% OFF, Limited Spots </span>
                <span className="text-white font-semibold">- start your journey today!</span>
            </p>
        </div>
    )
}

export default DiscountBanner