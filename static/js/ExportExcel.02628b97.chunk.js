(this.webpackJsonpreact_antd_admin_template=this.webpackJsonpreact_antd_admin_template||[]).push([[16],{1346:function(e,t,a){"use strict";a.r(t);a(543);var n=a(542),l=(a(87),a(29)),i=(a(540),a(528)),o=(a(742),a(656)),r=(a(235),a(65)),c=(a(232),a(144)),d=(a(62),a(6)),s=(a(141),a(49)),u=a(72),h=a(73),m=a(75),f=a(74),p=(a(236),a(175)),y=(a(648),a(655)),g=a(0),w=a.n(g),v=a(649),x=y.a.Panel,b=[{title:"Id",dataIndex:"id",key:"id",width:200,align:"center"},{title:"Title",dataIndex:"title",key:"title",width:200,align:"center"},{title:"Author",key:"author",dataIndex:"author",width:100,align:"center",render:function(e){return w.a.createElement(p.a,{key:e},e)}},{title:"Readings",dataIndex:"readings",key:"readings",width:195,align:"center"},{title:"Date",dataIndex:"date",key:"date",width:195,align:"center"}],E=function(e){Object(m.a)(p,e);var t=Object(f.a)(p);function p(){var e;Object(u.a)(this,p);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l)))._isMounted=!1,e.state={list:[],filename:"excel-file",autoWidth:!0,bookType:"xlsx",downloadLoading:!1,selectedRows:[],selectedRowKeys:[]},e.fetchData=function(){Object(v.a)().then((function(t){var a=t.data.data.items;e._isMounted&&e.setState({list:a})}))},e.onSelectChange=function(t,a){e.setState({selectedRows:a,selectedRowKeys:t})},e.handleDownload=function(t){"selected"!==t||0!==e.state.selectedRowKeys.length?(e.setState({downloadLoading:!0}),Promise.all([a.e(4),a.e(6),a.e(36)]).then(a.bind(null,1331)).then((function(a){var n="all"===t?e.state.list:e.state.selectedRows,l=e.formatJson(["id","title","author","readings","date"],n);a.export_json_to_excel({header:["Id","Title","Author","Readings","Date"],data:l,filename:e.state.filename,autoWidth:e.state.autoWidth,bookType:e.state.bookType}),e.setState({selectedRowKeys:[],downloadLoading:!1})}))):s.a.error("\u81f3\u5c11\u9009\u62e9\u4e00\u9879\u8fdb\u884c\u5bfc\u51fa")},e.filenameChange=function(t){e.setState({filename:t.target.value})},e.autoWidthChange=function(t){e.setState({autoWidth:t.target.value})},e.bookTypeChange=function(t){e.setState({bookType:t})},e}return Object(h.a)(p,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.fetchData()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"formatJson",value:function(e,t){return t.map((function(t){return e.map((function(e){return t[e]}))}))}},{key:"render",value:function(){var e={selectedRowKeys:this.state.selectedRowKeys,onChange:this.onSelectChange};return w.a.createElement("div",{className:"app-container"},w.a.createElement(y.a,{defaultActiveKey:["1"]},w.a.createElement(x,{header:"\u5bfc\u51fa\u9009\u9879",key:"1"},w.a.createElement(r.a,{layout:"inline"},w.a.createElement(r.a.Item,{label:"\u6587\u4ef6\u540d:"},w.a.createElement(c.a,{style:{width:"250px"},prefix:w.a.createElement(d.a,{type:"file",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"\u8bf7\u8f93\u5165\u6587\u4ef6\u540d(\u9ed8\u8ba4excel-file)",onChange:this.filenameChange})),w.a.createElement(r.a.Item,{label:"\u5355\u5143\u683c\u5bbd\u5ea6\u662f\u5426\u81ea\u9002\u5e94:"},w.a.createElement(o.a.Group,{onChange:this.autoWidthChange,value:this.state.autoWidth},w.a.createElement(o.a,{value:!0},"\u662f"),w.a.createElement(o.a,{value:!1},"\u5426"))),w.a.createElement(r.a.Item,{label:"\u6587\u4ef6\u7c7b\u578b:"},w.a.createElement(i.a,{defaultValue:"xlsx",style:{width:120},onChange:this.bookTypeChange},w.a.createElement(i.a.Option,{value:"xlsx"},"xlsx"),w.a.createElement(i.a.Option,{value:"csv"},"csv"),w.a.createElement(i.a.Option,{value:"txt"},"txt"))),w.a.createElement(r.a.Item,null,w.a.createElement(l.a,{type:"primary",icon:"file-excel",onClick:this.handleDownload.bind(null,"all")},"\u5168\u90e8\u5bfc\u51fa")),w.a.createElement(r.a.Item,null,w.a.createElement(l.a,{type:"primary",icon:"file-excel",onClick:this.handleDownload.bind(null,"selected")},"\u5bfc\u51fa\u5df2\u9009\u62e9\u9879"))))),w.a.createElement("br",null),w.a.createElement(n.a,{bordered:!0,columns:b,rowKey:function(e){return e.id},dataSource:this.state.list,pagination:!1,rowSelection:e,loading:this.state.downloadLoading}))}}]),p}(g.Component);t.default=E},649:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(46);function l(){return Object(n.a)({url:"/excel/list",method:"get"})}}}]);