function getCommentList() {
  $.ajax({
    type: 'GET',
    url: 'http://www.liulongbin.top:3006/api/cmtlist',
    success(res) {
      if (res.status !== 200) return alert('获取评论列表失败！')
      let rows = []
      res.data.forEach(item => {
        // 拼接HTML字符串
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
  $('#formAddCmt').on('submit', function () {
    // console.log('提交数据')
    let data = $(this).serialize()
    // console.log(data)

    $.ajax({
      type: 'POST',
      url: 'http://www.liulongbin.top:3006/api/addcmt',
      data,
      success(res) {
        if (res.status !== 201) return alert('发表评论失败！')
        // 获取最新的数据 刷新列表
        getCommentList()
        // 当前表单中的数据清空
        // 原生DOM表单对象有reset()方法，可以重置表单元素的内容
        $('#formAddCmt').get(0).reset()
      }
    })

    // 阻止默认行为：不提交数据
    return false
  })
})