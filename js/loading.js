function id(v){return document.getElementById(v); }

function doneLoading(){
    ovrl = id("overlay");
    ovrl.style.opacity = 0;
    setTimeout(function(){ 
        ovrl.style.display = "none";
    }, 1200);
}

function update_loading(n)
{
    stat = id("progstat");
    if(n == 1){
        x = ".";
    }

    if(n == 2){
        x = ". .";
    }

    if(n == 3){
        x = ". . .";
    }

    stat.innerHTML = "A cat is nice too " + x;
}

function loading_updater(n)
{
    if(n + 1 == 4)
    {
        n = 0;
    }
    n = n + 1;

    update_loading(n);
    setTimeout(function(){
        loading_updater(n);
    }, 500);
}

(function(){
  function loadbar() {
    var ovrl = id("overlay"),
        stat = id("progstat");

      var perc = "100%";
    loading_updater(0);
  }

  loadbar();
}());

