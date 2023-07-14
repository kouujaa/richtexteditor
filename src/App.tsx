import * as React from "react";
import "./App.css";
import {
  HtmlEditor,
  Video,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from "@syncfusion/ej2-react-richtexteditor";

function App() {
  let toolbarSettings: object = {
    items: [
      "Formats",
      "CreateLink",
      "Image",
      "Video",
      "Alignments",
      "|",
      "Bold",
      "Italic",
      "Underline",
      "|",
      "OrderedList",
      "UnorderedList",
      "Outdent",
      "Indent",
    ],
  };
  let insertVideoSettings: object = {
    saveUrl: "https://ej2.syncfusion.com/services/api/uploadbox/Save",
    removeUrl: "https://ej2.syncfusion.com/services/api/uploadbox/Remove",
  };

  let insertImageSettings: object = {
    saveUrl: "https://ej2.syncfusion.com/services/api/uploadbox/Save",
    removeUrl: "https://ej2.syncfusion.com/services/api/uploadbox/Remove",
  };
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "absolute",
        zIndex: 99999999999999999,
        backgroundColor: "lightgray",
      }}
    >
      <div
        style={{
          zIndex: 99999999999999999,
          position: "absolute",
          width: "100%",
          backgroundColor: "blue",
        }}
      >
        nav bar
      </div>
      <div
        style={{
          zIndex: 99999999999999999,
          position: "absolute",
          width: "100vw",
          height: "100vh",
        }}
      >
        {" "}
        <RichTextEditorComponent
          height={450}
          toolbarSettings={toolbarSettings}
          insertVideoSettings={insertVideoSettings}
          insertImageSettings={insertImageSettings}
        >
          <p>
            It all begins with an idea. Maybe you want to launch a business.
            Maybe you want to turn a hobby into something more. Or maybe you
            have a creative project to share with the world. Whatever it is, the
            way you tell your story online can make all the difference.
          </p>
          <p>
            <b></b>
          </p>

          <Inject
            services={[Toolbar, Video, Image, Link, HtmlEditor, QuickToolbar]}
          />
        </RichTextEditorComponent>
      </div>
    </div>
  );
}

export default App;
