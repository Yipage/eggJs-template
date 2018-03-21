import dkAxios from '../assets/jslibs/dk-axios'
/*
发送验证码
 */
const getMoilbeKey = (data) => {
  return dkAxios({
    url: 'app/user/' + data,
    method: 'get'
  })
};

/*
登录
 */
const userLogin = (data) => {
  return dkAxios({
    url: 'app/user',
    method: 'POST',
    data: data
  })
};

/*
问题模块
 */
const getQuestionInfo = (data) => {
  return dkAxios({
    url: 'app/communal/questions',
    method: 'get'
  })
};
/*
获取问题详情
 */
const getDetail = (data) => {
  return dkAxios({
    url: 'app/communal/questions/' + data,
    method: 'get'
  })
};

/*
地址列表
 */
const getAddressList = () => {
  return dkAxios({
    url: 'app/address/receiver',
    method: 'get'
  })
};

/*
新增收货地址
 */
const getAddAddress = (data) => {
  return dkAxios({
    url: 'app/address/receiver',
    method: 'post',
    data: data
  })
};


//导出模块
export {
  getMoilbeKey,
  userLogin,
  getQuestionInfo,
  getDetail,
  getAddressList,
  getAddAddress
}
