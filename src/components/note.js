import React from "react";
import NoteContent from "./notecontent";
import NoteHeading from "./noteheading";
import DeleteIcon from '@mui/icons-material/Delete';

export default function Note(props) {
    return <div className="note">
        <NoteHeading title={props.title} />
        <NoteContent content={props.content} />
            <button className="note-btn"
                onClick={() => {
                    props.removeNote(props.id);
                }
                }><DeleteIcon /></button>
    </div>
}