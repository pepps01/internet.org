import React from 'react'


import './styles.css';


function Home() {
  return (
    <div>
        <div className='wrapper'>

            {/* Navbar Behviour */}
            <nav className='navbar-behaviour'>
                <div className='nav-logo'>Internet</div>

                <div className='nav-header'>
                    <div className=''>
                        <p>Home</p>
                    </div>
                    <div className=''>
                        <p>About Us</p>
                    </div>
                    <div className=''>
                        <p>Package</p>
                    </div>
                    <div className=''>
                        <p>Service</p>
                    </div>
                </div>

                <div className='handler'>
                    <div>English</div>
                    <div>Sign Up</div>
                </div>
            </nav>

            <main>
                <div className='main-header'>
                    <div className='header-advertise'>
                        <h1>The Best Internet Provider Service at Home</h1>
                        <p>DOT Internet is ranked #1 in customer satisfaction for Residential Internet Ser ie in the world according to newspaper. </p>

                        <div>
                            <button>Get Started</button>
                            <button>Learn More</button>
                        </div>
                    </div>
                    <div className='header-picture'></div>
                </div>
                <div className='brand-list'></div>

                <div className="special-header">
                        <h6>Services</h6>
                        <h2>Our Special Services !</h2>

                        <p>We provide a full suite of superload internet & data connectivity services for coporate  business with dedicated bandwidth and mutipoint data service </p>
                    <div className='special-table'>

                        <div className='service-list'>
                            <div className='row'>
                                <div className='class-view'>
                                    <h1>Corporate Internet</h1>
                                    <p>Corporate Internet Banking means on electroni payment systen</p>
                                </div>
                                <div className='class-view'>
                                    <h1>Home Internet</h1>
                                    <p>Home internet is a broadband service offering you fool connectivity</p>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='class-view'>
                                    <h1>Fiverr Net</h1>
                                    <p>Fiverr is a global platform connecting business with on...</p>
                                </div>
                                <div className='class-view'>
                                    <h1>Wireless Network</h1>
                                    <p>A wireless network refers to the computer network that makes use of r</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='special-help'>
                    <div className='special-help-picture'></div>
                    <div className='available'>
                        <h1>We Are Also Available For Your Help.</h1>
                        <p>SOT Internet is ranked #1 in customer satisfaction for Residential Internet Service in the world according to newpaper</p>

                        <div className='join-now'>
                            <button>Join Now</button>
                            <button>Learn More</button>
                        </div>
                    </div>
                </div>

               <div className='faqs'>
                <div>
                    <h2>FAQ</h2>
                    <p></p>
                    <input/>
                    <button>Run the alarm</button>
                    <button>See More Questions</button>
                </div>
                <div>
                    <div className='accordions'>
                        <div className='accordion-1'>
                            <div className='accordion-handler1'>
                                <h3>How to Register on DOT Internet</h3>
                            </div>
                            <div className='accordion-body'>
                              <p>Compromise in its affluence as registration go me in with DOT internet</p>
                            </div>
                        </div>

                        <div className='accordion-1'>
                            <div className='accordion-handler1'>
                                <h3>Is this how the Microservice for DOT Internet works?</h3>
                            </div>
                            <div className='accordion-body'>
                              <p>Compromise in its affluence as registration go me in with DOT internet</p>
                            </div>
                        </div>

                        <div className='accordion-1'>
                            <div className='accordion-handler1'>
                                <h3>What is DOT Internet</h3>
                            </div>
                            <div className='accordion-body'>
                              <p>Compromise in its affluence as registration go me in with DOT internet</p>
                            </div>
                        </div>
                    </div>
                </div>
               </div>

               <div className='newsletter'>
                    <h2>Newsletter</h2>
                    <h1>Get New Offer on Your Email</h1>
                    <p>Welcome address to the newsletter of the year</p>

                    <div>
                        <a href=''>Verify your Link</a>
                        <a href=''>Subscribe</a>
                    </div>
               </div>
            </main>
          </div>

            <footer>
                <div className='footer'>
                    <div className='top-footer'>
                        <div className=''>
                            <h3>Internet.org</h3>
                        </div>
                        <div className=''>
                            <h3>Company</h3>
                        </div>
                        <div className=''>
                            <h3>Support</h3>
                        </div>
                        <div className=''>
                            <h3>Get In Touch</h3>
                        </div>
                    </div>
                    <div className='bottom-footer'>
                        <div>
                            <h5>Over 8,912,000 satisfied with our appearance</h5>
                            <div className='social-links'>
                                <div>F</div>
                                <div>T</div>
                                <div>I</div>
                            </div>
                        </div>
                        <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Service</li>
                                <li>Contact Us</li>
                        </ul>
                        <ul>
                                <li>IT Support</li>
                                <li>You</li>
                                <li>Company Policy</li>
                                <li>Partner with Us</li>
                        </ul>
                        <ul>
                                <li>080772018112</li>
                                <li>You</li>
                                <li>Code Right</li>
                        </ul>
                    </div>

                     <hr className='hr'></hr>
                    <div className='caption'>
                        <p>Built by Sunny Pepple</p>
                    </div>
                 </div>
            </footer>
    </div>
  )
}

export default Home