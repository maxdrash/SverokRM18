(function () {
	'use strict';


  Polymer({
		is: 'johannes-tchat',
    ready() {


    },
    showtext(){
      if(this.$.firstline.value != "" || this.$.secondline.value != ""){
        var data = {};
        data.firstline = this.$.firstline.value;
        data.secondline = this.$.secondline.value;
        nodecg.sendMessage('showOmnibarText', data);
      } else {
        console.log("Kanske något error msg, att man har glömt texten?!");
      }
    },
    hidetext(){
      nodecg.sendMessage('hideOmnibarText');
    }
  });




})();
