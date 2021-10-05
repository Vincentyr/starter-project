import React from "react";

class About extends React.components {
    render {
        return (
            <section id="about">
                <div>
                    <div>
                        <h1>
                            Hi, I'm Vincent
                            <br>I love to code and create cool stuff</br>
                        </h1>
                        <div>
                            <a
                                href='#contact'>
                                Drop me a message!
                            </a>
                        </div>
                        <div>
                            <a
                                hef="#projects">
                                See my past works
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;