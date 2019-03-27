/**
 * 这里的重点是，当消息队列空闲的时候，事件消息总是优于普通异步消息的，所以才先处理click。
 */
setTimeout(function(){
    for(var i = 0; i < 100000000; i++){}
    console.log('timer a');
}, 0)

for(var j = 0; j < 5; j++){
    console.log(j);
}

setTimeout(function(){
    console.log('timer b');
}, 0)

function waitFiveSeconds(){
    var now = (new Date()).getTime();
    while(((new Date()).getTime() - now) < 5000){}
    console.log('finished waiting');
}

document.addEventListener('click', function(){
    console.log('click');
})

console.log('click begin');
waitFiveSeconds();