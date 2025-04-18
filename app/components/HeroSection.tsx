import React from 'react'
import ThemeButton from './ui/ThemeButton'

const HeroSection = () => {
    return (
        <div className="px-5 md:px-[unset] pt-[300px] md:pt-[57px] space-y-[30px] pb-10 md:pb-[83px] max-w-[516px] md:ml-[114px]">
            <div>
                <h1 className="text-4xl text-center md:text-start font-extrabold text-white text-[25px] md:text-[35px] font-urbanist">
                    Want to Turn Social Media Into a Profitable Career?
                </h1>
                <div className='space-y-4'>
                    <h2 className="text-4xl text-center md:text-start font-extrabold text-brand-secondary50 text-[25px] md:text-[35px] font-urbanist text-shadow-lg text-shadow-brand-primary" >
                        Discover your way to success with Fametonic:
                    </h2>
                    <ul className="text-gray-600 space-y-[13px]">
                        <li className='font-figtree font-semibold text-white flex gap-[10px]'><span>✨</span> <span>Start growing your influence right away—no waiting required!</span></li>
                        <li className='font-figtree font-semibold text-white flex gap-[10px]'><span>✨</span> <span>Create viral TikToks and Reels step by step with easy-to-follow lessons</span></li>
                        <li className='font-figtree font-semibold text-white flex gap-[10px]'><span>✨</span><span> Use a Personal AI Worker to boost your content</span></li>
                        <li className='font-figtree font-semibold text-white flex gap-[10px]'><span>✨</span> <span>Learn from expert-led courses designed for aspiring influencers</span></li>
                    </ul>
                </div>
            </div>
            <div className='flex flex-col-reverse md:flex-col gap-8 md:gap-[30px]'>
                <div className='w-full md:w-fit flex flex-col items-center gap-[10px]'>
                    <ThemeButton iconSrc='/right-arrow.svg' iconAlt='arrow' iconWidth={11} iconHeight={6}>
                        GET STARTED
                    </ThemeButton>
                    <p className='text-white font-figtree font-medimum text-xs'>1-minute quiz for personalized Insights</p>
                </div>
                <footer className='space-y-3'>
                    <p className='text-center md:text-start text-text-primary font-figtree font-medimum text-xs'>By clicking "Get Started", you agree with Terms and Conditions, Privacy Policy, Subscription Terms Fametonic 2025 ©All Rights Reserved.</p>
                    <p className='text-center md:text-start text-text-primary font-figtree font-medimum text-xs'>Fametonic 2025 ©All Rights Reserved.</p>
                </footer>
            </div>
        </div>
    )
}

export default HeroSection