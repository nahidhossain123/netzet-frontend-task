import React from 'react'
import ThemeButton from './ui/ThemeButton'

const HeroSection = () => {
    return (
        <div className="pt-[279px] md:pt-[57px] space-y-[22px] md:space-y-[30px] md:pb-[82px] max-w-full md:max-w-[516px]">
            {/* hero texts */}
            <section className='pt-5 md:pt-[unset]'>
                <h1 className="text-center md:text-start text-white text-[25px] md:text-[35px] leading-[30px] md:leading-[42px] font-extrabold md:font-bold font-urbanist">
                    Want to Turn Social Media Into a Profitable Career?
                </h1>
                <div className='space-y-[22px] md:space-y-4'>
                    <h2 className="text-center md:text-start font-bold text-brand-secondary50 text-[25px] md:text-[35px] leading-[30px] md:leading-[42px] text-shadow-[0_4px_4px] text-shadow-brand-primary font-extrabold md:font-bold font-urbanist" >
                        Discover your way to success with Fametonic:
                    </h2>
                    <ul className="space-y-2.5 md:space-y-[13px]">
                        <li className='flex gap-2.5 text-white leading-[22px] font-medium md:font-semibold font-figtree'><span>✨</span> <span>Start growing your influence right away—no waiting required!</span></li>
                        <li className='flex gap-2.5 text-white leading-[22px] font-medium md:font-semibold font-figtree'><span>✨</span> <span>Create viral TikToks and Reels step by step with easy-to-follow lessons</span></li>
                        <li className='flex gap-2.5 text-white leading-[22px] font-medium md:font-semibold font-figtree'><span>✨</span><span> Use a Personal AI Worker to boost your content</span></li>
                        <li className='flex gap-2.5 text-white leading-[22px] font-medium md:font-semibold font-figtree'><span>✨</span> <span>Learn from expert-led courses designed for aspiring influencers</span></li>
                    </ul>
                </div>
            </section>
            <div className='flex flex-col-reverse md:flex-col gap-8 md:gap-[30px]'>
                {/* hero get started button */}
                <div className='w-full md:w-fit flex flex-col items-center gap-[10px] pb-10 md:pb-[unset]'>
                    <ThemeButton iconSrc='/icons/right-arrow.svg' iconAlt='arrow' iconWidth={8} iconHeight={14}>
                        GET STARTED
                    </ThemeButton>
                    <p className='text-white font-figtree font-medimum text-xs'>1-minute quiz for personalized Insights</p>
                </div>
                {/* hero footer */}
                <footer className='space-y-[19px] md:space-y-3'>
                    <p className='text-center md:text-start text-text-secondary font-figtree leading-[14px] font-medimum text-xs'>By clicking &quot;Get Started&quot;, you agree with Terms and Conditions, Privacy Policy, Subscription Terms</p>
                    <p className='text-center md:text-start text-text-secondary font-figtree leading-[14px] md:leading-[12px] font-medimum text-[10px]'>Fametonic 2025 ©All Rights Reserved.</p>
                </footer>
            </div>
        </div>
    )
}

export default HeroSection