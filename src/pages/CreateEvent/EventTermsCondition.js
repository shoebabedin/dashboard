import { Editor } from '@tinymce/tinymce-react';
import { useRef } from 'react';

const EventTermsCondition = () => {
  const editorRef = useRef(null);
  return (
    <>
      <div className="form_box_area_main event_information_form oflow-hd">
        <div className="form_title oflow-hd">
          <h2>Contents</h2>
        </div>
        <div className="form_wrapper oflow-hd">
          <div className="row">
            <div className="col-12">
              <div className="single_input_box">
                <div className="single_input_box_editor">
                  {/* <textarea></textarea> */}
                  <Editor
                    onInit={(evt, editor) => (editorRef.current = editor)}
                    init={{
                      selector: 'textarea',
                      placeholder: 'Write here....',
                      height: 300,
                      menubar: false,
                      plugins: [
                        'advlist',
                        'autolink',
                        'lists',
                        'link',
                        'image',
                        'charmap',
                        'preview',
                        'anchor',
                        'searchreplace',
                        'visualblocks',
                        'code',
                        'fullscreen',
                        'insertdatetime',
                        'media',
                        'table',
                        'code',
                        'help',
                        'wordcount'
                      ],

                      toolbar: 'bold italic underline | alignleft aligncenter | ',
                      table_toolbar:
                        'tableprops tabledelete | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol',
                      toolbar_mode: 'wrap' | 'scrolling',
                      toolbar_sticky: true,
                      toolbar_sticky_offset: 100
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventTermsCondition;
