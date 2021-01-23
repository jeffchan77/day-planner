var date = moment().format('MMMM Do YYYY, h:mm:ss a')
$('#currentDay').append(date)


var time = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]
updatetime();

function updatetime() {
  var current = moment().format('H')
  for(var i = 0; i < time.length; i++) {
    if (parseInt(time[i]) > current) {
      $('#' + time[i]).attr('style', 'background-color: lightgreen')
    }
    else if (parseInt(time[i]) < current) {
      $('#' + time[i]).attr('style', 'background-color: lightgray')
    }
    else if (parseInt(time[i]) == current) {
      $('#' + time[i]).attr('style', 'background-color: red')
    }
  }
}


$('button').on('click',function(){
    var task = $(this).prev().val()
   
    var time = $(this).prev().attr('id')
        console.log(time)
    localStorage.setItem(time,task)
})

function getTasks(){
    // var task = localStorage.getItem('')
    // return task
    var tasks = []
    for(var i=9;i<=17;i++){
        var task = localStorage.getItem(i)
        tasks.push(task)
    }
    return tasks
}

function writeTasks(tasks){
    //$('#9').val(task)
    
    for(var i = 0;i<tasks.length;i++){
        var task = tasks[i]
        $('#' + (i + 9)).val(task)
    }
}

var tasks = getTasks()
writeTasks(tasks)