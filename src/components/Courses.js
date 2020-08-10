import React, { useLayoutEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import useWebAnimations, { slideInDown, fadeIn, slideInUp } from '@wellyshen/use-web-animations';
import courses from '../images/courses.svg'
import bulb from '../images/bulb.gif'

const Courses = () => {

    const { ref } = useWebAnimations({
        keyframes: [
            { transform: 'skewY(-5deg)' },
            { transform: 'skewY(5deg)' },
        ],
        timing: {
            duration: 2000,
            iterations: Infinity,
            direction: 'alternate',
            easing: 'ease-in-out',
        }
    }),
        [show, setShow] = useState({
            moreAbout: false,
            ol: false,
            courses_head: false,
            course_p: false
        }),
        { keyframes: keyframes_ref2, timing: timing_ref2 } = slideInDown,
        { ref: ref2 } = useWebAnimations(show.courses_head && {
            keyframes: keyframes_ref2,
            timing: {
                ...timing_ref2,
                duration: 2000,
            }
        }),
        { keyframes: keyframes_ref3, timing: timing_ref3 } = fadeIn,
        { ref: ref3 } = useWebAnimations(show.course_p && {
            keyframes: keyframes_ref3,
            timing: {
                ...timing_ref3,
                duration: 2000,
            }
        }),
        { keyframes: keyframes_ref4, timing: timing_ref4 } = slideInUp,
        { ref: ref4 } = useWebAnimations(show.ol && {
            keyframes: keyframes_ref4,
            timing: {
                ...timing_ref4,
                easing: 'ease-in-out',
                duration: 3000,
            }
        }),
        { ref: moreAboutRef } = useWebAnimations(show.moreAbout && {
            keyframes: keyframes_ref3,
            timing: {
                ...timing_ref3,
                duration: 2000,
                delay: 1000,
            }
        });

    useLayoutEffect(() => {
        const topPos = element => element.getBoundingClientRect().top,
            elemMoreAbout = document.getElementById('more_about'),
            el_course_h = document.getElementById('courses_head'),
            el_course_p = document.getElementById('course_p'),
            elem_ol = document.getElementById('ol'),

            onScroll = () => {
                const elem1Pos = topPos(elemMoreAbout),
                    elem2Pos = topPos(elem_ol),
                    elem3Pos = topPos(el_course_h),
                    elem4Pos = topPos(el_course_p),
                    scrollPos = window.innerHeight;
                if (elem1Pos < scrollPos) {
                    setShow(state => ({ ...state, moreAbout: true }));
                }
                if (elem2Pos < scrollPos) {
                    setShow(state => ({ ...state, ol: true }));
                }
                if (elem3Pos > 0) {
                    setShow(state => ({ ...state, courses_head: true }));
                }
                if (elem4Pos > 0) {
                    setShow(state => ({ ...state, course_p: true }));
                }
            };
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    return (

        <Container fluid className='body'>
            <Row>
                <Col>
                    <h1 id='courses_head' ref={ref2}>10 Best Online Web Development Courses (Free and Paid)</h1>
                    <p id='course_p' ref={ref3}>Web Development has become one of the most lucrative professions. It comes with many perks like higher salaries, flexible working
                    hours, and a multitude of freelancing opportunities. Another great thing about web development is that unlike courses on topics
                    like Artificial intelligence, you can get started on web development without needing any prior coding experience. Thanks to a
                    plethora of online web development courses, you can easily get started today. Still, if you are just starting, you might find
                    finding the right course a difficult task. To make things easier for you, we have curated a list of the 10 best online web development
                    courses that you can take. We have mentioned both free and paid courses so you can start despite a budget constraint. So, without any
                    further delay, let’s get into our list, shall we?</p>
                </Col>
            </Row>
            <Row>
                <img ref={ref} src={courses} className='animated_svg' alt='developer' />
            </Row>
            <Row>
                <Col ref={ref4} id='ol'>
                    <h3>Best Free and Paid Web Development Courses in 2020</h3>
                    <ol className='ml-2'>
                        <li>
                            The Web Developer Bootcamp
                            <p className='course_fee' > Buy Course on Udemy: Starting at $9.99</p>
                        </li>
                        <li>
                            The Complete Web Developer Course 2.0
                            <p className='course_fee' >Buy Course on Udemy: Starting at $9.99</p>
                        </li>
                        <li>
                            The Complete Web Developer in 2020: Zero to Mastery
                            <p className='course_fee' >Buy Course on Udemy: Starting at $9.99</p>
                        </li>
                        <li>
                            The Complete 2020 Web Development Bootcamp
                            <p className='course_fee' >Buy Course on Udemy: Starting at $9.99</p>
                        </li>
                        <li>
                            Computer programming on Khan Academy
                            <p className='course_fee' >Enroll on Khan Academy: Free</p>
                        </li>
                        <li>
                            Learn Web Development by Mozilla
                            <p className='course_fee' >Enroll on Mozilla: Free</p>
                        </li>
                        <li>
                            Front-End Web Developer by W3C
                            <p className='course_fee' >Enroll on Edx: (Free, $499.50 for certificate )</p>
                        </li>
                        <li>
                            Boost Personal Branding by Coding Your Own Website
                            <p className='course_fee' >Get it on Skillshare: $15/month or $99/year, Free for the first 2 months</p>
                        </li>
                        <li>
                            Become a Web Developer on Code Academy
                            <p className='course_fee' >Enroll on Code Academy: Free, Join Pro at $19.99/month to get
                            personalized learning plan, doubt clearing sessions, and more</p>
                        </li>
                        <li>
                            Learn Web Development on freecodecamp
                            <p className='course_fee' >Enroll on freecodecamp: Free</p>
                        </li>
                    </ol>
                    <p className='ml-3'>So, those are the 10 best Web Development online courses that you can take to jump-start your career.
                    I have included both free and paid web development courses so you can start without having any budgeting issues.
                    Also, no prior coding experience is required before starting any of these courses so you don’t have any
                    excuse not to start learning today. So, check these courses and let us know which one you chose to take
                     the first step of becoming a web developer.</p>
                </Col>
            </Row>
            <Row>
                <Col id='more_about' ref={moreAboutRef}>
                    <h3>More about Web Development</h3>
                    <p>The world of web development is as wide as the internet itself. Much of our social and vocational lives play out
                        on the internet, which prompts new industries aimed at creating, managing, and debugging the websites and applications that we increasingly rely on.</p>
                    <img src={bulb} className='' alt='bulb' width='60' />
                    <a href='https://www.udemy.com/topic/web-development/free/' target='_blank' rel="noopener noreferrer">VIEW FREE WEB DEVELOPMENT COURSES</a>
                </Col>
            </Row>
        </Container>
    )
}
export default Courses;