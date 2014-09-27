'use strict';
//test for existence of object already in scope before creating
if (!drcUtils){
  var drcUtils = {};
  //Utility for timing function execution
  drcUtils.FunctionTimer = function(functionToTime) {
    this.functionToTime = functionToTime;
    this.startTime = 0;
    this.endTime = 0;
    this.runTime = function (){return this.endTime - this.startTime;};
    this.run = function (){
      //Use the Date object to record times
      this.startTime = new Date().getTime();
      this.endTime = (function(){
        functionToTime();
        return new Date().getTime();
      })();
      return this.endTime - this.startTime;
    };
  }
}
else alert('global object required to run is already being used');

