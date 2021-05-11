"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remarkImplementation = remarkImplementation;
exports["default"] = void 0;

var _reactModal = _interopRequireDefault(require("react-modal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var customStyles = {
  content: {
    top: "50%",
    left: "45%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    width: "40%",
    transform: "translate(-50%, -50%)"
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    zIndex: 2000
  }
};
var styles = {
  parent: {
    marginBottom: 20
  },
  FormGroup: {
    marginBottom: 10
  },
  label: {
    marginRight: 10,
    marginBottom: 10,
    width: "15%",
    display: "inline-block"
  },
  input: {
    width: "70%"
  }
};
var Modal = _reactModal["default"];

var FormGroup = function FormGroup(_ref) {
  var label = _ref.label,
      children = _ref.children;
  return /*#__PURE__*/React.createElement("div", {
    style: styles.FormGroup,
    className: "form-row field-first_name"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: styles.label
  }, label), children));
};

var EditContainer = function EditContainer(_ref2) {
  var render = _ref2.render,
      children = _ref2.children;

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      modalIsOpen = _React$useState2[0],
      setModalState = _React$useState2[1];

  function openModal() {
    setModalState(true);
  }

  function afterOpenModal() {}

  function closeModal(e) {
    e.preventDefault();
    setModalState(false);
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, render(openModal), /*#__PURE__*/React.createElement(Modal, {
    isOpen: modalIsOpen,
    onAfterOpen: afterOpenModal,
    onRequestClose: closeModal,
    style: customStyles,
    ariaHideApp: false,
    contentLabel: "Example Modal"
  }, children(closeModal)));
};

var ButtonLink = function ButtonLink(_ref3) {
  var _ref3$node = _ref3.node,
      node = _ref3$node === void 0 ? "a" : _ref3$node,
      children = _ref3.children,
      rest = _objectWithoutProperties(_ref3, ["node", "children"]);

  var className = "button nowrap";
  var style = {
    cursor: "pointer",
    padding: "7px",
    marginRight: "10px"
  };
  return React.createElement(node, _objectSpread(_objectSpread({}, rest), {}, {
    className: className,
    style: style
  }), children);
};

var RemarkApp = function RemarkApp(_ref4) {
  var defaultContent = _ref4.content,
      request_id = _ref4.request_id;

  var _React$useState3 = React.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      edit = _React$useState4[0],
      setEdit = _React$useState4[1];

  var _React$useState5 = React.useState(defaultContent),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      content = _React$useState6[0],
      setContent = _React$useState6[1];

  var _React$useState7 = React.useState({
    remark: defaultContent,
    action: ""
  }),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      fields = _React$useState8[0],
      setFields = _React$useState8[1];

  var timeOutId = React.useRef();

  var showEditButton = function showEditButton() {
    setEdit(true);
  };

  var updateFields = function updateFields(key, value) {
    setFields(_objectSpread(_objectSpread({}, fields), {}, _defineProperty({}, key, value)));
  };

  var hideEditButton = function hideEditButton() {
    timeOutId.current = setTimeout(function () {
      setEdit(false);
    }, 1000);
  };

  var updateRemark = function updateRemark(e, closeModal) {
    e.preventDefault();
    var request = new Request("".concat(window.REMARK_URL).concat(request_id, "/"), {
      method: "post",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(fields)
    });
    fetch(request).then(function (response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }

      return response.json();
    }).then(function (response) {
      console.log(response);
      setContent(response.content);
      closeModal(e);
    });
  };

  var disableSubmit = function disableSubmit() {
    var result = Object.keys(fields).map(function (x) {
      return fields[x];
    }).filter(function (x) {
      return x.trim().length > 0;
    }).length !== 2;
    return result;
  };

  var getDate = function getDate() {
    var dd = new Date();
    return "".concat(dd.getFullYear(), "-").concat(dd.getMonth() + 1, "-").concat(dd.getDate());
  };

  return /*#__PURE__*/React.createElement(EditContainer, {
    render: function render(openModal) {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
        onMouseOver: showEditButton,
        onMouseOut: hideEditButton
      }, content), edit ? /*#__PURE__*/React.createElement(ButtonLink, {
        onClick: openModal
      }, "Update Remark") : null);
    }
  }, function (closeModal) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("fieldset", {
      className: "module aligned "
    }, /*#__PURE__*/React.createElement("h2", {
      style: styles.parent
    }, "Update Remark"), /*#__PURE__*/React.createElement(FormGroup, {
      label: "Action"
    }, /*#__PURE__*/React.createElement("select", {
      style: styles.input,
      onChange: function onChange(e) {
        return updateFields("action", e.target.value);
      },
      value: fields.action
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "Select Action"), /*#__PURE__*/React.createElement("option", {
      value: "profile_to_client"
    }, "Send profile to client"), /*#__PURE__*/React.createElement("option", {
      value: "activity_log"
    }, "Log calls/sms/email"), /*#__PURE__*/React.createElement("option", {
      value: "call_client_later"
    }, "Contact client later"), /*#__PURE__*/React.createElement("option", {
      value: "generic"
    }, "Generic action"))), /*#__PURE__*/React.createElement(FormGroup, {
      label: "Remark:"
    }, fields.action === "call_client_later" ? /*#__PURE__*/React.createElement("input", {
      type: "date",
      style: styles.input,
      value: fields.remark,
      className: "vTextField",
      min: getDate(),
      onChange: function onChange(e) {
        return updateFields("remark", e.target.value);
      }
    }) : /*#__PURE__*/React.createElement("textarea", {
      rows: 4,
      style: styles.input,
      value: fields.remark,
      className: "vTextField",
      onChange: function onChange(e) {
        return updateFields("remark", e.target.value);
      }
    }))), /*#__PURE__*/React.createElement("div", {
      "class": "submit-row"
    }, disableSubmit() ? null : /*#__PURE__*/React.createElement("input", {
      onClick: function onClick(e) {
        updateRemark(e, closeModal);
      },
      value: "Update Remark",
      "class": "default",
      type: "submit"
    }), /*#__PURE__*/React.createElement("p", {
      "class": "deletelink-box"
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: closeModal,
      "class": "deletelink"
    }, "Close Modal"))));
  });
};

function remarkImplementation() {
  Array.from(document.querySelectorAll("td.field-remarks")).forEach(function (node) {
    var text = node.textContent;
    var id = $(node).siblings().find("input[name=_selected_action]").val();
    ReactDOM.render( /*#__PURE__*/React.createElement(RemarkApp, {
      content: text,
      request_id: id
    }), node);
  });
}

window.remarkImplementation = remarkImplementation;
var _default = RemarkApp;
exports["default"] = _default;
