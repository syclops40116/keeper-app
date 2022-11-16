import React from 'react';

const date = new Date();

const year = date.getFullYear();

export default function Footer(){
    return <footer>
        <p>CopyRight @ {year}</p>
    </footer>;
}