import React from 'react';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerate';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';

const Hero = () => {
    return (
        <section className="relative pb-20 pt-36 bg-white dark:bg-black-100">
            <div className="spotlights-container absolute inset-0 pointer-events-none">
                <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
                <Spotlight className="-top-10 left-full fill-white h-[80vh] w-[50vw]" fill="purple" />
                <Spotlight className="top-28 left-80 md:-left-32 h-[80vh] w-[50vw]" fill="blue" />
            </div>

            <div className="absolute inset-0 flex items-center justify-center dark:bg-black-100 bg-white bg-grid-black/[0.2] dark:bg-grid-white/[0.03]">
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            </div>

            <div className="relative flex flex-col items-center justify-center z-10 my-20 max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] mx-auto text-center">
                <h2 className="uppercase tracking-widest text-xs text-blue-100 mb-4">
                    Welcome to the future of web development
                </h2>
                <TextGenerateEffect
                    className="text-[40px] md:text-5xl lg:text-6xl leading-tight"
                    words="We are a team of developers, designers, and marketers that are passionate about building the future of the web. We are here to help you build your dream website, app, or online store. We offer a wide range of services including web design, web development, e-commerce development, and digital marketing. Our team is dedicated to providing you with"
                />
                <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
                    Hi, I'm a web developer and designer with a passion for building beautiful and functional websites. I have experience working with a variety of clients, from small businesses to large corporations. I specialize in front-end development, but I also have experience with back-end development and digital marketing. I'm always looking for new projects to work on, so if you have an idea for a website or app, I'd love to hear from you! Let's work together to bring your vision to life.
                </p>
                <a href="#about">
                    <MagicButton title="Show my work"
                        icon={<FaLocationArrow />}
                        position='right'
                    />
                </a>
            </div>
        </section>
    );
};

export default Hero;
