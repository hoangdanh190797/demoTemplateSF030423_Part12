import React from 'react'
import { Outlet } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function TemplateHome() {
    return (
        <div id=''>
            {/* Header */}
            <Header />
            {/* Content */}
            <Outlet />
            {/* Footer */}
            <Footer />
        </div>
    )
}
