import React, { useState } from 'react';

const OxfordCommaTool = () => {
    const [text, setText] = useState("");

    const handleSubmit = () => {
        // Handle the text submission logic here
    };

    return (
        <div>
            <h1>Oxford Comma Scrubber</h1>
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text here"
                rows={10}
                cols={50}
            />
            <button onClick={handleSubmit}>Scrub Text</button>
        </div>
    );
};

export default OxfordCommaTool;
