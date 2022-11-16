import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';
import Note from './note';
import Form from "./Form"
export default function App() {
    const [notes, setNotes] = useState([]);
    function addNote(newTitle, newContent) {
        setNotes((prev) => {
            return [...prev, {
                title: newTitle,
                content: newContent
            }];
        })
    }
    function removeNote(id) {
        setNotes(prev => {
            return prev.filter((item, idx) => {
                return idx !== id;
            })
        })
    }
    return <>
        <Header />
        <Form addNote={addNote} />
        {
            notes.map((note, index) => {
                return <Note
                    key={index}
                    id = {index}
                    removeNote = {removeNote}
                    title={note.title}
                    content={note.content}
                />
            })
        }
        <Footer />
    </>
}
