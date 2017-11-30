let but = document.querySelector('#button');
let res = document.querySelector('#result');

but.addEventListener('click', function(){
    
    let xmlHttp;
    
    if(window.XMLHttpRequest){
        xmlHttp = new XMLHttpRequest();
    }else{
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlHttp.onreadystatechange = function(){
        if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
            var myData = json_decode(xmlHttp.responseText);
            getData(myData);
        }
    }
    
    xmlHttp.open("GET", "tasks1.json", true);
    xmlHttp.send();
});

function getData(myData){
    myData2 = myData.split(", ");
//    myData = myData.replace(/(?:\r\n|\r|\n)/g, '<br />');
    console.log(myData2);
            res.innerHTML = myData;
}

