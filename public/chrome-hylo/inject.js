console.log('Hello from inject.js');

// 

function createFloatButton() {
    if (document.getElementById('cl-float')) {
        return;
    }
    const floatButton = document.createElement('div');
    floatButton.id = 'cl-float';
    floatButton.style = 'position: fixed; width: 90px; height: 36px; bottom: 20px; right: 20px; z-index: 1000; font-size: 16px; background-color: white; border-radius: 16px; font-weight: bold; cursor: pointer; box-shadow: 0px 0px 5px #666; padding: 6px 10px; transition: width 0.2s ease-in-out, height 0.2s ease-in-out; ';
    floatButton.textContent = 'Guide Me';
    floatButton.onmouseover = () => {floatButton.style.backgroundColor = '#eee';}
    floatButton.onmouseout = () => {floatButton.style.backgroundColor = 'white';}
    floatButton.onclick = () => {
        console.log('Clicked');
        toggleSidebar();
    }
    document.body.appendChild(floatButton);

    console.log('Button added');
}

function toggleSidebar() {
    const float = document.getElementById('cl-float');
    if (float.style.height == '36px') {
        float.style.width = '400px';
        float.style.height = '600px';
    } else {
        float.style.width = '90px';
        float.style.height = '36px';
    }
}

createFloatButton();