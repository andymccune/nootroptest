!function(){"use strict";angular.module("iq",["ngAnimate","ui.router","toastr"])}(),function(){"use strict";function e(e,t){e.debugEnabled(!0),t.allowHtml=!0,t.timeOut=3e3,t.positionClass="toast-top-right",t.preventDuplicates=!0,t.progressBar=!0}e.$inject=["$logProvider","toastrConfig"],angular.module("iq").config(e)}(),function(){"use strict";angular.module("iq").constant("malarkey",malarkey).constant("moment",moment).constant("questions",[{query:"Which word doesn't fit?",options:["Smelling","Seeing","Smiling","Hearing"],answer:0},{query:"Which word doesn't fit?",options:["Painting","Poem","Flower","Song"],answer:0},{query:"What day was yesterday, if Monday is in two days?",options:["Wednesday","Friday","Saturday","Sunday"],answer:0},{query:"Coffee is to cup, what cake is to...",options:["Fork","Napkin","Plate"],answer:0},{query:"Finger is to hand, what leaf is to...",options:["Twig","Tree","Forest"],answer:0},{query:"What is half of a quarter of 400?",options:["50","100","200"],answer:0},{query:'"If you turn your left glove inside out, it will fit your right hand."',options:["True","False"],answer:0},{query:"Which shape does not fit the others?",body:"0px 0px",bodySize:["248px","248px"],optionSize:["68px","68px"],sprite:!0,options:["0px -270px","-90px -270px"],answer:0},{query:"Which shape completes the pattern?",body:"-270px 0px",bodySize:["251px","251px"],optionSize:["71px","71px"],sprite:!0,options:["-270px -270px","-360px -270px"],answer:0},{query:"Which shape does not fit the others?",optionSize:["57px","57px"],sprite:!0,options:["-540px 0px","-540px -90px","-540px -180px","-540px -270px","-540px -360px"],answer:0},{query:"Which shape does not fit the others?",optionSize:["57px","57px"],sprite:!0,options:["-630px 0px","-630px -90px","-630px -180px","-630px -270px","-630px -360px"],answer:0},{query:"Which shape does not fit the others?",optionSize:["57px","57px"],sprite:!0,options:["-720px 0px","-720px -90px","-720px -180px","-720px -270px"],answer:0},{query:"Select the picture that best fits the white space",body:"-810px 0px",bodySize:["-810px","0px"],optionSize:["90px","56px"],sprite:!0,options:["-810px -180px","-810px -270px","-900px -180px","-900px -270px"],answer:0},{query:"Complete the series: \n 1-2-4-7-11-16-22-?",options:["30","29"],answer:0},{query:"Complete the series: \n 3-6-10-20-24-?",options:["40","48"],answer:0},{query:"Some bracelets are valuable jewelry. \n All bracelets are made of gold. \n \n Which is true for sure?",options:["Some bracelets are made of silver.","Some valuable jewelery is made of gold."],answer:0},{query:"Some politicians are lazy. \n No lazy person is wealthy. \n \n Which is true for sure?",options:["Some politicians are not wealthy.","Some politicians are wealthy."],answer:0}])}(),function(){"use strict";angular.module("iq").config(["$stateProvider","$urlRouterProvider",function(e,t){e.state("home",{url:"/",templateUrl:"app/templates/home.html",controller:"homeCtrl"}).state("test",{url:"/test",templateUrl:"app/templates/test.html",controller:"testCtrl"}).state("results",{url:"/results",templateUrl:"app/templates/results.html",controller:"resultsCtrl"}),t.otherwise("/")}]).run(["$rootScope",function(e){e.results=[]}])}(),function(){"use strict";function e(e){e.debug("runBlock end")}e.$inject=["$log"],angular.module("iq").run(e)}(),function(){"use strict";angular.module("iq").controller("navbarCtrl",function(){}).controller("homeCtrl",function(){}).controller("testCtrl",["$scope","$rootScope","$state","questions",function(e,t,o,i){e.questions=i,e.question=i[0],e.questionIndex=0,e.answerQuestion=function(i){var a=$("#test .card");a.addClass("inactive"),setTimeout(function(){a.removeClass("inactive")},350);e.questions[e.questionIndex];t.results.push(e.question.answer===i),e.questionIndex++,e.questionIndex+1==e.questions.length&&o.go("results"),e.question=e.questions[e.questionIndex]}}]).controller("resultsCtrl",["$scope","$rootScope","$state",function(e,t,o){t.results.length||o.go("home"),setTimeout(function(){$(".brain-fill").addClass("active")},200);for(var i=t.results,a=0,n=0;n<i.length;n++)i[n]&&a++;var a=e.score=parseInt(a/i.length*100)+30;95>a?e.desc="below":a>94&&106>a?e.desc="around":a>105&&120>a?e.desc="higher than":a>120&&(e.desc="much higher than")}])}(),function(){"use strict";angular.module("iq").directive("navbar",function(){return{restrict:"E",scope:{},controller:"navbarCtrl",templateUrl:"app/templates/tmpl-navbar.html"}}).directive("footer",function(){return{restrict:"E",replace:!0,scope:{},templateUrl:"app/templates/tmpl-footer.html"}})}(),function(){"use strict";function e(e,t){function o(o){function a(e){return e.data}function n(t){e.error("XHR Failed for getContributors.\n"+angular.toJson(t.data,!0))}return o||(o=30),t.get(i+"/contributors?per_page="+o).then(a)["catch"](n)}var i="https://api.github.com/repos/Swiip/generator-gulp-angular",a={apiHost:i,getContributors:o};return a}e.$inject=["$log","$http"],angular.module("iq").factory("githubContributor",e)}(),function(){"use strict";function e(){function e(e){var t=this;t.relativeDate=e(t.creationDate).fromNow()}e.$inject=["moment"];var t={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:e,controllerAs:"vm",bindToController:!0};return t}angular.module("iq").directive("acmeNavbar",e)}(),function(){"use strict";function e(e){function t(t,o,i,a){var n,s=e(o[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});o.addClass("acme-malarkey"),angular.forEach(t.extraValues,function(e){s.type(e).pause()["delete"]()}),n=t.$watch("vm.contributors",function(){angular.forEach(a.contributors,function(e){s.type(e.login).pause()["delete"]()})}),t.$on("$destroy",function(){n()})}function o(e,t){function o(){return i().then(function(){e.info("Activated Contributors View")})}function i(){return t.getContributors(10).then(function(e){return a.contributors=e,a.contributors})}var a=this;a.contributors=[],o()}o.$inject=["$log","githubContributor"];var i={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:t,controller:o,controllerAs:"vm"};return i}e.$inject=["malarkey"],angular.module("iq").directive("acmeMalarkey",e)}(),function(){"use strict";function e(){function e(){return t}var t=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Material Design Lite",url:"http://www.getmdl.io/",description:"Add a Material Design look and feel to your websites.",logo:"material-design-lite.png"},{key:"jade",title:"Jade",url:"http://jade-lang.com/",description:"Jade is a high performance template engine heavily influenced by Haml and implemented with JavaScript for node.",logo:"jade.png"}];this.getTec=e}angular.module("iq").service("webDevTec",e)}(),angular.module("iq").run(["$templateCache",function(e){e.put("app/components/navbar/navbar.html",'<div class="mdl-layout__header-row"><span class="mdl-layout-title mdl-badge" data-badge="♥">Gulp Angular</span><nav class="mdl-navigation mdl-layout--large-screen-only"><a class="mdl-navigation__link" href="#">Home</a> <a class="mdl-navigation__link" href="#">About</a> <a class="mdl-navigation__link" href="#">Contact</a></nav><div class="mdl-layout-spacer"></div><span class="mdl-navigation__link">Application was created {{ vm.relativeDate }}.</span></div>'),e.put("app/templates/home.html",'<section id="home" class="page-content text-center"><h1 class="display-3">Welcome to the Quick IQ Test!</h1><h6 class="title">This test does not take long and still gives you a good approximation of your true IQ.</h6><button ui-sref="test" class="start-now mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Start now ></button></section>'),e.put("app/templates/results.html",'<section id="results" class="page-content text-center"><h2 class="display-2">Well done!</h2><h6 class="title">You are {{desc}} average<br><br>Your IQ is:</h6><div class="brain-holder text-center"><div class="brain"></div><div class="brain-fill"></div><div class="score mdl-color-text--amber">{{score}}</div></div></section>'),e.put("app/templates/test.html",'<section id="test" class="page-content text-center"><div class="card"><h2 class="question display-2">{{question.query}}</h2><div ng-if="question.body" class="body"><h3 ng-if="!question.sprite" class="display-1">{{question.body}}</h3><div ng-if="question.sprite" ng-style="{\'background-position\': question.body, width: question.bodySize[0], height: question.bodySize[1]}" class="sprite"></div></div><button ng-repeat="($oi, o) in question.options track by $oi" ng-click="answerQuestion($oi)" class="option mdl-button mdl-button--raised mdl-button--accent"><span ng-if="!question.sprite">{{o}}</span><div ng-if="question.sprite" ng-style="{\'background-position\': o, width: question.optionSize[0], height: question.optionSize[1]}" class="sprite"></div></button></div></section>'),e.put("app/templates/tmpl-footer.html",'<div id="footer" class="mdl-mega-footer"><div class="mdl-mega-footer__middle-section"><div class="mdl-mega-footer__drop-down-section"><input type="checkbox" checked="" class="mdl-mega-footer__heading-checkbox"><h1 class="mdl-mega-footer__heading">Features</h1><ul class="mdl-mega-footer__link-list"><li><a href="#">About</a></li><li><a href="#">Partners</a></li><li><a href="#">Blog</a></li></ul></div><div class="mdl-mega-footer__drop-down-section"><input type="checkbox" checked="" class="mdl-mega-footer__heading-checkbox"><h1 class="mdl-mega-footer__heading">Details</h1><ul class="mdl-mega-footer__link-list"><li><a href="#">Specs</a></li><li><a href="#">Tools</a></li><li><a href="#">Resources</a></li></ul></div><div class="mdl-mega-footer__drop-down-section"><input type="checkbox" checked="" class="mdl-mega-footer__heading-checkbox"><h1 class="mdl-mega-footer__heading">Technology</h1><ul class="mdl-mega-footer__link-list"><li><a href="#">How it works</a></li><li><a href="#">Products</a></li><li><a href="#">Contracts</a></li></ul></div><div class="mdl-mega-footer__drop-down-section"><input type="checkbox" checked="" class="mdl-mega-footer__heading-checkbox"><h1 class="mdl-mega-footer__heading">Other</h1><ul class="mdl-mega-footer__link-list"><li><a href="#">Help</a></li><li><a href="#">Privacy & Terms</a></li><li class="made-by">With ♥ - <a href="http://iconicdevelopment.co" class="mdl-color-text--blue mdl-navigation__link">Iconic</a></li></ul></div></div></div>'),e.put("app/templates/tmpl-navbar.html",'<header id="navbar" class="mdl-layout__header"><div class="mdl-layout__header-row"><a ui-sref="home" class="mdl-layout-title"><div class="mdl-logo"><img id="logo" src="assets/images/logo-2.png"></div></a><div class="mdl-layout-spacer"></div><nav class="mdl-navigation"><a href="" class="mdl-navigation__link">About</a><a href="" class="mdl-navigation__link">Sign In</a><div href="" class="mdl-navigation__link"><button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Register</button></div></nav></div></header>')}]);
//# sourceMappingURL=../maps/scripts/app-0877109aea.js.map
