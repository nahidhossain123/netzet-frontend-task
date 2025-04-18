import React from 'react'

const DiscountBanner = () => {
    return (
        <div className="bg-gradient-to-r from-brand-primary to-brand-secondary100 font-figtree">
            <p className="p-4 md:py-2.5 font-extrabold text-4 sm:text-[22px] text-center">
                <span className="text-brand-secondary100">🚀 FRESH BEGINNINGS SALE:</span>
                <span className="text-white"> Extra 25% OFF, Limited Spots </span>
                <span className="text-white">- start your journey today!</span>
            </p>
        </div>
    )
}

export default DiscountBanner