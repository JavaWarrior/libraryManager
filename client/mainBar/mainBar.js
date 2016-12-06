import { Template } from 'meteor/templating';

import './mainBar.html'

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}


/* Set the width of the side navigation to 0 */
function closeNav() {

}

Template.mainBar.onRendered(function(){
  $('.button-collapse').sideNav({
    closeOnClick: true
  }); // http://materializecss.com/side-nav.html

});


