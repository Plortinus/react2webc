import React from 'react'

import 'react2wbc'
import 'react2wbc/dist/index.css'

const App = () => {
  return (<>
    <c-button text="默认"></c-button>
    <c-button type="primary" text="主要"></c-button>
    <c-button type="text" text="文本"></c-button>
    <c-button type="link" text="链接"></c-button>
  </>)
}

export default App
