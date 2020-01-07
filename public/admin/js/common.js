// 将表单的数据数组转化为json对象
function serializeToJson(form) {
  var result = {}
  // [{name: 'inputname', value:'inputvalue'}]
  var f = form.serializeArray()
  f.forEach(function(item) {
    // result.email: inputvalue
    result[item.name] = item.value
  })
  return result
}
