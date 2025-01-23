import React, { useState } from 'react';
import Markdown from 'react-markdown';



export const Markdownsample = () => {

    const [markdown,setMarkdown] = useState("");
    return (
        <div>
          <textarea value = {markdown} onChange = {(e) => setMarkdown(e.target.value)} />
          <Markdown>{markdown}</Markdown>
        </div>
    )
};
