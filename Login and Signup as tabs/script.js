function applyStyle(id1, id2){
    const element1 = document.getElementById(id1);
    const button1 = document.getElementById(id1+'Button')
    element1.style.display = 'none';
    button1.style.backgroundColor = 'rgba(241, 231, 231, 0.3)'

    const element2 = document.getElementById(id2);
    const button2 = document.getElementById(id2+'Button')
    element2.style.display = 'block';
    button2.style.backgroundColor = 'white';
}

function showText(id){
    const parent = document.getElementById(id)
    const input = parent.children[1]
    const img = parent.lastElementChild
    input.type = input.type === 'text'? 'password' : 'text'
    img.setAttribute('src',img.getAttribute('src') === 'eye-closed.png' ? 'eye-opened.png' : 'eye-closed.png')
}