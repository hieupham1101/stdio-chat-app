import { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState } from 'draft-js';

function Content() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty(),
  );

  return (
    <div>
      <div>Avatar ...</div>
      <div>
        <Editor
          editorState={editorState}
          onEditorStateChange={setEditorState}
        />
      </div>
    </div>
  );
}

export default Content;
