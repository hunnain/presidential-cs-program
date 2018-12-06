import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import president from './img/president.jpg';
import hunaidLakhani from './img/hunaidLakhani.jpg';
import sulemanMehdi from './img/sulemanMehdi.jpg';
import DirecTorCard from './AboutCard';

class About extends Component {
    render() {
        return (
            <div style={{ margin: '10%' }}>

                <div className="col-md-12" >
                    <DirecTorCard />
                </div>





                {/* <div className="contianer" style={{ margin: "15%", marginTop: "10%" }}>
                    <div className="row">
                        <div className="col-md-4">
                            <img src={president} align="right" style={{ height: "250px" }} />
                        </div>
                        <div className="col-md-8">
                            <h1>President Dr. Arfi Alvi </h1>
                            <p style={{ textAlign: "justify" }}>
                                Dr. Arif Alvi was sworn in as the 13th President of Islamic Republic of Pakistan on 9th September 2018. Dr. Arif Alvi was born in 1949 and completed his early education in Karachi.
                                He did his Bachelor of Dental Surgery (BDS) from De’ Montmorency College of Dentistry, Lahore where he was declared the “Best Graduate”. He completed his Masters of Science in the
                                field of Prosthodontics from University of Michigan (1975) and in Orthodontics from University of Pacific, San Francisco (1982). He was awarded fellowship ‘Diplomatic American Board
                                of Orthodontists (1995)’.</p>
                        </div>
                    </div>
                    <div class="row">
                        <div className="col-md-4">
                            <img src={hunaidLakhani} align="right" style={{ height: "300px", width: 259 }} />
                        </div>
                        <div className="col-md-8">
                            <h1>Hunaid Lakhani</h1>
                            <p style={{ textAlign: "justify" }}>
                                AS AN EDUCATIONIST Hunaid Hussain Lakhani envisions an educated Pakistan and has always
                                wanted the youth to progress. He wanted to make education available to the masses, providing
                                students from all socioeconomic backgrounds an equal opportunity to learn from the best of resources.
                                He established Asian Management Institute, currently known as Iqra University, an emblem of quality education and research in the country, and became the youngest Founding Chancellor.
                                After two decades of his steady commitment, Iqra University has emerged as the top ranked business school of Pakistan, duly recognized by HEC and CIEC Sindh. Iqra University has excelled further with international affiliations, including
                                an agreement with Harvard Business School (the first of its kind for a Pakistani University).</p>
                        </div>
                    </div>
                    <div class="row">
                        <div className="col-md-4">
                            <img src={sulemanMehdi} align="right" style={{ height: "300px", width: 259 }} />
                        </div>
                        <div className="col-md-8">
                            <h1>Suleman Mehdi</h1>
                            <p style={{ textAlign: "justify" }}>
                                Sulaiman holds a Master’s degree and is also a Fellow member of the Institute of Corporate Secretaries of Pakistan (FCISP).
                                He has over 13 years experience of working with leading Financial Services Groups in senior positions in the area of operations, investments, marketing, legal and corporate affairs.
                                 He joined Central Insurance (CICL) as the COO & CS on October 01, 2010 and led the insurance license revocation process. The revocation of license and its business restructuring
                                 from CICL to Cyan is a landmark transaction, and the first of its kind in Pakistan.
                                He has been made the CEO of Cyan wef 26 August, 2014.He is also Chairman of Pebbles Limited.
                            </p>
                        </div>
                    </div>

                </div> */}

            </div>
        );
    }
}

export default About;
