import React from 'react'
import ThemeButton from './ui/ThemeButton'

const HeroSection = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between  bg-[url('/Influe_mobile.png')] bg-no-repeat bg-right">
            <div className="space-y-[30px] pt-[57px] pb-[83px] max-w-[516px] ml-[114px]">
                <div>
                    <h1 className="text-4xl font-bold text-white text-[35px] font-urbanist">
                        Want to Turn Social Media Into a Profitable Career?
                    </h1>
                    <div className='space-y-4'>
                        <h2 className="text-4xl font-bold text-brand-secondary50 text-[35px] font-urbanist text-shadow-lg text-shadow-brand-primary" >
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
                <div className='w-fit flex flex-col items-center gap-[10px]'>
                    <ThemeButton>
                        <div className='flex gap-2 items-center'>
                            <span>GET STARTED</span>
                            <img src='/right-arrow.svg' alt='arrow' />
                        </div>
                    </ThemeButton>
                    <p className='text-white font-figtree font-medimum text-xs'>1-minute quiz for personalized Insights</p>
                </div>
                <footer className='space-y-3'>
                    <p className='text-text-primary font-figtree font-medimum text-xs'>By clicking "Get Started", you agree with Terms and Conditions, Privacy Policy, Subscription Terms Fametonic 2025 ©All Rights Reserved.</p>
                    <p className='text-text-primary font-figtree font-medimum text-xs'>Fametonic 2025 ©All Rights Reserved.</p>
                </footer>
            </div>
            <div className="md:w-1/2 flex justify-center">
                {/* <img src='/Influe_mobile.png' alt='' /> */}
            </div>
        </section>
    )
}

export default HeroSection