import OwlCarousel from 'react-owl-carousel3';
import VisibilitySensor from "react-visibility-sensor";

const options = {
    items: 1,
    nav: true,
    dots: false,
    touchDrag: false,
    mouseDrag: false,
    autoplay: false,
    autoplayHoverPause: true,
    loop: true,
    navText: [
        "<i class='icofont-long-arrow-left'></i>", 
        "<i class='icofont-long-arrow-right'></i>"
    ]
}

class Slider extends React.Component {
    render() {
        return (
            <div id="home" className="hompage-slides-wrapper">
                <OwlCarousel 
                    className="homepage-slides owl-carousel owl-theme"
                    {...options}
                >
                    {this.props.slideData.map((data, idx) => (
                        <div className="single-slider-item gradient-bg" key={idx}>
                            <div className="slide-item-table">
                                <div className="slide-item-tablecell">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-12 col-lg-7">
                                                <VisibilitySensor>
                                                    {({ isVisible }) => (
                                                        <div className="slider-text">
                                                            <h1
                                                                className={
                                                                    isVisible
                                                                        ? "animated fadeInUp slow opacityOne" : ''
                                                                }
                                                            >
                                                                { data.heading }
                                                            </h1>
                                                            <p
                                                                className={
                                                                    isVisible
                                                                        ? "animated fadeInUp slow opacityOne" : ''
                                                                }
                                                            >
                                                                { data.text }
                                                            </p>
                                                            
                                                            <div className="slide-button">
                                                                <a 
                                                                    href="#" 
                                                                    className={`
                                                                        slide-btn-white mr-10 ${isVisible ? "animated fadeInDown slow opacityOne" : ""}
                                                                    `}
                                                                >
                                                                    <i className="icofont-cloud-download"></i> 
                                                                    Request a demo
                                                                </a>
                                                                <a 
                                                                    href="#" 
                                                                    className={`
                                                                        slide-btn-bordered ${isVisible ? "animated fadeInDown slow opacityOne" : ""}
                                                                    `}
                                                                >
                                                                    Find Out More
                                                                </a>
                                                            </div>
                                                        </div>
                                                    )}
                                                </VisibilitySensor>
                                            </div>
                                            
                                            <div className="col-md-12 col-lg-5">
                                                <div className="welcome-phone">
                                                    <img src={require("../../images/app-mockup-1.png")} alt="App Mockup image" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </OwlCarousel>
            </div> 
        )
    }
}

Slider.defaultProps = {
    slideData: [
        {
            heading: "Manage your loan, deposits and investments with BankLingo",
            text: "BankLingo by NIDCOM Solutions is a light-weight, cloud based core banking solution that empowers financial institutions to rapidly create financial products (Lending, Savings, Transactional banking, Deposits, etc.)"
        },
        {
            heading: "Awesome Jibo Mobile App",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
    ]
}

export default Slider;