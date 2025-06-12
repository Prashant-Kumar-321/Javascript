const helloWorld = document.getElementById('hello-world');
const btn20px = document.getElementById('20px');
const btn50px = document.getElementById('50px');
const btn70px = document.getElementById('70px');

function makeTextResizer(size){

    function resize(){
        helloWorld.style.fontSize=`${size}px`;
    }

    return resize;
}
btn20px.onclick = makeTextResizer(20);
btn50px.onclick = makeTextResizer(50);
btn70px.onclick = makeTextResizer(70);