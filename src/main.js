import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { 
  Tabbar, TabbarItem, NavBar, Grid, GridItem, 
  Card, Tag, Image as VanImage, Button, 
  DropdownMenu, DropdownItem, Swipe, SwipeItem,
  Icon, Cell, CellGroup, Badge, Tab, Tabs
} from 'vant'

import 'vant/lib/index.css'

const app = createApp(App)

app.use(Button)
   .use(NavBar)
   .use(Tabbar)
   .use(TabbarItem)
   .use(Swipe)
   .use(SwipeItem)
   .use(Grid)
   .use(GridItem)
   .use(Card)
   .use(VanImage)
   .use(Icon)
   .use(DropdownMenu)
   .use(DropdownItem)
   .use(Tag)
   .use(Cell)
   .use(CellGroup)
   .use(Badge)
   .use(Tab)
   .use(Tabs)

app.use(router)

app.mount('#app')
