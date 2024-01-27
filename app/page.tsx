'use client'

import Footer from '@/components/Footer'
import ReviewSet from '@/components/reviews/ReviewSet'
import Hero from '@/components/hero/Hero'
import Promotional from '@/components/promotional/Promotional'
import Banner from '@/components/Banner'

export default function App(){
    return (
        <section
            className="h-screen bg-cover md:bg-top bg-center"
        >
            <Banner />
            <Hero />
            <div className='dark:bg-gray-800'>
                <Promotional />
                <ReviewSet />
                <Footer />
            </div>
        </section>
    )
}