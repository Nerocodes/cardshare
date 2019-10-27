import React from 'react';
import Nav from '../components/Navbar';
import Button from 'react-bootstrap/Button';
import MainCard from '../components/Card';
import Footer from '../components/Footer';
import './homepage.css';


const Homepage = () => {
    return (
        <section className="homepage">
            <header className="header">
                <Nav className="navbar"/>
                <div className="header-body d-flex align-items-center">
                    <div className="image">
                        <img src="https://res.cloudinary.com/drlcfqzym/image/upload/v1572131667/Frame_1.png" alt="Cards"></img>
                    </div>
                    <div className="intro text-center">
                        <h1>Send Cards To Loved Ones</h1>
                        <Button variant="primary" size="lg">See How It Works</Button>
                    </div>
                </div>
            </header>
            <main>
                <section className="how-it-works">
                    <h2>How It Works</h2>
                    <div className="instructions d-flex justify-content-between">
                        <div className="instruction">
                            <div className="title">
                                <h4>Create or Pick a Card</h4>
                            </div>
                            <p className="description mt-5">
                                Create and customize a card or pick from our awesome library.
                            </p>
                        </div>
                        <div className="instruction">
                            <div className="title">
                                <h4>Write and Sign Card</h4>
                            </div>
                            <p className="description mt-5">
                                Write something special, send a message and leave a signature.
                            </p>
                        </div>
                        <div className="instruction">
                            <div className="title">
                                <h4>Send to Loved One</h4>
                            </div>
                            <p className="description mt-5">
                                Send your card to a single person or multiple people all at the same time.
                            </p>
                        </div>
                    </div>
                    <Button variant="primary" size="lg">Get Started</Button>
                </section>
                <section className="card-showcase">
                    <h2>Card Showcase</h2>
                    <div className="cards d-flex justify-content-between flex-wrap">
                        <MainCard
                            image="https://res.cloudinary.com/drlcfqzym/image/upload/v1572139263/heart-3280747_1280.jpg"
                            title="Heart background design"
                            name="jeremy"
                            price="Free"
                            category="Love"
                        />
                        <MainCard
                            image="https://res.cloudinary.com/drlcfqzym/image/upload/v1572139263/heart-3280747_1280.jpg"
                            title="Heart background design"
                            name="jeremy"
                            price="Free"
                            category="Love"
                        />
                        <MainCard
                            image="https://res.cloudinary.com/drlcfqzym/image/upload/v1572139263/heart-3280747_1280.jpg"
                            title="Heart background design"
                            name="jeremy"
                            price="Free"
                            category="Love"
                        />
                        <MainCard
                            image="https://res.cloudinary.com/drlcfqzym/image/upload/v1572139263/heart-3280747_1280.jpg"
                            title="Heart background design"
                            name="jeremy"
                            price="Free"
                            category="Love"
                        />
                        <MainCard
                            image="https://res.cloudinary.com/drlcfqzym/image/upload/v1572139263/heart-3280747_1280.jpg"
                            title="Heart background design"
                            name="jeremy"
                            price="Free"
                            category="Love"
                        />
                        <MainCard
                            image="https://res.cloudinary.com/drlcfqzym/image/upload/v1572139263/heart-3280747_1280.jpg"
                            title="Heart background design"
                            name="jeremy"
                            price="Free"
                            category="Love"
                        />
                    </div>
                    <div className="text-center">
                        <Button variant="primary" size="lg">Load More</Button>
                    </div>
                </section>
            </main>
            <Footer />
        </section>
    )
}

export default Homepage;