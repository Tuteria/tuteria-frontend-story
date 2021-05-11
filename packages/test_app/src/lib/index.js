import RemarkApp from '@gbozee/shared-lib/src/admin-ui/RemarkModal';

export function remarkImplementation() {
  Array.from(document.querySelectorAll('td.field-remarks')).forEach(node => {
    let text = node.textContent;
    let id = $(node).siblings().find('input[name=_selected_action]').val();
    ReactDOM.render(<RemarkApp content={text} request_id={id} />, node);
  });
}
