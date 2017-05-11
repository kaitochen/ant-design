webpackJsonp([192,211],{778:function(t,n){t.exports={content:["section",["p","Container for displaying data in calendar form."],["h2","When To Use"],["p","When data is in the form of date, such as schedule, timetable, prices calendar, Lunar calendar. This component also supports Year/Month switch."]],meta:{category:"Components",type:"Data Display",cols:1,title:"Calendar",filename:"components/calendar/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#When-To-Use",title:"When To Use"},"When To Use"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["p",["strong","Note:"]," Part of locale of Calendar is read from value. So, please set the locale of moment correctly."],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> moment <span class="token keyword">from</span> <span class="token string">\'moment\'</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// It\'s recommended to set locale in entry file globaly.</span>\n<span class="token keyword">import</span> <span class="token string">\'moment/locale/zh-cn\'</span><span class="token punctuation">;</span>\nmoment<span class="token punctuation">.</span><span class="token function">locale</span><span class="token punctuation">(</span><span class="token string">\'zh-cn\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Calendar</span>\n  <span class="token attr-name">dateCellRender</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>dateCellRender<span class="token punctuation">}</span></span>\n  <span class="token attr-name">monthCellRender</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>monthCellRender<span class="token punctuation">}</span></span>\n  <span class="token attr-name">onPanelChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onPanelChange<span class="token punctuation">}</span></span>\n  <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onSelect<span class="token punctuation">}</span></span>\n<span class="token punctuation">/></span></span>'},["code","import moment from 'moment';\n\n// It's recommended to set locale in entry file globaly.\nimport 'moment/locale/zh-cn';\nmoment.locale('zh-cn');\n\n<Calendar\n  dateCellRender={dateCellRender}\n  monthCellRender={monthCellRender}\n  onPanelChange={onPanelChange}\n  onSelect={onSelect}\n/>"]],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","value"],["td","set date"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","current date"]],["tr",["td","defaultValue"],["td","set default date"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","default date"]],["tr",["td","mode"],["td","can be set to month or year"],["td","string"],["td","month"]],["tr",["td","fullscreen"],["td","to set whether full-screen display"],["td","boolean"],["td","true"]],["tr",["td","dateCellRender"],["td","to set the way of renderer the date cell, the returned content will be appended to the cell"],["td","function(date: moment): ReactNode"],["td","-"]],["tr",["td","monthCellRender"],["td","to set the way of renderer the month cell, the returned content will be appended to the cell"],["td","function(date: moment): ReactNode"],["td","-"]],["tr",["td","dateFullCellRender"],["td","to set the way of renderer the date cell,the returned content will override the cell"],["td","function(date: moment): ReactNode"],["td","-"]],["tr",["td","monthFullCellRender"],["td","to set the way of renderer the month cell,the returned content will override the cell"],["td","function(date: moment): ReactNode"],["td","-"]],["tr",["td","locale"],["td","set locale"],["td","object"],["td",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json"},"default"]]],["tr",["td","onPanelChange"],["td","callback when panel change"],["td","function(date: moment, mode: string)"],["td","-"]],["tr",["td","onSelect"],["td","callback when select date"],["td","function(date: moment\uff09"],["td","-"]]]]]}}});