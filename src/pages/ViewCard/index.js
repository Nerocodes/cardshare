import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import SignatureCanvas from 'react-signature-canvas';
import CreatableSelect from 'react-select/creatable';
import Spinner from 'react-bootstrap/Spinner';
import domtoimage from 'dom-to-image';
import axios from 'axios';
import './viewcard.css';
import MainCard from '../../components/Card';

const ViewCard = () => {
    const [isSaved, setIsSaved] = useState(false);
    const [message, setMessage] = useState('');
    const [signature, setSignature] = useState({});
    const [signatureUrl, setSignatureUrl] = useState(null);
    const [imgUrl, setImgUrl] = useState('');
    const [emails, setEmails] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const trim = () => {
        setSignatureUrl(signature.getTrimmedCanvas().toDataURL('image/png'));
    }

    const send = () => {
        setIsLoading(true);
        const image_url = imgUrl;
        const emailArr = [];
        emails.map((email) => {
            return emailArr.push(email.value);
        });
        const comma_seperated_emails = emailArr.join(',');
        axios.post('https://andelahack19.herokuapp.com/api/card/test', { image_url, comma_seperated_emails})
            .then(res => {
                setIsLoading(false);
                console.log(res.data);
            })
            .catch(err => console.log(err));
    }

    const download = () => {
        var node = document.querySelector('#full-card');

        domtoimage.toJpeg(node, { quality: 0.95, bgcolor: '#ffffff', style: { margin: '0' } })
            .then(function (dataUrl) {
                var link = document.createElement('a');
                setImgUrl(dataUrl);
                link.download = 'card';
                link.href = dataUrl;
                link.click();
            });
    }

    return (
        <section className="view-card-page">
            <section className="view-card">
                <h2 className="title">Merry Cristmas <small>by Jeremy</small></h2>
                <div className="full-card d-flex" id="full-card">
                    <div className="image">
                        <img src="https://res.cloudinary.com/drlcfqzym/image/upload/v1572152549/merry-christmas-2930882_1280.jpg" alt="cristmas"></img>
                    </div>
                    { isSaved ? (
                        <div className="details align-self-center">
                            <div className="preview">
                                <p className="message">{message}</p>
                                <img
                                    src={signatureUrl}
                                    alt="signature"
                                    className="signature"
                                ></img>
                            </div>
                        </div>
                    ) : <div className="details align-self-center">
                    <Form className="card-form text-center">
                        <Form.Group controlId="message">
                            <Form.Label>What do you want to say?</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows="5"
                                value={message}
                                onChange={(event) => setMessage(event.target.value)}
                            />
                        </Form.Group>
                        <div className="signature">
                            <p>Signature</p>
                            <SignatureCanvas penColor='#000000'
                                canvasProps={{width: 200, height: 100, className: 'sigCanvas'}} 
                                ref={(ref) => { setSignature(ref) }}
                            />
                        </div>
                        <Button variant="primary" type="submit" onClick={() => {
                            setIsSaved(!isSaved);
                            trim();
                            }}>
                            Save
                        </Button>
                    </Form>
                </div>
                    }
                </div>
                { isSaved ? (
                    <div className="btn-container">
                        <CreatableSelect
                            isMulti
                            options={[{value: '', label: ''}]}
                            className="select"
                            placeholder="Enter email to send card"
                            onChange={(options) => setEmails(options)}
                        />
                        <Button variant="outline-primary" className="ml-1" type="submit" onClick={() => {
                            send();
                            }}>
                            { isLoading ? (
                                <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                />
                            ) : 'Send' }
                        </Button>
                        <Button variant="outline-primary" className="ml-3" type="submit" onClick={() => {
                            download();
                            }}>
                            Download
                        </Button>
                        <Button variant="outline-primary" className="ml-3" type="submit" onClick={() => {
                            setIsSaved(!isSaved);
                            }}>
                            Edit
                        </Button>
                    </div>
                ) : null}
            </section>
            <section className="similar-cards">
                <h2>Similar Cards</h2>
                <div className="cards px-5 d-flex justify-content-between flex-wrap">
                    <MainCard
                        image="https://res.cloudinary.com/drlcfqzym/image/upload/v1572182221/christmas-2982969_1280.jpg"
                        title="Season's greetings"
                        name="jeremy"
                        price="Free"
                        category="Love"
                    />
                    <MainCard
                        image="https://res.cloudinary.com/drlcfqzym/image/upload/v1572182195/christmas-2894952_1280.png"
                        title="Happy New Year design"
                        name="jeremy"
                        price="Free"
                        category="Love"
                    />
                    <MainCard
                        image="https://res.cloudinary.com/drlcfqzym/image/upload/v1572182238/christmas-card-2999091_1280.png"
                        title="Merry Christmas design"
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