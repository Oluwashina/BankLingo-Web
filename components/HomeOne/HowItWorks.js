import Link from 'next/link';
import ReactWOW from 'react-wow';
import ModalVideo from 'react-modal-video';
import '../../node_modules/react-modal-video/scss/modal-video.scss';

class HowItWorks extends React.Component {
    state = {
        isOpen: false
    };

    openModal = () => {
        this.setState({isOpen: true})
    };

    render() {
        return (
            <section id="how-it-works" className="how-it-works gray-bg"> 
                <div className="container"> 
                    <div className="row"> 
                        <div className="col-lg-12"> 
                            <ReactWOW delay='0.3s' animation='fadeInUp'>
                                <div className="section-title"> 
                                    <h2>How Lending works?</h2>
                                    <p>BankLingo’s Digital-Lending-Platform (DLP) offers operating capabilities to support day-to-day execution of lending process. We have built APIs to support end-to-end  the loan application workflow from product setup to customer’s loan application and helping the business make all right decisions when it comes to credit.</p>
                                </div>
                            </ReactWOW>
                        </div>
                    </div>
                    
                    <div className="row"> 
                        <div className="col-lg-6"> 
                            <div className="hiw-feature-content"> 
                                <ReactWOW delay='0.3s' animation='fadeInUp'>
                                    <div className="single-hiw-feature"> 
                                        <i className="icofont icofont-login"></i>
                                        <h4>Loan Origination</h4>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                    </div>
                                </ReactWOW>
                                
                                <ReactWOW delay='0.4s' animation='fadeInUp'>
                                    <div className="single-hiw-feature"> 
                                        <i className="icofont icofont-test-tube-alt"></i>
                                        <h4>Loan Underwritting/Decision making</h4>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                    </div>
                                </ReactWOW>
                                
                                <ReactWOW delay='0.5s' animation='fadeInUp'>
                                    <div className="single-hiw-feature"> 
                                        <i className="icofont-chart-histogram-alt"></i>
                                        <h4>Loan disbursement</h4>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                    </div>
                                </ReactWOW>
                                
                                <ReactWOW delay='0.6s' animation='fadeInUp'>
                                    <div className="single-hiw-feature"> 
                                        <i className="icofont-light-bulb"></i>
                                        <h4>Loan servicing or collection</h4>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                    </div>
                                </ReactWOW>

                                <ReactWOW delay='0.6s' animation='fadeInUp'>
                                    <div className="single-hiw-feature"> 
                                        <i className="icofont-light-bulb"></i>
                                        <h4>Reports</h4>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                    </div>
                                </ReactWOW>
                            </div>
                        </div>
                        
                        <div className="col-lg-5 offset-lg-1"> 
                            <ReactWOW delay='0.6s' animation='fadeInUp'>
                                <div className="video-demo-content"> 
                                    <img src={require("../../images/video-demo.jpg")} alt="Video Demo Image" className="img-circle" />
                                    <div className="play-video-icon">
                                        
                                        <Link href="#">
                                            <a 
                                                onClick={e => {e.preventDefault(); this.openModal()}}
                                                className="popup-youtube"
                                            >
                                                <i className="icofont-play"></i>
                                                <div className="sonar-wrapper">
                                                    <div className="sonar-emitter">
                                                        <div className="sonar-wave"></div>
                                                    </div>
                                                </div>
                                            </a>
                                        </Link>

                                    </div>
                                </div>
                            </ReactWOW>
                        </div>
                        <ModalVideo 
                            channel='youtube' 
                            isOpen={this.state.isOpen} 
                            videoId='szuchBiLrEM' 
                            onClose={() => this.setState({isOpen: false})} 
                        />
                    </div>
                </div>
            </section>
        );
    }
}

export default HowItWorks;