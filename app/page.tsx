'use client'

import Footer from '@/components/Footer'
import ReviewSet from '@/components/reviews/ReviewSet'
import Hero from '@/components/hero/Hero'
import Promotional from '@/components/promotional/Promotional'


export default function App(){
    return (
        <section
            className="h-screen bg-cover md:bg-top bg-center"
        >
            <Hero />
            <Promotional />
            <ReviewSet />
            <Footer />
        </section>
    )
}