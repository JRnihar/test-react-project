import React from 'react';
import { Carousel } from '3d-react-carousal';
// import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import  hero_img  from '../../images/hero-img.png';
import './Home.css'



const Home = () => {
    let slides = [
        <img src="https://picsum.photos/800/300/?random" alt="1" />,
        <img src="https://picsum.photos/800/301/?random" alt="2" />,
        <img src="https://picsum.photos/800/302/?random" alt="3" />,
        <img src="https://picsum.photos/800/303/?random" alt="4" />,
        <img src="https://picsum.photos/800/304/?random" alt="5" />];

    const callback = function (index) {
        console.log("callback", index);
    }
    return (
      <div>
            <div className='bg'>
                <div class="mt-5">
                    <div class="row">
                        <div class="col-lg-6">

                            <div class="p-5 mt-4">
                                <h1 class="display-4">Welcome to our world</h1>
                                <p class="lead">Crow's nest schooner ho scallywag hail-shot gabion salmagundi. Doubloon careen code of conduct lugsail hulk ye long clothes. </p>
                                <Link to="contact_us"> <a href="#" class="btn btn-outline-primary">Get In Touch</a></Link>
                            </div>
                        </div>
                        <div class="col-lg-6 p-3">
                            <img class="w-75" src={hero_img} alt="images" />
                        </div>
                    </div>
                </div>

            </div>
           <div className='carusel_bg p-5'>
                <div className=''>
                    <h1 className='text-white d-flex justify-content-center'>Let's see our some projects</h1>
                </div>
                <div className='mt-5'>

                    <Carousel slides={slides} autoplay={false} interval={1000} onSlideChange={callback} />
                </div>
           </div>

            <div className='faqbody  p-3'>
                <div id="faq" className="faq-body p-5">
                    <div class="faq-header ">
                        <h3 class="faq-title">FAQ's</h3>
                        <div class="seperator"></div>
                    </div>
                    <div class="faq-list">
                        <div>
                            <details open>
                                <summary title="How can I pay for my appointment?">How can I pay for my appointment?</summary>
                                <p class="faq-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed illo quod debitis ducimus iste soluta rerum ipsa consequuntur minus quae. Ea minus ex corporis, pariatur quia rerum sequi iusto odit enim expedita fugiat, assumenda molestiae earum iste blanditiis, ipsum ratione.</p>
                            </details>
                        </div>
                        <div>
                            <details>
                                <summary title="What can I expect at my first consultation?">What can I expect at my first consultation?</summary>
                                <p class="faq-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, molestias similique! Molestiae sapiente omnis, illo facere odit reprehenderit eveniet consequuntur sit minus adipisci temporibus eius inventore quidem. Dignissimos, facere quae. Rem quas a laborum est officia pariatur voluptatum iusto perferendis aut labore fugit magni inventore nulla architecto, velit, facilis itaque.</p>
                            </details>
                        </div>
                        <div>
                            <details>
                                <summary title="What are your opening hours?">What are your opening hours?</summary>
                                <p class="faq-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos error ea accusantium? Sunt cum in, repudiandae et facere at nesciunt commodi non quia earum libero aliquid labore obcaecati repellendus consequatur! Nesciunt impedit ducimus illum unde optio veritatis atque facere, voluptate a odio asperiores laudantium rerum.</p>
                            </details>
                        </div>
                        <div>
                            <details>
                                <summary title="Do I need a referral?">Do I need a referral?</summary>
                                <p class="faq-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quisquam numquam labore explicabo cupiditate laboriosam. Ipsam explicabo possimus illum aspernatur.</p>
                            </details>
                        </div>
                        <div>
                            <details>
                                <summary title="Is the cost of the appointment covered by private health insurance?">Is the cost of the appointment covered by private health insurance?</summary>
                                <p class="faq-content">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo quos quam asperiores enim sequi nihil? Iure blanditiis autem in ratione rerum, sequi cupiditate eos nemo iusto unde eaque voluptatum alias, porro aliquid sunt. Nesciunt veritatis, ex esse tempora laudantium officiis? Quas corrupti a aut sed quaerat, ipsa incidunt tempora velit dolor distinctio repellat tenetur illum consectetur quos veniam eius provident earum doloremque commodi! Minus amet, obcaecati rem, modi accusantium ad, deleniti possimus incidunt laudantium vitae iusto laborum culpa! Similique, repellat.</p>
                            </details>
                        </div>
                        <div>
                            <details>
                                <summary title="What are the parking and public transport options?">What are the parking and public transport options?</summary>
                                <p class="faq-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quisquam numquam labore explicabo cupiditate laboriosam. Ipsam explicabo possimus illum aspernatur.</p>
                            </details>
                        </div>
                    </div>
                </div>
</div>
           
      </div>
    );
};

export default Home;