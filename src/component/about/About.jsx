import React from 'react';
import './about.css';

const About = () => {
    return (
        <div className="about-us-container">
            <div className="section">
                <h2>Our Story</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget metus nec urna fermentum eleifend. Suspendisse potenti. Duis tempus erat vel felis rutrum, a aliquam libero condimentum. Fusce eu odio ut elit ultricies ultrices. Proin imperdiet enim et vehicula mollis.</p>
            </div>
            <div className="section">
                <h2>Our Mission</h2>
                <p>Nulla facilisi. Sed imperdiet felis sed ultricies tempor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur dapibus consequat elit nec interdum.</p>
            </div>
            <div className="section">
                <h2>Our Team</h2>
                <div className="team-members">
                    <div className="team-member">
                        <img src="path_to_team_member_image.jpg" alt="Team Member 1" />
                        <h3>John Doe</h3>
                        <p>CEO</p>
                    </div>
                    <div className="team-member">
                        <img src="path_to_team_member_image.jpg" alt="Team Member 2" />
                        <h3>Jane Smith</h3>
                        <p>CTO</p>
                    </div>
                </div>
            </div>
            <div className="section">
                <h2>Our Values</h2>
                <ul>
                    <li>Customer Satisfaction</li>
                    <li>Innovation</li>
                    <li>Integrity</li>
                    <li>Teamwork</li>
                    <li>Continuous Improvement</li>
                </ul>
            </div>
        </div>
    );
};

export default About;
