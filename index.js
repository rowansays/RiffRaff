// Styles
import './src/index.scss'

console.log('HELLO THERE');

if (module.hot) {
  module.hot.accept('./src/index.scss', function() {
    console.log('Accepting the updated SCSS module!');
  })
}
