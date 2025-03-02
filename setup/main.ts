import { defineAppSetup } from '@slidev/types'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import VKatex from  '../plugins/v-katex-auto-render-plu'

import '../styles/my-admonition.css'
import '../styles/my.css'

export default defineAppSetup(({ app,router }) => {
  // Vue App
  // app.use(ElementPlus)
  app.use(VKatex)
  // console.log('在main中的current',router.currentRoute.value);  
  // router.beforeEach((to, from) => {
  //   console.log(to);
  //   console.log(from);
  //   console.log(to.path===from.path);     
  // })

  
})