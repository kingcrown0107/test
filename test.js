<body>w<input id=W type=number required value=9 min=8 max=70>h<input id=H type=
number required value=9 min=8 max=25>*<input id=M type=number required value=9
min=9><input type=button value=Start onclick=S()><p id=p><table id=t style=
"border:solid;border-collapse:collapse"><script>window.onload=S=function(){if(R
(W))W.value=9;if(R(H))H.value=9;M.max=((w=W.value)-1)*((h=H.value)-1);if(R(M))M
.value=10;m=f=z=M.value;s=performance.now();T();for(i=t.rows.length;i-->0;t.
deleteRow(0));a=new Array(h);for(i=h;i-->0;){a[i]=new Array(w);r=t.insertRow(0)
;for(j=w;j-->0;){d=r.insertCell(o=a[i][j]=0);[d.w,d.h,d.style]=[j,i,"width:24"+
"px;height:24px;border:solid;text-align:center;cursor:default"];d.onclick=
function(){if(!V()||this[v].match("[#-8]"))return;if(!o)do if(a[y=(Math.random(
)*h)|0][x=(Math.random()*w)|0]<1&&(Math.abs(this.w-x)>1||Math.abs(this.h-y)>1)
&&z--)a[y][x]=1;while(z);if(!a[this.h][this.w])N(this);else if(f="Lose")for(i=h
;i-->0;)for(j=w;j-->0;)if(a[i][j])t.rows[i].cells[j][v]="※"};d.oncontextmenu=
function(){if(V()&&!this[v].match("[*-8]"))if(!this[v]&&f-->0)this[v]="#";else
if(++f)this[v]="";return !1}}}};T=()=>((p[v="innerHTML"]=((k=((e=((performance.
now()-s)/1e3)|0)/60)|0)<10?"0":"")+k+((l=e%60)<10?":0":":")+l+(+f>=f?" #":" ")+
f)&&V())?setTimeout(T):0;V=()=>+f>=f;R=r=>!r.reportValidity();function N(c){if(
!c||c[v].match("[*-8]"))return;c.style.background="gray";if(~c[v].indexOf("#")
&&f++)T();if(!(c[v]=(a[y=c.h][(x=c.w)-1]>0)+(a[y][x+1]>0)+(y>0&&a[y-1][x-1]>0)+
(y>0&&a[y-1][x]>0)+(y>0&&a[y-1][x+1]>0)+(y<h-1&&a[y+1][x-1]>0)+(y<h-1&&a[y+1][x
]>0)+(y<h-1&&a[y+1][x+1]>0))&&(c[v]="-"))for(c.i=9;c.i-->0;)if(c.i!=4)N(((X=c.w
+1-(c.i/3|0))>=0)*((Y=c.h+1-c.i%3)>=0)*(X<w)*(Y<h)>0?t.rows[Y].cells[X]:0);if(
++o>=w*h-m)f="Win"}</script>
