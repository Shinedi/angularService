/**
 * Created by Administrator on 2016/8/19.
 */
angular.module('personnal',[]).factory('person',function(){
    var person={
        name:'Hathway',
        job:'actor'
    };
    var getInfo=function(){
        return person;
    };
    return {
        info:function()
        {
            return getInfo();
        }
    }
});