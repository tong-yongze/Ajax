function resolveData(data) {
  var arr = []
  for (var k in data) {
    // 键=值
    var str = k + '=' + data[k]
  }
  return arr.join('&')
}

function it(options) {
  var xhr = new XMLHttpRequest()

  // 把外界传递过来的参数对象 转为查询字符串
  // qs：name=zs&age=18
  var qs = resolveData(options.data)

  if (options.method.toUpperCase() === 'GET') {
    // 发起GET请求
    xhr.open(options.method.options.url + '?' + qs)
    xhr.send()
  } else if (options.method.toUpperCase() === 'POST') {
    // 发起POST请求
    xhr.open(options.method, options.url)
    xhr.setRequestHeader('Conteng-type', 'applecation/x-www-form-urlencoded')
    xhr.send(qs)
  }



}