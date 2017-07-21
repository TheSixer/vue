import Env from './env'

const ajaxUrl = Env === 'development'
  ? 'http://localhost/api'
  : Env === 'production'
  ? 'http://www.llzmh.com'
  : 'https://debug.url.com'

const qiniu = {
  'URL': 'http://upload.qiniu.com/',
  'ACCESS_KEY': 'zL8RDyzvwQ_vw1jcQdR3h9q-1cd1DgVCbuIizDm8',
  'SECRET_KEY': 'gVJMq0EsR7dSXayDHds9laVCitirh2hGgaPjqeX6',
  'BUCKET': 'workspace',
  'IMG_PATH': 'http://oo6oayjbi.bkt.clouddn.com/',
  'IMAGEMODE': 'imageView2/1/',
  'CALLBACK': 'http://1n51384d44.iask.in/vaccine-admin/admin/qiniu_callback'
}

let config = {
  api: ajaxUrl,
  qiniu: qiniu
}
export default config
