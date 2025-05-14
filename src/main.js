import { createApp } from 'vue'
import { 
  Tabbar, TabbarItem, NavBar, Grid, GridItem, 
  Card, Tag, Image as VanImage, Button, 
  DropdownMenu, DropdownItem, Swipe, SwipeItem
} from 'vant'
import 'vant/lib/index.css'
import App from './App.vue'

const app = createApp(App)

// 註冊 Vant 組件
;[
  Tabbar, TabbarItem, NavBar, Grid, GridItem,
  Card, Tag, VanImage, Button,
  DropdownMenu, DropdownItem, Swipe, SwipeItem
].forEach(component => app.use(component))

app.mount('#app')
