import React from "react";

export default function About(prop) {





    return (
        <div className="container" >
            <h1 style={{ color: prop.mode === 'dark' ? 'white' : 'black' }}>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                            style={{ color: prop.mode === 'dark' ? 'white' : 'black', backgroundColor: prop.mode === 'dark' ? '#707070' : 'white' }}
                        >
                            About Developer
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body" style={{ color: prop.mode === 'dark' ? 'white' : 'black', backgroundColor: prop.mode === 'dark' ? '#424242' : 'white' }}>
                        Hello, My Name is <strong>Shahbaj Ahmed</strong> I am a tech enthusiast and passionate about coding, driven to learn and master the latest technologies. I strive to create engaging and functional technologies that leave a lasting impact on users. currently, i am pursuing BCA from <a target="_blank" href="https://www.rkdf.ac.in/">RKDF University</a> and if you wanna know Something extra here is my <a target="_blank" href="https://drive.google.com/file/d/1wTmn5_zo3FLJbjDBlAfkYnwTsUT9yB97/view?usp=sharing">CV</a>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                            style={{ color: prop.mode === 'dark' ? 'white' : 'black', backgroundColor: prop.mode === 'dark' ? '#707070' : 'white' }}

                        >
                            About Website
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body" style={{ color: prop.mode === 'dark' ? 'white' : 'black', backgroundColor: prop.mode === 'dark' ? '#424242' : 'white' }}>
                        I have created a website which is called<strong> TextDoctor </strong> and it is a utility which can be used to menupulate your text in the way you want and the lectnologies used in this website are mentioned
                        <ol>
                            <li><a href="https://react.dev/learn">React</a></li>
                            <li><a href="https://getbootstrap.com/docs/5.3/getting-started/introduction/">Bootstrap</a></li>
                            <li><a href="https://reactrouter.com/en/main/start/tutorial">React Router</a></li>
                            <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML">HTML</a></li>
                            <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript</a></li>
                            <li><a href="https://docs.npmjs.com/">NPM</a></li>
                        </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
