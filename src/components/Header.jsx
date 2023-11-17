import React from 'react';
import { Container } from 'reactstrap';
import './Header.css';

const navLinks = [
    { display: 'Home', url: '#' },

    { display: 'About', url: '#' },
    { display: 'Courses', url: '#' },
    { display: 'Page', url: '#' },
    { display: 'Blog', url: '#' },
];

const Header = () => {
  return (
   <section>
        <Container>
            <div className="navigation">
                <div className="logo">
                    <h2>
                        <i class="ri-pantone-line"> </i>Learners. </h2>
                </div>
                <div className='nav'>
                    <div className="nav__menu">
                        <ul className="nav__list">
                            {
                                navLinks.map(( display, index ) => (
                                    <li key={index}className="nav__item">
                                
                            </li>
                            }
                            
                        </ul>
                    </div>

                </div>
            </div>
        </Container>
   </section>
  );
};

export default Header;
