import Vue from 'vue';
import 'onsenui';

import '../../../build/css/onsenui.css';
import '../../../build/css/onsen-css-components.css';

import './vue-filters'

import VueOnsen from 'vue-onsenui';
import {
  App,
  Tabbar,
  Home,
  PullHook,
  Splitter,
  Fab,
  SpeedDial,
  Dialogs,
  Forms,
  Animations,
  AnimationsChild
} from './components';

Vue.use(VueOnsen, {
	components: {
    Tabbar,
    Home,
    PullHook,
    Splitter,
    Fab,
    SpeedDial,
    Dialogs,
    Forms,
    Animations,
    AnimationsChild
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
});
