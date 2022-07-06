import React from "react";
import "./Project.css";
import Project1 from './img/project.jpg';
import Project2 from './img/project.jpg';
import Project3 from './img/project.jpg';
import Project4 from './img/project.jpg';

function Project() {
    return (
        <div className="project component__space" id="Portfolio">
            <div className="heading">
                <h1 className="heading">My Projects</h1>
                <p className="heading p__color">
                    There are many variations of passages of Lorem Ipsum available,
                </p>
                <p className="heading p__color">
                    but the majority have suffered alteration.
                </p>
            </div>
            <div className="container">
                <div className="row">

                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project1} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Web Design</h5>
                                <h4 className="project__text">Smart N Designer</h4>
                                <a href="#" className="project__btn">View Details</a>
                            </div>
                        </div>
                    </div>


                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project2} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Web Development</h5>
                                <h4 className="project__text">Azza Jewellery</h4>
                                <a href="#" className="project__btn">View Details</a>
                            </div>
                        </div>
                    </div>


                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project3} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">UX Design</h5>
                                <h4 className="project__text">Premium Insurance at Sahl</h4>
                                <a href="#" className="project__btn">View Details</a>
                            </div>
                        </div>
                    </div>


                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project4} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Mobile App Design</h5>
                                <h4 className="project__text">Shopin shoeses</h4>
                                <a href="#" className="project__btn">View Details</a>
                            </div>
                        </div>
                    </div>


                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project3} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">3D Illustrations</h5>
                                <h4 className="project__text">Summer Vibes Icon Set</h4>
                                <a href="#" className="project__btn">View Details</a>
                            </div>
                        </div>
                    </div>


                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project4} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">UX Research</h5>
                                <h4 className="project__text">Perfume's Buyers</h4>
                                <a href="#" className="project__btn">View Details</a>
                            </div>
                        </div>
                    </div>

                    <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
                        <button className="view__more pointer btn">View more</button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Project;
