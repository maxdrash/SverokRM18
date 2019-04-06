(function () {
	'use strict';


  Polymer({
		is: 'johannes-countdown',

		/*properties: {
      tid: {
        type: String//,
				//observer: "_onMessageChanged"
      }
    },*/


		ready: function() {
			this.newTimer(120);
    },
		newTimer: function(tid) {
			var timer = new Timer();
			timer.start({countdown: true, startValues: {seconds: tid}});
			this.$.raknare.textContent = timer.getTimeValues().minutes.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) + ':' + timer.getTimeValues().seconds.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})//.toString();
			timer.addEventListener('secondsUpdated', function (e) {
				document.querySelector('johannes-countdown').$.raknare.textContent = timer.getTimeValues().minutes.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) + ':' + timer.getTimeValues().seconds.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
			});
			timer.addEventListener('targetAchieved', function (e) {
    		//$('#countdownExample .values').html('KABOOM!!');
			});
		}




  });


})();
