var div = document.createElement('div');
div.innerHTML = "ВНИМАНИЕ!!! БОЕВОЙ СЕРВЕР! НИЧЕГО НЕ МЕНЯТЬ!";
div.style.position = "fixed";
div.style.width = "800px";
div.style.left = "50%";
div.style.marginLeft = "-400px";
div.style.letterSpacing = "5px";
div.style.fontWeight = "bolder";
div.style.textAlign = "center";
div.style.background = "tomato";
div.style.color = "yellow";
div.style.zIndex = "999";
document.body.prepend(div);