import request from '@/utils/index'
export const getSearch = (id) => {
  return request({
    method: 'GET',
    url: 'houses/condition',
    params: { id: id }
  })
}

/**
 * 根据条件查询房屋
 * @returns
 */
export const getHouse = () => {
  return request({
    url: '/houses'
  })
}
