// 项目接口文件
const api = {
  base: 'http://localhost:3000/'
}
// 首页接口(歌单网友精选碟)
api.topPlayList = api.base + 'top/playlist'; // ？limit=42&order=hot 
// 推荐新音乐
api.personalized = api.base + 'personalized/newsong';
// 最新mv
api.mvFirst = api.base + 'mv/first'; // limit=10
// 热门电台
api.djHot = api.base + 'dj/hot'; // limit=10
// 电台分类
api.djCateList = api.base + 'dj/catelist';
// 手机登录接口
api.phoneLogin = api.base + 'login/cellphone'; // cellphone?phone=xxx&password=yyy
// 账号信息接口
api.userSubcount = api.base + 'user/subcount';
// 用户详情接口
api.userDetail = api.base + 'user/detail'; // ?uid=用户uid
// 用户电台
api.userAudio = api.base + 'user/audio'; // ?uid=用户uid
// 获取用户歌单
api.userPlayList = api.base + 'user/playlist'; // ?uid=用户uid&limit=30&offset=0
// 搜索接口
api.search = api.base + 'search'; // ?keywords=xxx&limit=30&offset=0&type=1 offset偏移数量用于分页 如(页数-1)*30,其中30为limit的值,默认为 0;1:单曲,10:专辑,100:歌手,1000:歌单,1002:用户,1004:MV,1006:歌词,1009:电台,1014:视频,1018:综合,2000:声音(搜索声音返回字段格式会不一样)
// 最近播放歌曲
api.record = api.base + 'record/recent/song'; // ?limit=1

export default api;