import 'core-js/stable'
import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter'
import '@webcomponents/webcomponentsjs/webcomponents-loader'

WebComponents.waitFor(() => {
  return import('./components/index')
})
