import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import developer from '../images/developer.svg'
import online from '../images/online.svg'
import useWebAnimations, { slideInLeft, fadeIn, fadeInDown, slideInUp } from '@wellyshen/use-web-animations';
import { Link } from 'react-router-dom'

const Home = () => {
    const [show, setShow] = useState({
        elem1: false,
        elem2: false,
        elem3: false,
        elem4: false,
        elem5: false,
    }),
        { keyframes, timing } = slideInLeft,

        { ref: ref1 } = useWebAnimations(show.elem1 && {
            keyframes,
            timing: {
                ...timing,
                duration: 2000,
            }
        }),

        { ref: ref2 } = useWebAnimations(show.elem2 && {
            keyframes: [
                { transform: "scale3d(0.7, 0.7, 0.7)", opacity: 0 },
                { transform: "none", opacity: 1 }
            ],
            timing: {
                easing: 'ease-in-out',
                duration: 3000,
                delay: 1000,
                fill: 'both',
            }
        }),
        { keyframes: keyframes_ref3, timing: timing_ref3 } = fadeIn,
        { ref: ref3 } = useWebAnimations(show.elem3 && {
            keyframes: keyframes_ref3,
            timing: {
                ...timing_ref3,
                duration: 2000,
                delay: 1100,
                fill: 'backwards',
            }
        }),
        { keyframes: keyframes_ref4, timing: timing_ref4 } = fadeInDown,
        { ref: ref4 } = useWebAnimations(show.elem4 && {
            keyframes: keyframes_ref4,
            timing: {
                ...timing_ref4,
                duration: 2000,
            }
        }),
        { keyframes: keyframes_ref5, timing: timing_ref5 } = slideInUp,
        { ref: ref5 } = useWebAnimations(show.elem5 && {
            keyframes: keyframes_ref5,
            timing: {
                ...timing_ref5,
                duration: 2000,
            }
        });
    useLayoutEffect(() => {
        const topPos = elem => elem.getBoundingClientRect().top,
            getElem1 = document.getElementById('elem1'),
            getElem2 = document.getElementById('elem2'),
            getElem3 = document.getElementById('elem3'),
            getElem4 = document.getElementById('elem4'),
            getElem5 = document.getElementById('elem5'),
            onScroll = () => {
                const elem1Pos = topPos(getElem1),
                    elem2Pos = topPos(getElem2),
                    elem3Pos = topPos(getElem3),
                    elem4Pos = topPos(getElem4),
                    elem5Pos = topPos(getElem5),
                    scrollPos = window.innerHeight;
                if (elem1Pos > 0) {
                    setShow(state => ({ ...state, elem1: true }));
                }
                if (elem2Pos > 0) {
                    setShow(state => ({ ...state, elem2: true }));
                }
                if (elem3Pos < scrollPos && elem3Pos > 0) {
                    setShow(state => ({ ...state, elem3: true }));
                }
                if (elem4Pos < scrollPos) {
                    setShow(state => ({ ...state, elem4: true }));
                }
                if (elem5Pos < scrollPos) {
                    setShow(state => ({ ...state, elem5: true }));
                }
            };
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const { ref } = useWebAnimations({
        keyframes: [
            { transform: 'translateY(-20px)' },
            { transform: 'translateY(20px)' }
        ],
        timing: {
            duration: 2000,
            iterations: Infinity,
            direction: 'alternate',
            easing: 'ease-in-out',
        }
    }),
        { ref: online_ref } = useWebAnimations({
            keyframes: [
                { transform: 'skewX(-8deg)' },
                { transform: 'skewX(6deg)' },
            ],
            timing: {
                duration: 2000,
                iterations: Infinity,
                direction: 'alternate',
                easing: 'ease-in-out',
            }
        }),
        [showAlert, setAlert] = useState(false);
    useEffect(() => {
        window.addEventListener('load', () => {
            setTimeout(() => {
                setAlert(true)
            }, 10000)
        })
    }, [])

    return (

        <Container fluid className='body'>
            <Alert id='course_alert' show={showAlert} variant='info' onClose={() => setAlert(false)} dismissible>
                Here are some <Alert.Link as={Link} to="courses">free courses</Alert.Link>, let's have a look if you are interested.
            </Alert>
            <Row>
                <Col lg={true}>
                    <h1 ref={ref1} id='elem1'>What is Web Development?</h1>
                    <div ref={ref2} id='elem2'>
                        <p>Web development is everything involved in the creation of a website. Typically it refers to the coding and
                        programming side of web site production as opposed to the web design side. It encompasses everything from
                        a simple page of HTML text to complex, feature-rich applications designed to be accessed from
                        various Internet-connected devices.</p>
                        <Row>
                            <img ref={ref} src={developer} className='animated_svg' alt='developer' />
                        </Row>
                        <p>Examples of feature-rich web development include
                        ecommerce websites, content management systems (CMS) and social networks.
                        Common web development programming languages and software include Hypertext
                        Markup Language (HTML), Cascading Style Sheets (CSS), JavaScript, PHP, Drupal and MySQL.
                    </p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col ref={ref3} id='elem3'>
                    <h1>Online Web Development Courses</h1>
                    <p>
                        It makes perfect sense that one can learn how to build websites entirely online. From HTML tutorials to in-depth courses
                        in responsive web design that combine HTML, CSS and JavaScript, individuals can learn the latest client and server-side
                        coding practices. Discover the latest web design software and online web design courses
                        including self-paced web programming courses taught by experts from Intel and the World Wide Web Consortium (W3C),
                        the organization that develops and maintains web standards and guidelines. Pursue free online HTML courses or enroll in
                        an advanced professional certificate program in web development, a multi-course specialization designed to jumpstart your
                        career in this exciting and lucrative field.
                        <br />
                        Front-end web development is only the beginning of your online programming journey. To create robust websites, you may want
                        to explore courses in database programming and popular programming languages like Java, Python, PHP and SQL. Enroll in any
                        of these introductory courses and start coding websites in just a few short weeks.
                    </p>
                </Col>
            </Row>
            <Row>
                <img ref={online_ref} src={online} className='animated_svg' alt='online course' />
            </Row>
            <Row>
                <Col ref={ref4} id='elem4'>
                    <h1>Jobs in Web Development</h1>
                    <p>
                        Over 5,000 active job postings for web developers existed on Indeed.com at the time of this article, with an estimated average
                        annual salary of over $91K in the United States. The average annual salary for front end web developers is even higher, at $102K.
                        Practically every organization in existence is finding and interacting with people via the web, making the position of web
                        developer one of the most sought after.
                        <b />
                        From developing mobile interfaces to pushing the limits of modern web applications, companies are investing in and expanding
                        their online presence. Find excellent starting positions in almost any location around the world for Junior Web Developers,
                        Web Analysts, JavaScript Programmers, HTML5 coders and much more.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col ref={ref5} id='elem5'>
                    <h3>Beginner at web development?</h3>
                    <p>
                        If you are completely new to web development and have no idea what it is, read this article called
                    <a href='https://studywebdevelopment.com/web-development-basics-for-beginners.html' target="_blank" rel="noopener noreferrer"> Web Development 101: Understanding The Basics</a>   </p>
                </Col>
            </Row>
        </Container>
    )
}
export default Home;