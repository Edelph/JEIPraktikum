import React, { useState } from "react";
import "./project_details.css";
import { Link } from "react-router-dom";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { AiOutlineArrowLeft as Arrow } from "react-icons/ai";

const Details = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (newValue) => {
    setEditorState(newValue);
  };

  return (
    <section className="section">
      <Link to="/project_submission" className="arrow">
        <Arrow color="#FBFBFB" size={25} />
      </Link>
      <div className="container editor">
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="textEditor"
          onEditorStateChange={onEditorStateChange}
        />
      </div>
      <div className="container w-80 button-container">
        <div>
          <input class="form-control" type="file" id="formFile" />
        </div>
        <Link to="/offre" className="btn detail-button">
          Soumettre
        </Link>
      </div>
    </section>
  );
};

export default Details;
