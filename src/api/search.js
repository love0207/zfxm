import request from '@/utils/index'
export const getSearch = (id) => {
  return request({
    method: 'GET',
    url: 'houses/condition',
    params: { id: id }
  })
}
