(this.webpackJsonpreact_antd_admin_template=this.webpackJsonpreact_antd_admin_template||[]).push([[24],{1355:function(t,e,a){"use strict";a.r(e);var i=a(0),r=a.n(i),o=a(7),n=a(72),s=a(73),l=a(75),c=a(74),h=a(16),u=a(498),p=a(101),d=function(t){Object(l.a)(a,t);var e=Object(c.a)(a);function a(){var t;Object(n.a)(this,a);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={chart:null},t}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var t=this;Object(p.a)(this.initChart.bind(this),300)(),window.addEventListener("resize",(function(){return t.resize()}))}},{key:"componentWillReceiveProps",value:function(t){t.sidebarCollapsed!==this.props.sidebarCollapsed&&this.resize(),t.chartData!==this.props.chartData&&Object(p.a)(this.initChart.bind(this),300)()}},{key:"componentWillUnmount",value:function(){this.dispose()}},{key:"resize",value:function(){var t=this.state.chart;t&&Object(p.a)(t.resize.bind(this),300)()}},{key:"dispose",value:function(){var t=this;this.state.chart&&(window.removeEventListener("resize",(function(){return t.resize()})),this.setState({chart:null}))}},{key:"setOptions",value:function(){var t=function(){for(var t=[],e=1;e<13;e++)t.push(e+"month");return t}();this.state.chart.setOption({backgroundColor:"#344b58",title:{text:"statistics",x:"20",top:"20",textStyle:{color:"#fff",fontSize:"22"},subtextStyle:{color:"#90979c",fontSize:"16"}},tooltip:{trigger:"axis",axisPointer:{textStyle:{color:"#fff"}}},grid:{left:"5%",right:"5%",borderWidth:0,top:150,bottom:95,textStyle:{color:"#fff"}},legend:{x:"5%",top:"10%",textStyle:{color:"#90979c"},data:["female","male","average"]},calculable:!0,xAxis:[{type:"category",axisLine:{lineStyle:{color:"#90979c"}},splitLine:{show:!1},axisTick:{show:!1},splitArea:{show:!1},axisLabel:{interval:0},data:t}],yAxis:[{type:"value",splitLine:{show:!1},axisLine:{lineStyle:{color:"#90979c"}},axisTick:{show:!1},axisLabel:{interval:0},splitArea:{show:!1}}],dataZoom:[{show:!0,height:30,xAxisIndex:[0],bottom:30,start:10,end:80,handleIcon:"path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z",handleSize:"110%",handleStyle:{color:"#d3dee5"},textStyle:{color:"#fff"},borderColor:"#90979c"},{type:"inside",show:!0,height:15,start:1,end:35}],series:[{name:"female",type:"bar",stack:"total",barMaxWidth:35,barGap:"10%",itemStyle:{normal:{color:"rgba(255,144,128,1)",label:{show:!0,textStyle:{color:"#fff"},position:"insideTop",formatter:function(t){return t.value>0?t.value:""}}}},data:[709,1917,2455,2610,1719,1433,1544,3285,5208,3372,2484,4078]},{name:"male",type:"bar",stack:"total",itemStyle:{normal:{color:"rgba(0,191,183,1)",barBorderRadius:0,label:{show:!0,position:"top",formatter:function(t){return t.value>0?t.value:""}}}},data:[327,1776,507,1200,800,482,204,1390,1001,951,381,220]},{name:"average",type:"line",stack:"total",symbolSize:10,symbol:"circle",itemStyle:{normal:{color:"rgba(252,230,48,1)",barBorderRadius:0,label:{show:!0,position:"top",formatter:function(t){return t.value>0?t.value:""}}}},data:[1036,3693,2962,3810,2519,1915,1748,4675,6209,4323,2865,4298]}]})}},{key:"initChart",value:function(){var t=this;this.el&&this.setState({chart:u.a.init(this.el,"macarons")},(function(){t.setOptions(t.props.chartData)}))}},{key:"render",value:function(){var t=this,e=this.props,a=e.className,i=e.height,n=e.width,s=e.styles;return r.a.createElement("div",{className:a,ref:function(e){return t.el=e},style:Object(o.a)(Object(o.a)({},s),{},{height:i,width:n})})}}]),a}(i.Component);d.defaultProps={width:"100%",height:"350px",styles:{},className:""};var f=Object(h.b)((function(t){return t.app}))(d);e.default=function(){return r.a.createElement("div",{style:{width:"100%",height:"calc(100vh - 64px)"},className:"app-container"},r.a.createElement(f,{height:"100%",width:"100%"}))}},498:function(t,e,a){"use strict";var i=a(467),r=a.n(i);a(535),a(550),a(551),a(554),a(557),a(558);a(581),e.a=r.a}}]);