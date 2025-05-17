import React from "react";
import Home from "./component/Home";
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';



const LoadingScreen = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [showSplit, setShowSplit] = useState(false);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {




        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setIsComplete(true);
                    return 100;
                }
                return prev + 1;
            });
        }, 50); // سرعة التحميل
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (isComplete) {
            const timer = setTimeout(() => {
                setShowSplit(true);
                setTimeout(onComplete, 800); // وقت الانتقال بعد الانقسام
            }, 1500); // كم ينتظر بعد الانقسام
            
            return () => clearTimeout(timer);
        }
    }, [isComplete, onComplete]);

    return (
        <AnimatePresence>
            <motion.div
                className="loading-screen"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                {/* Modern Progress Bar */}
                {!showSplit && (
                    <motion.div 
                        className="loading-container"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="loading-container_inner">

                        <div className="progress-title">
                            <motion.span
                                className={isComplete && "ready_text"}
                                animate={{ opacity: [0.3, 1, 0.3] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                            >
                                {isComplete ? "Ready!" : "Loading..."}
                            </motion.span>
                        </div>
                        
                        <div className="progress-wrapper">
                            <motion.div 
                                className="progress-track"
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                
                            />
                            <motion.div 
                                className="progress-bar"
                                style={{ width: `${progress}%` }}
                                transition={{ 
                                    duration: 0.3,
                                    ease: "easeOut"
                                }}
                            />

                        </div>
                        
                        <motion.div 
                            className="progress-percent"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            {progress}%
                            {isComplete && (
                                <motion.span
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ 
                                        delay: 0.5,
                                        type: "spring"
                                    }}
                                    className="complete-check"
                                >
                                    ✓
                                </motion.span>
                            )}
                        </motion.div>

                        </div>

                    </motion.div>
                )}

                {/* Split Animation */}
                {showSplit && (
                    <>
                        <motion.div 
                            className="top-half"
                            initial={{ y: 0 }}
                            animate={{ y: '-100%' }}
                            transition={{ duration: 0.8, ease: 'easeInOut' }}
                        />
                        <motion.div 
                            className="bottom-half"
                            initial={{ y: 0 }}
                            animate={{ y: '100%' }}
                            transition={{ duration: 0.8, ease: 'easeInOut' }}
                        />
                    </>
                )}
            </motion.div>
        </AnimatePresence>
    );
};

const App = () => {
    const [loading, setLoading] = useState(true);

    return (
        <>
            {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
            {!loading && <Home />}
        </>
    );
};

export default App;