import{d as b,c as f,m as n,C as s}from"./index.c0c5a9d6.js";import{c as y,m as v,e as w}from"./index.1cf73b05.js";import"./echarts.128204f2.js";function x(i,t,c){let r={title:{left:"center",text:"Top 10 "+(i==="teams"?"Teams":"Users")},tooltip:{trigger:"axis",axisPointer:{type:"cross"}},legend:{type:"scroll",orient:"horizontal",align:"left",bottom:35,data:[]},toolbox:{feature:{dataZoom:{yAxisIndex:"none"},saveAsImage:{}}},grid:{containLabel:!0},xAxis:[{type:"time",boundaryGap:!1,data:[]}],yAxis:[{type:"value"}],dataZoom:[{id:"dataZoomX",type:"slider",xAxisIndex:[0],filterMode:"filter",height:20,top:35,fillerColor:"rgba(233, 236, 241, 0.4)"}],series:[]};const a=Object.keys(t);for(let e=0;e<a.length;e++){const l=[],h=[];for(let o=0;o<t[a[e]].solves.length;o++){l.push(t[a[e]].solves[o].value);const d=b(t[a[e]].solves[o].date);h.push(d.toDate())}const p=y(l);let u=h.map(function(o,d){return[o,p[d]]});r.legend.data.push(t[a[e]].name);const g={name:t[a[e]].name,type:"line",label:{normal:{position:"top"}},itemStyle:{normal:{color:f(t[a[e]].name+t[a[e]].id)}},data:u};r.series.push(g)}return c&&(r=v(r,c)),r}window.Alpine=n;window.CTFd=s;const m=window.scoreboardUpdateInterval||3e5;n.data("ScoreboardDetail",()=>({data:{},show:!0,activeBracket:null,async update(){this.data=await s.pages.scoreboard.getScoreboardDetail(10,this.activeBracket);let i=window.scoreboardChartOptions,t=x(s.config.userMode,this.data,i);w(this.$refs.scoregraph,t),this.show=Object.keys(this.data).length>0},async init(){this.update(),setInterval(()=>{this.update()},m)}}));n.data("ScoreboardList",()=>({standings:[],brackets:[],activeBracket:null,async update(){this.brackets=await s.pages.scoreboard.getBrackets(s.config.userMode),this.standings=await s.pages.scoreboard.getScoreboard()},async init(){this.$watch("activeBracket",i=>{this.$dispatch("bracket-change",i)}),this.update(),setInterval(()=>{this.update()},m)}}));n.start();
