
function digital_time(){
    
    let dis_hours = document.getElementById('hours')
    let dis_minutes = document.getElementById('minutes')
    let dis_seconds = document.getElementById('seconds')
    let dis_am_pm = document.getElementById('am_pm')

    let current_time = new Date()
    let git_hours = current_time.getHours()
    let git_minutes = current_time.getMinutes()
    let git_seconds = current_time.getSeconds()

    let hours_format = git_hours % 12 
    let am_pm = git_hours > 12 ?'PM':'AM'

    let r_hours = am_pm < 10 ? '0' + am_pm : am_pm ;
    let r_minutes = git_minutes < 10 ? '0' + git_minutes: git_minutes;
    let r_seconds = git_seconds < 10 ? '0' + git_seconds : git_seconds;

    dis_hours.innerHTML = hours_format
    dis_minutes.innerHTML = r_minutes
    dis_seconds.innerHTML = r_seconds
    dis_am_pm.innerHTML = am_pm
}
setInterval(digital_time,1000)