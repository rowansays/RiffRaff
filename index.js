import Fuse from 'fuse.js'
import Prism from 'prismjs';
import './src/index.scss'

Prism.highlightAll();

if (module.hot) {
  module.hot.accept('./src/index.scss', function() {
    console.log('Accepting the updated styles.');
  })
}
