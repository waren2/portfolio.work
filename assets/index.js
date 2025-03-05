var tabcontents = document.getElementsByClassName("tab-contents");
var tablinks = document.getElementsByClassName("tab-links");

function opentab(tabname){
    for(tabcontent of tabcontents){
        tabcontent.classlist.remove("active-link");
    }
    for(tablink of tablinks){
        tablink.classlist.remove("active-tab");
}
}
