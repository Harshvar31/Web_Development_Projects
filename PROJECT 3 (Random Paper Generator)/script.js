let main = document.querySelector('main')
let btn = document.querySelector('button')

btn.addEventListener('click', function(){
    let div = document.createElement('div');
    let x  = Math.random()*100
    let y = Math.random()*100
    let r = Math.random()*361

    let c1 =Math.floor(Math.random()*256)
    let c2 =Math.floor(Math.random()*256)
    let c3 =Math.floor(Math.random()*256)

    div.style.height = '100px'
    div.style.width = '100px'
    div.style.position = 'absolute'
    div.style.left = x + '%'
    div.style.top = y + '%'
    div.style.rotate = r + 'deg'
    div.style.backgroundColor = `rgb(${c1},${c2},${c3})`

    main.appendChild(div)
})