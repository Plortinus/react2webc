import React, { useState } from "react";
import PropTypes from 'prop-types';
import ReactDOM from "react-dom";
import reactToWebComponent from "react-to-webcomponent";
import { Button } from 'antd'
import 'antd/dist/antd.css'

// export default function CosmoButton({type, text}) {
//   console.log('text: ', text);
//   console.log('type: ', type);
//   const [count, setCount] = useState(0);

//   return (
//     <Button type={type}>
//       {text}
//     </Button>
//   );
// }
class CosmoButton extends React.Component {
  render() {
    const { type, text } = this.props
    console.log('text: ', text);
    console.log('type: ', type);
    return (
      <Button type={type}>{text}</Button>
    );
  }
}

CosmoButton.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
};

export default CosmoButton

customElements.define(
  "c-button",
  reactToWebComponent(CosmoButton, React, ReactDOM)
);
