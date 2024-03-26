"use client"
import React from 'react';
import { SignIn } from '@clerk/nextjs';
import Head from 'next/head';

export default function AuthLayout() {
    return (
        <>
            <Head>
                <title>Sign In</title>
            </Head>
            <style jsx global>{`
                html, body {
                    margin: 0;
                    padding: 0;
                    height: 100%;
                    width: 100%;
                    background-image: url('/images/background.png');
                    background-size: cover;
                    background-position: center;
                }
                .auth-container {
                    position: fixed; /* Use fixed to directly control the positioning */
                    top: 0;
                    right: 0;
                    height: 100%; /* Full height of the viewport */
                    width: 50%; /* Take up half of the screen width */
                    display: flex;
                    align-items: center; /* Center vertically */
                    justify-content: center; /* Center horizontally */
                }
            `}</style>
            <div className="auth-container">
                <SignIn />
            </div>
        </>
    );
}

