import Hello from "./Hello.js";
function App(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hello, null));
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/React.createElement(App, null));