import React from 'react';
import RemarkApp from '@gbozee/shared-lib/dist/RemarkModal';
import ReactDOM from 'react-dom';
function remarkImplementation(node) {
  ReactDOM.render(<RemarkApp content={'hello'} request_id={'world'} />, node);
}

window.remarkImplementation = remarkImplementation;
