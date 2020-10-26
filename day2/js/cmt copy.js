function getCommentList() {
  $.ajax({
    type: 'GET',
    url: 'http://www.liulongbin.top:3006/api/cmtlist',
    // data:{}  无
    success: function (res) {
      // console.log(res);
      if (res.status !== 200) return alert('获取评论列表失败')
      // console.log('获取数据成功');
      var rows = []
      $.each(res.data, function (i, item) {
        var str = '<li class="list-group-item"><span class="badge" style="background-color: #F0AD4E;">评论时间：' + item.time + '</span><span class="badge" style="background-color: #5BC0DE;">评论人：' + item.username + '</span>' + item.content + '</li>'
        rows.push(str)
      })
      $('#cmt-list').empty().append(rows.join(''))
    }

  })
}
getCommentList()

$(function () {
  $('#formAddCmt').submit(function (e) {
    e.preventDefault()
    var data = $(this).serialize()
    // console.log(data);
    $.post('http://www.liulongbin.top:3006/api/addcmt', data, function (res) {
      if (res.status !== 201) {
        return alert('发表评论失败!')
      }
      getCommentList()  //刷新表单列表
      $('#formAddCmt')[0].reset()  // reset  表单form 里面的重置表单   把jq 转换为原生dom对象
    })

  })
})