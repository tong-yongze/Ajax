$(function () {
  // 获取新闻列表的函数
  // function getNewList() {
  //   template.defaults.imports.formatDate = function (data) {
  //     let date = new Date(data)
  //     let year = date.getFullYear()

  //     let month = date.getMonth() + 1
  //     month = ('' + month).padStart(2, 0)

  //     let day = date.getDate()
  //     day = day.toString().padStart(2, 0)

  //     let hours = date.getHours()
  //     hours = hours.toString().padStart(2, 0)

  //     let minutes = date.getMinutes()
  //     minutes = minutes.toString().padStart(2, 0)

  //     let seconds = date.getSeconds()
  //     seconds = seconds.toString().padStart(2, 0)
  //     return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
  //   }
  function getNewList() {
    template.defaults.imports.formatDate = function (data) {
      let date = new Date(data)
      let year = date.getFullYear()

      let month = (date.getMonth() + 1).toString().padStart(2, 0)

      let day = date.getDate().toString().padStart(2, 0)
      let hours = date.getHours().toString().padStart(2, 0)
      let minutes = date.getMinutes().toString().padStart(2, 0)
      let seconds = date.getSeconds().toString().padStart(2, 0)
      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
    }



    $.get('http://www.liulongbin.top:3006/api/news', function (res) {
      if (res.status !== 200) {
        return alert('获取新闻列表失败')
      }
      res.data.forEach(item => item.tags = item.tags.split(','))

      $('#news-list').html(template('news-tmp', res))
    })
  }
  // }

  getNewList()
})