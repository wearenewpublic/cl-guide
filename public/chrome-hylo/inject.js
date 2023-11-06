const global_sidebar_url = 'http://localhost:19007/sidebar';
var global_expanded = false;

console.log('Hello from inject.js');

// 

function createFloatButton() {
    if (document.getElementById('cl-float')) {
        return;
    }

    const button = document.createElement('div');
    button.id = 'cl-button';
    button.textContent = 'Guide Me';
    button.style = 'display: flex; justify-content: space-between; align-items: center; padding: 6px 10px; border-radius: 16px';
    button.onmouseover = () => {button.style.backgroundColor = '#eee';}
    button.onmouseout = () => {button.style.backgroundColor = 'white';}

    const closer = document.createElement('img');
    closer.id = 'cl-closer';
    closer.src = 'https://cl-guide.web.app/icon/chevron_down.png';
    closer.style = 'width: 16px; height: 7px; display: none';
    button.appendChild(closer);

    const floatButton = document.createElement('div');
    floatButton.id = 'cl-float';
    floatButton.style = 'position: fixed; width: 90px; height: 36px; bottom: 20px; right: 20px; z-index: 1000; font-size: 16px; background-color: white; border-radius: 16px; font-weight: bold; cursor: pointer; box-shadow: 0px 0px 5px #666; padding: 0px; transition: width 0.2s ease-in-out, height 0.2s ease-in-out; ';
    // floatButton.textContent = 'Guide Me';
    floatButton.onmouseover = () => {if(!global_expanded) floatButton.style.backgroundColor = '#eee';}
    floatButton.onmouseout = () => {if(!global_expanded) floatButton.style.backgroundColor = 'white';}
    floatButton.onclick = () => {
        console.log('Clicked');
        toggleSidebar();
    }
    floatButton.appendChild(button);
    document.body.appendChild(floatButton);

    console.log('Button added');
}

function getIframe(){
    if (document.getElementById('cl-sidebar')) {
        return document.getElementById('cl-sidebar');
    }
    const iframe = document.createElement('iframe');
    iframe.id = 'cl-sidebar';
    iframe.src = global_sidebar_url;    
    iframe.width = '380px';
    iframe.height = '520px';
    iframe.style.border = 'none';
    iframe.style.backgroundColor = 'white';
    iframe.style.marginLeft = '10px';
    const float = document.getElementById('cl-float');
    float.appendChild(iframe);
    return iframe;
}

function toggleSidebar() {
    const float = document.getElementById('cl-float');
    const closer = document.getElementById('cl-closer');
    const button = document.getElementById('cl-button')
    const iframe = getIframe();
    if (!global_expanded) {
        global_expanded = true;
        float.style.width = '400px';
        float.style.height = '560px';
        iframe.style.display = 'block';
        float.style.backgroundColor = 'white';
        closer.style.display = 'block';
        button.style.borderBottomRightRadius = '0px';
        button.style.borderBottomLeftRadius = '0px';
    } else {
        global_expanded = false;
        float.style.width = '90px';
        float.style.height = '36px';
        iframe.style.display = 'none';
        closer.style.display = 'none';
        button.style.borderBottomRightRadius = '16px';
        button.style.borderBottomLeftRadius = '16px';

    }
}

createFloatButton();