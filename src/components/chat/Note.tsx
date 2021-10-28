import React, { ReactElement } from "react";

interface Props {
  docId: string;
}

function Note({ docId }: Props): ReactElement {
  return (
    <div style={{ height: "70vh", width: "100%" }}>
      <iframe
        src={`https://docs.google.com/document/u/1/d/${docId}/edit`}
        width="100%"
        height="100%"
        title="Embedded google docs"
      ></iframe>
    </div>
  );
}

export default Note;
