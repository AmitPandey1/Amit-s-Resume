import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { MotionConfig } from 'framer-motion';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ResumeSection from '../components/ResumeSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import FullDetailsSheet from '../components/FullDetailsSheet';

export default function HomePage() {
    const [detailsOpen, setDetailsOpen] = useState(false);

    return (
        <MotionConfig reducedMotion="user">
            <Helmet>
                <title>Amit Pandey — Senior Android Developer</title>
                <meta
                    name="description"
                    content="The professional portfolio of Amit Pandey, a Senior Android Developer and Mobile SDK Engineer based in Noida, India with nearly 8 years of experience building Android SDKs, push notifications, in-app messaging, and cross-platform integrations."
                />
            </Helmet>
            <div className="min-h-screen bg-zinc-950 font-sans text-paper antialiased">
                <Header />
                <main>
                    <Hero onShowFullDetails={() => setDetailsOpen(true)} />
                    <ResumeSection />
                    <ProjectsSection />
                    <ContactSection />
                </main>
                <Footer />
                <FullDetailsSheet open={detailsOpen} onClose={() => setDetailsOpen(false)} />
            </div>
        </MotionConfig>
    );
}
