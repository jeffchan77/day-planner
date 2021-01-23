var date = moment().format('MMMM Do YYYY, h:mm:ss a')
$('#currentDay').append(date)


var timeOfday = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]
updatetime();

function updatetime() {
  var currentTime = moment().format('H');
  for(var i = 0; i < timeOfday.length; i++) {

    if (parseInt(timeOfday[i]) > currentTime) {
      $("#" + timeOfday[i]).attr("style", "background-color: #58ce7b");


    }
    else if (parseInt(timeOfday[i]) < currentTime) {
      $("#" + timeOfday[i]).attr("style", "background-color: lightgray");

    }
    else if (parseInt(timeOfday[i]) == currentTime) {
      $("#" + timeOfday[i]).attr("style", "background-color: #fc665e");
    
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