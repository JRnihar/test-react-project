import React from 'react';
import './AboutUS.css'

const AboutUs = () => {
    return (
        <div>
            <div class="page-section" id="about">
                <div class="container">
                    <div class="text-center">
                        <h2 class="section-heading text-uppercase">About Us</h2>
                        <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <ul class="timeline">
                        <li>
                            <div class="timeline-image"></div>
                            <div class="timeline-panel">
                                <div class="timeline-heading">
                                    <h4>2009-2011</h4>
                                    <h4 class="subheading">Our Humble Beginnings</h4>
                                </div>
                                <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                            </div>
                        </li>
                        <li class="timeline-inverted">
                            <div class="timeline-image"></div>
                            <div class="timeline-panel">
                                <div class="timeline-heading">
                                    <h4>March 2011</h4>
                                    <h4 class="subheading">An Agency is Born</h4>
                                </div>
                                <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                            </div>
                        </li>
                        <li>
                            <div class="timeline-image"></div>
                            <div class="timeline-panel">
                                <div class="timeline-heading">
                                    <h4>December 2015</h4>
                                    <h4 class="subheading">Transition to Full Service</h4>
                                </div>
                                <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
            <section id="team" class="team team-bg py-5">
                <div class="container">

                    <div class="section-title">
                        <p class="main-team-subheading">Team</p>
                        <p class="main-team-heading">Our Hardworking Team</p>
                    </div>

                    <div class="row">

                        <div class="col-lg-6">
                            <div class="member d-flex align-items-start">
                                <div class="pic"><img src="https://www.pngfind.com/pngs/m/467-4675403_png-file-blank-person-transparent-png.png" class="img-fluid" alt=""/></div>
                                <div class="member-info">
                                    <p class="member-heading">John Doe</p>
                                    <span>Chief Executive Officer</span>
                                    <p class="member-para">Explicabo voluptatem mollitia et repellat</p>
                                    <div class="social">
                                        <a href=""><i class="fab fa-twitter team-icon"></i></a>
                                        <a href=""><i class="fab fa-facebook-f team-icon"></i></a>
                                        <a href=""><i class="fab fa-instagram team-icon"></i></a>
                                        <a href=""> <i class="fab fa-linkedin-in team-icon"></i> </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 mt-4 mt-lg-0">
                            <div class="member d-flex align-items-start">
                                <div class="pic"><img src="https://www.pngfind.com/pngs/m/467-4675403_png-file-blank-person-transparent-png.png" class="img-fluid" alt=""/></div>
                                <div class="member-info">
                                    <p class="member-heading">Jane Doe</p>
                                    <span>Product Manager</span>
                                    <p class="member-para">Aut maiores voluptates amet et quis</p>
                                    <div class="social">
                                        <a href=""><i class="fab fa-twitter team-icon"></i></a>
                                        <a href=""><i class="fab fa-facebook-f team-icon"></i></a>
                                        <a href=""><i class="fab fa-instagram team-icon"></i></a>
                                        <a href=""> <i class="fab fa-linkedin-in team-icon"></i> </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 mt-4">
                            <div class="member d-flex align-items-start">
                                <div class="pic"><img src="https://www.pngfind.com/pngs/m/467-4675403_png-file-blank-person-transparent-png.png" class="img-fluid" alt=""/></div>
                                <div class="member-info">
                                    <p class="member-heading">John Doe</p>
                                    <span>CTO</span>
                                    <p class="member-para">Quisquam facilis cum velit laborum corrupti</p>
                                    <div class="social">
                                        <a href=""><i class="fab fa-twitter team-icon"></i></a>
                                        <a href=""><i class="fab fa-facebook-f team-icon"></i></a>
                                        <a href=""><i class="fab fa-instagram team-icon"></i></a>
                                        <a href=""> <i class="fab fa-linkedin-in team-icon"></i> </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 mt-4">
                            <div class="member d-flex align-items-start">
                                <div class="pic"><img src="https://www.pngfind.com/pngs/m/467-4675403_png-file-blank-person-transparent-png.png" class="img-fluid" alt=""/></div>
                                <div class="member-info">
                                    <p class="member-heading">Jane Doe</p>
                                    <span>Accountant</span>
                                    <p class="member-para">Dolorum tempora officiis odit laborum officiis</p>
                                    <div class="social">
                                        <a href=""><i class="fab fa-twitter team-icon"></i></a>
                                        <a href=""><i class="fab fa-facebook-f team-icon"></i></a>
                                        <a href=""><i class="fab fa-instagram team-icon"></i></a>
                                        <a href=""> <i class="fab fa-linkedin-in team-icon"></i> </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    );
};

export default AboutUs;