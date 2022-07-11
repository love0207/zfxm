import request from '@/utils/index'
export const cityList = () => {
  return request({
    method: 'GET',
    url: 'area/city',
    params: { level: 1 }
  })
}

/**
 * 热门城市
 * @returns
 */
export const getHotCity = () => {
  return request({
    url: '/area/hot'
  })
}
