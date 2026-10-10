import React from 'react';
import { ThemeProvider } from 'next-themes';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';

function App() {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem storageKey="amit-theme" disableTransitionOnChange>
            <Router>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
