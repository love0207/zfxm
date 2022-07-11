import request from '@/utils/index'
/**
 *  获取用户资料
 * @returns
 */
export const getUser = () => {
  return request({
    method: 'GET',
    url: 'user'
  })
}

/**
 *获取我的收藏
 * @returns
 */
export const favorateList = () => {
  return request({
    method: 'GET',
    url: 'user/favorites'

  })
}

/**
 *获取我的出租
 * @returns
 */
export const myRent = () => {
  return request({
    method: 'GET',
    url: 'user/houses'

  })
}

export const homeDetail = (id) => {
  return request({
    method: 'GET',
    url: `houses/${id}`
  })
}
