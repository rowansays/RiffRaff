import Prism from 'prismjs';
import './Scripts/index.js'
import './Styles/index.scss'

Prism.highlightAll();

if (module.hot) {
  module.hot.accept('./Styles/index.scss', () => {
    console.log('Accepting style changes.');
  })
  module.hot.accept('./Scripts/index.js', () => {
    console.log('Accepting script changes.');
  })
}
