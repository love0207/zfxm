import request from '@/utils/index'
export const rentHouse = () => {
  return request({
    method: 'GET',
    url: 'home/groups'
  })
}
