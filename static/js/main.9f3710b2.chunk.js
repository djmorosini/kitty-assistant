(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(7),r=n.n(s),l=(n(15),n(1)),u=n(2),o=n(4),c=n(3),m=n(5);function p(e,t){function n(){clearInterval(r),u=!1,o=!0,l=null,p.length=c=0}function a(e,t,n){if(!e.hasOwnProperty("parts")||d.length<t)return!0;var i,s=!1;for(d.length===t&&d.push(0);d[t]<e.parts.length;)if(a(i=e.parts[d[t]],t+1,n)?d[t]++:s=!0,n&&3===(i.ref.nodeType-1|1)&&i.ref.nodeValue&&(s=!0,l=i.ref,m=l.nodeValue,l.nodeValue=""),e.ref.appendChild(i.ref),s)return!1;return d.length--,!0}function i(){0===m.length&&a(p[c],0,!0)&&c++===p.length-1?n():(l.nodeValue+=m.charAt(0),m=m.slice(1))}function s(e){if(this.ref=e,e.hasChildNodes()){this.parts=Array.prototype.slice.call(e.childNodes);for(var t=0;t<this.parts.length;t++)e.removeChild(this.parts[t]),this.parts[t]=new s(this.parts[t])}}var r,l=null,u=!1,o=!0,c=0,m="",p=[],d=[];this.rate=t||100,this.play=function(){if(!u){if(o){var t=document.querySelectorAll(e);if(0===t.length)return;for(var n=0;n<t.length;n++)p.push(new s(t[n]));o=!1}r=setInterval(i,this.rate),u=!0}},this.pause=function(){clearInterval(r),u=!1},this.terminate=function(){for(l.nodeValue+=m,m="";c<p.length;a(p[c++],0,!1));n()}}var d=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(n=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).playExamples=function(){document.getElementById("game").innerHTML='<p id="copyleft" style="font-style: italic; font-size: 12px; text-align: center;">CopyLeft 2012 by <a href="https://developer.mozilla.org/" target="_blank">Mozilla Developer Network</a></p>\n    <p id="controls" style="text-align: center;">[&nbsp;<span class="intLink" onclick="oTWExample1.play();">Play</span> | <span class="intLink" onclick="oTWExample1.pause();">Pause</span> | <span class="intLink" onclick="oTWExample1.terminate();">Terminate</span>&nbsp;]</p>\n    <div id="info">\n    Vivamus blandit massa ut metus mattis in fringilla lectus imperdiet. Proin ac ante a felis ornare vehicula. Fusce pellentesque lacus vitae eros convallis ut mollis magna pellentesque. Pellentesque placerat enim at lacus ultricies vitae facilisis nisi fringilla. In tincidunt tincidunt tincidunt.\n    </div>\n    <h1>JavaScript Typewriter</h1>\n    \n    <div id="article">\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultrices dolor ac dolor imperdiet ullamcorper. Suspendisse quam libero, luctus auctor mollis sed, malesuada condimentum magna. Quisque in ante tellus, in placerat est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec a mi magna, quis mattis dolor. Etiam sit amet ligula quis urna auctor imperdiet nec faucibus ante. Mauris vel consectetur dolor. Nunc eget elit eget velit pulvinar fringilla consectetur aliquam purus. Curabitur convallis, justo posuere porta egestas, velit erat ornare tortor, non viverra justo diam eget arcu. Phasellus adipiscing fermentum nibh ac commodo. Nam turpis nunc, suscipit a hendrerit vitae, volutpat non ipsum.</p>\n    <form>\n    <p>Phasellus ac nisl lorem: <input type="text" /><br />\n    <textarea style="width: 400px; height: 200px;">Nullam commodo suscipit lacus non aliquet. Phasellus ac nisl lorem, sed facilisis ligula. Nam cursus lobortis placerat. Sed dui nisi, elementum eu sodales ac, placerat sit amet mauris. Pellentesque dapibus tellus ut ipsum aliquam eu auctor dui vehicula. Quisque ultrices laoreet erat, at ultrices tortor sodales non. Sed venenatis luctus magna, ultricies ultricies nunc fringilla eget. Praesent scelerisque urna vitae nibh tristique varius consequat neque luctus. Integer ornare, erat a porta tempus, velit justo fermentum elit, a fermentum metus nisi eu ipsum. Vivamus eget augue vel dui viverra adipiscing congue ut massa. Praesent vitae eros erat, pulvinar laoreet magna. Maecenas vestibulum mollis nunc in posuere. Pellentesque sit amet metus a turpis lobortis tempor eu vel tortor. Cras sodales eleifend interdum.</textarea></p>\n    <p><input type="submit" value="Send" />\n    </form>\n    <p>Duis lobortis sapien quis nisl luctus porttitor. In tempor semper libero, eu tincidunt dolor eleifend sit amet. Ut nec velit in dolor tincidunt rhoncus non non diam. Morbi auctor ornare orci, non euismod felis gravida nec. Curabitur elementum nisi a eros rutrum nec blandit diam placerat. Aenean tincidunt risus ut nisi consectetur cursus. Ut vitae quam elit. Donec dignissim est in quam tempor consequat. Aliquam aliquam diam non felis convallis suscipit. Nulla facilisi. Donec lacus risus, dignissim et fringilla et, egestas vel eros. Duis malesuada accumsan dui, at fringilla mauris bibStartum quis. Cras adipiscing ultricies fermentum. Praesent bibStartum condimentum feugiat.</p>\n    <p>Nam faucibus, ligula eu fringilla pulvinar, lectus tellus iaculis nunc, vitae scelerisque metus leo non metus. Proin mattis lobortis lobortis. Quisque accumsan faucibus erat, vel varius tortor ultricies ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec libero nunc. Nullam tortor nunc, elementum a consectetur et, ultrices eu orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a nisl eu sem vehicula egestas.</p>\n    </div>';var e=new p("#article, h1, #info, #copyleft",15),t=new p("#controls");e.play(),t.play()},n.changeInterval=function(e){var t;"on"===e?t=setInterval(n.playExamples,3e4):clearInterval(t)},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.playExamples(),this.changeInterval("on")}},{key:"componentWillUnmount",value:function(){this.changeInterval("off")}},{key:"render",value:function(){var e=this;return i.a.createElement(a.Fragment,null,i.a.createElement("button",{onClick:function(){return e.props.updateGame("off")}},"Home"),i.a.createElement("div",{id:"game"}))}}]),t}(a.Component),f=n(8),v=n.n(f),h=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(o.a)(this,Object(c.a)(t).call(this,e))).updateGame=function(e){"typing"===e?n.setState({currentGame:e}):n.setState({currentGame:null})},n.state={currentGame:null},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.state.currentGame;return null===t?i.a.createElement("div",{className:"App"},i.a.createElement("h1",null,"Kitty Assistant"),i.a.createElement("img",{src:v.a,alt:"kitty-assistant"}),i.a.createElement("h2",null,"Choose Game"),i.a.createElement("button",{onClick:function(){return e.updateGame("typing")}},"Typing")):"typing"===t?i.a.createElement("div",{id:"typing-game"},i.a.createElement(d,{updateGame:this.updateGame})):void 0}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n.p+"static/media/Yarn_Kitty.0844a8a2.png"},9:function(e,t,n){e.exports=n(17)}},[[9,2,1]]]);
//# sourceMappingURL=main.9f3710b2.chunk.js.map