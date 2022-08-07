import React from 'react'
import "./About.css"

const About = () => {

    return (
        <div className='container'>
            <div className='details'>

                <div className='objective'>
                    <h4>CAREER OBJECTIVE</h4>
                     <p>
                        
                     </p>
                </div>
                <h4>ACADEMIC QUALIFICATIONS</h4>
                <table >
                    <tr>
                        <th>Course</th>
                        <th>Branch/Subjects</th>
                        <th>University/Board</th>
                        <th>Name of Institution</th>
                        <th>Year of passing</th>
                        <th>Score</th>
                    </tr>
                    <tr>
                        <td>B.Tech</td>
                        <td>Computer Science and Engineering</td>
                        <td>Kerala Technological University</td>
                        <td>Adi Shankara Institute Of Engineering and Technology,Ernakulam,Kerala</td>
                        <td>2023</td>
                        <td>8.68/10</td>

                    </tr>
                    <tr>
                        <td>Higher Secondary(plus two)</td>
                        <td>Computer Science</td>
                        <td>Kerala Higher Secondary Examination Board</td>
                        <td>Government Higher Secondary School ,North Paravur,Ernakulam,Kerala</td>
                        <td>2019</td>
                        <td>97.33%</td>
                    </tr>
                    <tr>
                        <td>Secondary Scool Education(10th)</td>
                        <td>Phy,che,maths and other subjects</td>
                        <td>Kerala Higher Secondary Examination Board</td>
                        <td>Sree Narayana Mangalam Higher Secondary School,Moothakunnam,Ernakulam,Kerala</td>
                        <td>2017</td>
                        <td>95%</td>
                    </tr>

                </table>

            <div className='hobbies'>
                <h4>INTERNSHIPS</h4>
                <ul>
                    <li></li>
                    <li></li>
                </ul>
            </div>

            <div className='extra'>
                <h4>HOBBIES AND INTERESTS</h4>
                <ul>
                    <li></li>
                    <li></li>
                </ul>
            </div>


            <div className='personal'>
                <h4>PERSONAL DETAILS</h4>
                <ul>
                <li>Age & Date of Birth : 20 , 01/09/2001</li>
                <li>Gender              : Female</li>
                <li>Blood Group         : B positive</li>
                <li>Nationality         : Indian</li>
                <li>Fther's Name        : Sajeev P S</li>
                <li>Language Skills     : English,Malayalam</li>
                <li>Marital Status      : Not Married</li>
                </ul>
            </div>
            </div>
            
        </div>
    )
}

export default About