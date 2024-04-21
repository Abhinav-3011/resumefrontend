import React from 'react';
import './download.css';
import Barcode from 'react-barcode';

import Nav from '../nav/Nav';
const Download = () => {
    return (
        <>
            <Nav/>
            <div className="admit-card">
                <div className="admit-card-header">
                    <h1>डॉ। एपीजे अब्दुल कलाम तकनीकी विश्वविद्यालय, उत्तर प्रदेश, लखनऊ</h1>
                    <h1>Dr. APJ Abdul Kalam Technical University, Uttar Pradesh, Lucknow</h1>
                </div>
               
                <div className="photo-barcode">
                    <div className="photo">
                   
                        <img src="https://imgs.search.brave.com/v9NzrvTHUOmYTcU4BTu7doehtiKHIEoa6Qxho-kLM_w/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzEyLzgwLzMz/LzM2MF9GXzIxMjgw/MzMwNF9uR0NJSG1i/Z1llUnRIY2l4NllJ/Z3BjUUpPc29qN3dN/bC5qcGc" alt="Photo" style={{ maxWidth: '200px', maxHeight: '200px', borderRadius: '5px' }} />
                    </div>

                    
                    <div className="barcode">
                    <div style={{ height: "auto", margin: "0 auto", maxWidth: 64, width: "100%" }}>
                    <Barcode value="Student Details" />
                </div>
                    </div>
                </div>
                <table>
                    <tr>
                        <th>Roll No / रोल नंबर:</th>
                        <td>123456</td>
                    </tr>
                    <tr>
                        <th>Name / नाम:</th>
                        <td>John Doe</td>
                    </tr>
                    <tr>
                        <th>Gender / लिंग:</th>
                        <td>Male</td>
                    </tr>
                    <tr>
                        <th>Branch / शाखा:</th>
                        <td>Computer Science</td>
                    </tr>
                    <tr>
                        <th>Institute / संस्थान:</th>
                        <td>Sample Institute</td>
                    </tr>
                    
                    <tr>
                        <th>Examination Center / परीक्षा केंद्र:</th>
                        <td>Center A</td>
                    </tr>
                    <tr>
                        <th>Father's Name / पिता का नाम:</th>
                        <td>John Doe Sr.</td>
                    </tr>
                    <tr>
                        <th>Course / पाठ्यक्रम:</th>
                        <td>Bachelor of Technology</td>
                    </tr>
                    <tr>
                        <th>Semester / सेमेस्टर:</th>
                        <td>5th</td>
                    </tr>
                    <tr>
                    <th>Mobile / मोबाइल नंबर:</th>
                    <td>123456</td>
                </tr>
                </table>
                <h2>Subject Details / विषय विवरण:</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Subject Code / विषय कोड</th>
                            <th>Subject Name / विषय का नाम</th>
                            <th>Exam Date / परीक्षा तिथि</th>
                            <th>Timing / समय</th>
                            <th>AnsBook No / उत्तर पुस्तिका संख्या</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>CSE101</td>
                            <td>Introduction to Computer Science</td>
                            <td>May 15, 2024</td>
                            <td>9:00 AM - 12:00 PM</td>
                            <td>AB123</td>
                        </tr>
                        <tr>
                            <td>CSE102</td>
                            <td>Data Structures</td>
                            <td>May 17, 2024</td>
                            <td>9:00 AM - 12:00 PM</td>
                            <td>AB124</td>
                        </tr>
                        <tr>
                            <td>CSE103</td>
                            <td>Algorithms</td>
                            <td>May 20, 2024</td>
                            <td>9:00 AM - 12:00 PM</td>
                            <td>AB125</td>
                        </tr>
                        <tr>
                            <td>CSE104</td>
                            <td>Database Management Systems</td>
                            <td>May 22, 2024</td>
                            <td>9:00 AM - 12:00 PM</td>
                            <td>AB126</td>
                        </tr>
                        <tr>
                            <td>CSE105</td>
                            <td>Operating Systems</td>
                            <td>May 24, 2024</td>
                            <td>9:00 AM - 12:00 PM</td>
                            <td>AB127</td>
                        </tr>
                    </tbody>
                </table>
                <div className="terms">
                    <h3>Terms and Conditions / नियम और शर्तें:</h3>
                    <p>1. Students must bring this admit card and a valid ID proof to the examination center.</p>
                    <p>2. Electronic devices such as mobile phones, smartwatches, etc., are not allowed in the examination hall.</p>
                    <p>3. Students must reach the examination center at least 30 minutes before the exam.</p>
                    <hr/>
                    <h3>शर्तें और नियम:</h3>
                    <p>1. छात्रों को परीक्षा केंद्र में इस एडमिट कार्ड और एक वैध आईडी प्रूफ लाना चाहिए।</p>
                    <p>2. मोबाइल फोन, स्मार्टवॉच आदि जैसे इलेक्ट्रॉनिक उपकरण परीक्षा हॉल में अनुमति नहीं है।</p>
                    <p>3. छात्रों को परीक्षा केंद्र के पहुंचने से कम से कम 30 मिनट पहले करना चाहिए।</p>
                </div>
                <div className="signature">
                    <p>Controller of Examinations Signature</p>
                </div>
            </div>
        </>
    );
};

export default Download;
