const promisify = api => (obj = {}) => new Promise((res, rej) => {
  obj.success = res
  obj.fail = rej
  api(obj)
})

export default promisify
