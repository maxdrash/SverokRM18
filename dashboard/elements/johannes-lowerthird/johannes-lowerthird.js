(function () {
	'use strict';


  Polymer({
		is: 'johannes-lowerthird',

		ready: function(){




		},
		refreshlist: function () {
			this.$.ajax.generateRequest();
		},
		sendtogfx: function() {
			nodecg.sendMessage('lowerthird:current', "lalal");
		}

  });




})();
