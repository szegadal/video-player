const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')


$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePause)
$backward.addEventListener('click', handleBackward)
$forward.addEventListener('click', handleForward)

function handlePlay() {
    $video.play()
    $play.hidden = true
    $pause.hidden = false
    $forward.hidden = false
    $backward.hidden = false
}

function handlePause() {
    $video.pause()
    $play.hidden = false
    $pause.hidden = true
    $forward.hidden = true
    $backward.hidden = true
}

function handleBackward() {
    $video.currentTime -=  10
    //$video.currentTime = $video.currentTime - 10
}

function handleForward() {
    $video.currentTime += 10
    //$video.currentTime = $video.currentTime + 10
}

const $progress = document.querySelector('#progress')
$video.addEventListener('loadedmetadata',handleloaded)
$video.addEventListener('timeupdate',handleTimeUpdate)

function handleloaded() {
    $progress.max = $video.duration

}

function handleTimeUpdate() {
    $progress.value = $video.currentTime
}

$progress.addEventListener('input', handleTrackTime)

function handleTrackTime() {
    $video.currentTime = $progress.value
}