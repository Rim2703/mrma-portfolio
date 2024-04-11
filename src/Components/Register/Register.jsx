import React from 'react';
import "./register.css"
import { BiSolidLogInCircle } from "react-icons/bi";
import { MdPhoneAndroid, MdDashboard } from "react-icons/md";
import { RiTimerFlashLine } from "react-icons/ri";



const Register = () => {
    return (
        <div className="register-container">
            <div className="card-container">
                <div className="register">
                    <div>
                        <BiSolidLogInCircle />
                    </div>
                    <h2>Register with Mera Rojgar Mera Adhikar</h2>

                    {/* <p>
                        Employers, contractors, and workers can easily register on our platform by providing their details.
                        Once registration is complete, they are directed to the app.
                    </p> */}
                </div>
            </div>
            <div className="card-container">
                <div className="register">
                    <div>
                        <MdPhoneAndroid />
                    </div>
                    <h2>Login with Mobile Number and OTP</h2>
                    {/* <p>
                        Users can log in securely using their registered mobile number and OTP. This ensures that a seamless and safe login process, protecting user privacy.help users
                        to register with mobile number.
                    </p> */}
                </div>
            </div>
            <div className="card-container">
                <div className="register">
                    <div>
                        <MdDashboard />
                    </div>
                    <h2>Access Your Dashboard</h2>
                    {/* <p>
                        Upon logging in, users are directed to their personalized dashboard.
                        Here, employers can post job requirements, contractors can manage projects, and workers can explore available opportunities.
                    </p> */}
                </div>
            </div>
            <div className="card-container">
                <div className="register">
                    <div>
                        <RiTimerFlashLine />
                    </div>
                    <h2>Explore Features and Requirements</h2>
                    {/* <p>
                        Users can navigate through the app to explore various features and requirements.our platform offers a comprehensive experience tailored to the needs of employers, contractors, and workers.
                    </p> */}
                </div>
            </div>
        </div>
    );
}
export default Register;
