function getCommentList() {
  $.ajax({
    type: 'GET',
    url: 'http://www.liulongbin.top:3006/api/cmtlist',
    success(res) {
      if (res.status !== 200) return alert('获取评论列表失败')
      // console.log('获取数据成功');
      var rows = []
      res.data.forEach(item => {
        // 拼接html字符串
        rows.push(`<li class="list-group-item">
        <span class="badge" style="background-color: #F0AD4E;">评论时间：${item.time}</span>
        <span class="badge" style="background-color: #5BC0DE;">评论人：${item.username}</span>
        ${item.content}
      </li>`)
      })
      $('#cmt-list').empty().append(rows)
    }
  })
}
getCommentList()

$(function () {
  $('#formAddCmt').submit(function (e) {
    e.preventDefault()
    var data = $(this).serialize()
    // console.log(data);

    // 请求
    $.ajax({
      type: 'POST',
      url: 'http://www.liulongbin.top:3006/api/addcmt',
      data,
      success(res) {
        if (res.status !== 201) return alert('发表评论失败')
        getCommentList()
        $('#formAddCmt').get(0).reset()
      }
    })
    return false
  })
})