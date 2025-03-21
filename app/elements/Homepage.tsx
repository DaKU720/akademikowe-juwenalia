import EventPage from "@/app/elements/EventSection/page";
import Hero from "@/app/elements/HeroSection/page"
import Footer from "@/app/elements/Footer/page"

const Homepage = () => {
    return (
        <>
            <div>
                <Hero />
                <EventPage />

                <Footer />
            </div>
        </>
    )
}
export default Homepage