import Layout from "./Layout.jsx";

import Home from "./Home";
import Quiz from "./Quiz";
import Offer from "./Offer";
import Playbook from "./Playbook";
import ThankYou from "./ThankYou";
import MedSpaOffer from "./MedSpaOffer";
import System from "./System";
import Education from "./Education";
import Offer2026 from "./Offer2026";
import PipelineX from "./PipelineX";
import PrivacyPolicy from "./PrivacyPolicy";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    Home: Home,
    Quiz: Quiz,
    Offer: Offer,
    Playbook: Playbook,
    ThankYou: ThankYou,
    MedSpaOffer: MedSpaOffer,
    System: System,
    Education: Education,
    Offer2026: Offer2026,
    PipelineX: PipelineX,
    PrivacyPolicy: PrivacyPolicy,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                
                    <Route path="/" element={<Home />} />
                
                
                <Route path="/Home" element={<Home />} />
                <Route path="/Quiz" element={<Quiz />} />
                <Route path="/Offer" element={<Offer />} />
                <Route path="/Playbook" element={<Playbook />} />
                <Route path="/ThankYou" element={<ThankYou />} />
                <Route path="/thank-you" element={<ThankYou />} />
                <Route path="/MedSpaOffer" element={<MedSpaOffer />} />
                <Route path="/medspa" element={<MedSpaOffer />} />
                <Route path="/System" element={<System />} />
                <Route path="/system" element={<System />} />
                <Route path="/Education" element={<Education />} />
                <Route path="/education" element={<Education />} />
                <Route path="/blog" element={<Education />} />
                <Route path="/2026offer" element={<Offer2026 />} />
                <Route path="/2026OFFER" element={<Offer2026 />} />
                <Route path="/launch" element={<Offer2026 />} />
                <Route path="/pipelinex" element={<PipelineX />} />
                <Route path="/PipelineX" element={<PipelineX />} />
                <Route path="/pipeline" element={<PipelineX />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}