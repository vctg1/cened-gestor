import React from 'react';
import SunEditor from 'suneditor-react';
import { useMediaQuery } from '@mui/material';
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File

const Editor = props => {
  let isDesktop = useMediaQuery('(min-width:800px)')
  const listButtons = [['undo', 'redo'], ['font', 'fontSize', 'formatBlock'],
  ['paragraphStyle', 'blockquote'],
  ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
  ['fontColor', 'hiliteColor', 'textStyle'],
  ['removeFormat'],
  '/',
  ['outdent', 'indent'],
  ['align', 'horizontalRule', 'list', 'lineHeight'],
  ['table', 'link', 'image', 'video', 'audio'],
  ['fullScreen', 'showBlocks', 'codeView'],
  ['preview', 'print'],
  ['save', 'template']]
  return (
    <div>
      <SunEditor onChange={(e)=> props.setContentCourse(e)} height='400px' width={isDesktop ? '850px' : '400px'} setOptions={{height: 200, buttonList: listButtons}} lang={'pt_br'}/>
    </div>
  );
};
export default Editor;