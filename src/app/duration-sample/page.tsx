'use client'

import React, { useState } from 'react';
import styles from './Page.module.css';

const App = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
        setTimeout(() => {
            setIsVisible(false);
        }, 1000); // 1秒後に非表示にする
    };

    return (
        <div>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={toggleVisibility}
            >
                Toggle
            </button>

            {isVisible && (
                <div className={styles.textAnimation}>
                    <p className="text-green-500 text-lg mt-4">Hello World</p>
                    <p className="text-gray-600">Some text to display</p>
                </div>
            )}
        </div>
    );
};

export default App;