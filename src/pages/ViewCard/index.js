import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import SignatureCanvas from 'react-signature-canvas';
import './viewcard.css';
import MainCard from '../../components/Card';

const ViewCard = () => {
    return (
        <section className="view-card-page">
            <section className="view-card">
                <h2 className="title">Merry Cristmas <small>by Jeremy</small></h2>
                <div className="full-card d-flex">
                    <div className="image">
                        <img src="https://res.cloudinary.com/drlcfqzym/image/upload/v1572152549/merry-christmas-2930882_1280.jpg" alt="cristmas"></img>
                    </div>
                    <div className="details align-self-center">
                        <Form className="card-form text-center">
                            <Form.Group controlId="message">
                                <Form.Label>What do you want to say?</Form.Label>
                                <Form.Control as="textarea" rows="5" />
                            </Form.Group>
                            <div className="signature">
                                <p>Signature</p>
                                <SignatureCanvas penColor='#000000'
                                    canvasProps={{width: 200, height: 100, className: 'sigCanvas'}} 
                                />
                            </div>
                            <Button variant="primary" type="submit">
                                Save
                            </Button>
                        </Form>
                    </div>
                </div>
            </section>
            <section className="similar-cards">
                <h2>Similar Cards</h2>
                <div className="cards px-5 d-flex justify-content-between flex-wrap">
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
        </section>
    )
}

export default ViewCard;