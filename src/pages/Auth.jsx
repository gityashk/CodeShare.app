import React, { useEffect, useState } from 'react';
import { emailAuth, getCurrentUser, verifyEmail } from '../appwrite/auth';
import { useContext } from 'react';
import { CodesContext } from '../contexts/CodesContext';
import db from "../appwrite/databases";
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

export default function Auth() {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [userId, setUserId] = useState("");

    const { codeObj, setLink } = useContext(CodesContext);

    const navigate = useNavigate()

    useEffect(() => {
        init();
    }, []);

    async function init() {
        if (!checkLength()) {
            navigate("/");
            alert("The length of each file must be between 100 to 1000 characters.");
            return;
        }
        try {
            const res = await getCurrentUser();
            if (res) {
                await generateLink();
                navigate("/");
            }
        } catch (error) {
            console.log(error);
        }
    }

    function checkLength() {
        let result = codeObj.html.length >= 100 && codeObj.html.length < 1000;
        result = result && codeObj.css.length < 1000;
        result = result && codeObj.js.length < 1000;
        return result;
    }

    async function sendOTP() {
        const emailRegex = /^[a-zA-Z0-9._-]{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            alert("Invalid email address");
            return;
        }
        const userId = await emailAuth(email);
        setUserId(userId);
    }

    async function verifyAndGenerateLink() {
        const otpRegex = /^[0-9]{6}$/;
        if (!otpRegex.test(otp)) {
            alert("Invalid OTP");
            return;
        }
        const res = await verifyEmail(userId, otp);
        if (!res) {
            alert("Invalid OTP");
            setOtp("");
            return;
        }
        generateLink();
    }

    async function generateLink() {
        const payload = {
            html: codeObj.html,
            css: codeObj.css,
            js: codeObj.js,
        };
        const response = await db.share.create(payload);
        const link = `${window.location.origin}/shared/${response.$id}`;
        console.log(link);
        setLink(link);
        navigate("/");
    }

    return (
        <>
            <div>
                <Header />
            </div>
            <div className="auth-container">
                <div className="auth-inner-container">
                    <h2 className="auth-heading">Verify to Generate Shareable Link</h2>
                    <div>
                        <input
                            className="auth-input"
                            autoFocus
                            spellCheck="false"
                            type="email"
                            placeholder="example@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button
                        onClick={sendOTP}
                        disabled={email.length < 8}
                        className="auth-btn"
                    >Send OTP</button>
                    <div>
                        <input
                            className="auth-input"
                            type="number"
                            placeholder="000000"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                        />
                    </div>
                    <button
                        onClick={verifyAndGenerateLink}
                        disabled={otp.length !== 6}
                        className="auth-btn"
                    >Verify and Generate Link</button>
                </div>
            </div>
        </>
    );
}
