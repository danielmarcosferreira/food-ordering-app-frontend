import landingImage from "../assets/landing.png"
import appDownloadImage from "../assets/appDownload.png"

const HomePage = () => {
    return (
        <div className="flex flex-col gap-12">
            <div className="gb-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
                <h1 className="text-5x1 font-bold tracking-tight text-orange-600">
                    Tuck into a takeway today
                </h1>
                <span className="text-x1">Food is just a click away!</span>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
                <img src={landingImage} />
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                    <span className="font-bold text-3x1 tracking-tigher">
                        Order takeaway even faster!
                    </span>
                    <span>
                        Download the CityDelivery App for faster ordering and personalised recommendations
                    </span>
                    <img src={appDownloadImage} />
                </div>
            </div>
        </div>
    )
}

export default HomePage;