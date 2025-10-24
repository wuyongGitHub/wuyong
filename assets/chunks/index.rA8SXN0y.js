const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/OrbitControls.DfyDYf8j.js","assets/chunks/three.module.CjLKN4l_.js"])))=>i.map(i=>d[i]);
import{_ as le}from"./Button.B7dY0lcR.js";import{d as K,p as D,v as ae,V as se,x as ce,c as N,e as he,j as Q,k as B,N as U,o as O,_ as ue,G as W,w as fe,a as me}from"./framework.Gi3K-aNU.js";import{S as ge,e as de,P as ve,W as pe,f as xe,D as we,G as ye,I as k,l as _e,g as be,h as Me,V as x,b as Ae,R as He,i as ze,j as Pe}from"./three.module.CjLKN4l_.js";import{w as Se}from"./tool.D1yyrI_Z.js";const Ve=["innerHTML"],Ce=K({name:"JBHeatMap3DUV",__name:"HeatMap2",props:{data:{type:Array,default:()=>[]},width:{type:Number,default:600},height:{type:Number,default:500},baseSize:{type:Number,default:.1},maxHeight:{type:Number,default:3},enableOrbit:{type:Boolean,default:!0},backgroundColor:{type:String,default:"#0d1b2a"},showGridHelper:{type:Boolean,default:!0},showAxesHelper:{type:Boolean,default:!0},gradientColors:{type:Array,default:()=>["#00008b","#00ffff","#ffff00","#ff0000"]},autoAnimate:{type:Boolean,default:!1},cameraPosition:{type:Object,default:()=>({x:8,y:8,z:8})}},setup(G,{expose:I}){const t=G,m=D(null),d=D({show:!1,x:0,y:0,content:""}),L=D(t.autoAnimate);let c,h,i,g=null,y,b,M,u=null,a=null;const z=[];let o=0,s=0,A;ae(async()=>{ee();const{OrbitControls:e}=await se(async()=>{const{OrbitControls:r}=await import("./OrbitControls.DfyDYf8j.js");return{OrbitControls:r}},__vite__mapDeps([0,1]));t.enableOrbit&&(g=new e(h,i.domElement),g.enableDamping=!0,g.dampingFactor=.05),T(),window.addEventListener("mousemove",X),window.addEventListener("resize",Y),m.value&&m.value.addEventListener("mouseleave",()=>{d.value.show=!1})}),ce(()=>{u&&cancelAnimationFrame(u),window.removeEventListener("mousemove",X),window.removeEventListener("resize",Y),a&&(a.geometry.dispose(),a.material.dispose()),A&&A.dispose(),i==null||i.dispose()});function Z(){console.log("创建十段渐变着色器材质...");const e=[new x(.0314,.1922,.3725),new x(.2706,.5333,.7333),new x(.5216,.7451,.8902),new x(.7451,.8627,.9569),new x(.8941,.8431,.8627),new x(.9882,.8745,.8549),new x(.9765,.7137,.6353),new x(.9765,.4706,.3765),new x(.7843,.0863,.149),new x(.6863,0,.0588)],r=new Ae({uniforms:{color0:{value:e[0]},color1:{value:e[1]},color2:{value:e[2]},color3:{value:e[3]},color4:{value:e[4]},color5:{value:e[5]},color6:{value:e[6]},color7:{value:e[7]},color8:{value:e[8]},color9:{value:e[9]},baseSize:{value:t.baseSize},maxHeight:{value:t.maxHeight}},vertexShader:`
            attribute float instanceValue;
            attribute vec3 instancePosition;
            attribute vec3 instanceScale;

            varying float vValue;
            varying float vHeight;
            varying vec3 vPosition;

            void main() {
                vValue = instanceValue;
                vPosition = position;

                // 计算顶点在柱体中的相对高度 (0到1)
                vHeight = (position.y + 0.5); // 立方体原本y范围是-0.5到0.5

                // 应用实例的缩放和位置
                vec3 transformed = position * instanceScale;
                transformed += instancePosition;

                gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
            }
        `,fragmentShader:`
            uniform vec3 color0;
            uniform vec3 color1;
            uniform vec3 color2;
            uniform vec3 color3;
            uniform vec3 color4;
            uniform vec3 color5;
            uniform vec3 color6;
            uniform vec3 color7;
            uniform vec3 color8;
            uniform vec3 color9;

            varying float vValue;
            varying float vHeight;
            varying vec3 vPosition;

            vec3 getGradientColor(float value, float height) {
                // 根据数值大小决定使用多少段渐变
                if (value < 0.1) {
                    // 第一段：纯颜色
                    return color0;
                } else if (value < 0.2) {
                    // 第二段：2色渐变
                    return mix(color0, color1, height);
                } else if (value < 0.3) {
                    // 第三段：3色渐变
                    if (height < 0.5) {
                        return mix(color0, color1, height / 0.5);
                    } else {
                        return mix(color1, color2, (height - 0.5) / 0.5);
                    }
                } else if (value < 0.4) {
                    // 第四段：4色渐变
                    if (height < 0.33) {
                        return mix(color0, color1, height / 0.33);
                    } else if (height < 0.66) {
                        return mix(color1, color2, (height - 0.33) / 0.33);
                    } else {
                        return mix(color2, color3, (height - 0.66) / 0.34);
                    }
                } else if (value < 0.5) {
                    // 第五段：5色渐变
                    if (height < 0.25) {
                        return mix(color0, color1, height / 0.25);
                    } else if (height < 0.5) {
                        return mix(color1, color2, (height - 0.25) / 0.25);
                    } else if (height < 0.75) {
                        return mix(color2, color3, (height - 0.5) / 0.25);
                    } else {
                        return mix(color3, color4, (height - 0.75) / 0.25);
                    }
                } else if (value < 0.6) {
                    // 第六段：6色渐变
                    if (height < 0.2) {
                        return mix(color0, color1, height / 0.2);
                    } else if (height < 0.4) {
                        return mix(color1, color2, (height - 0.2) / 0.2);
                    } else if (height < 0.6) {
                        return mix(color2, color3, (height - 0.4) / 0.2);
                    } else if (height < 0.8) {
                        return mix(color3, color4, (height - 0.6) / 0.2);
                    } else {
                        return mix(color4, color5, (height - 0.8) / 0.2);
                    }
                } else if (value < 0.7) {
                    // 第七段：7色渐变
                    if (height < 0.1667) {
                        return mix(color0, color1, height / 0.1667);
                    } else if (height < 0.3333) {
                        return mix(color1, color2, (height - 0.1667) / 0.1667);
                    } else if (height < 0.5) {
                        return mix(color2, color3, (height - 0.3333) / 0.1667);
                    } else if (height < 0.6667) {
                        return mix(color3, color4, (height - 0.5) / 0.1667);
                    } else if (height < 0.8333) {
                        return mix(color4, color5, (height - 0.6667) / 0.1667);
                    } else {
                        return mix(color5, color6, (height - 0.8333) / 0.1667);
                    }
                } else if (value < 0.8) {
                    // 第八段：8色渐变
                    if (height < 0.1429) {
                        return mix(color0, color1, height / 0.1429);
                    } else if (height < 0.2857) {
                        return mix(color1, color2, (height - 0.1429) / 0.1429);
                    } else if (height < 0.4286) {
                        return mix(color2, color3, (height - 0.2857) / 0.1429);
                    } else if (height < 0.5714) {
                        return mix(color3, color4, (height - 0.4286) / 0.1429);
                    } else if (height < 0.7143) {
                        return mix(color4, color5, (height - 0.5714) / 0.1429);
                    } else if (height < 0.8571) {
                        return mix(color5, color6, (height - 0.7143) / 0.1429);
                    } else {
                        return mix(color6, color7, (height - 0.8571) / 0.1429);
                    }
                } else if (value < 0.9) {
                    // 第九段：9色渐变
                    if (height < 0.125) {
                        return mix(color0, color1, height / 0.125);
                    } else if (height < 0.25) {
                        return mix(color1, color2, (height - 0.125) / 0.125);
                    } else if (height < 0.375) {
                        return mix(color2, color3, (height - 0.25) / 0.125);
                    } else if (height < 0.5) {
                        return mix(color3, color4, (height - 0.375) / 0.125);
                    } else if (height < 0.625) {
                        return mix(color4, color5, (height - 0.5) / 0.125);
                    } else if (height < 0.75) {
                        return mix(color5, color6, (height - 0.625) / 0.125);
                    } else if (height < 0.875) {
                        return mix(color6, color7, (height - 0.75) / 0.125);
                    } else {
                        return mix(color7, color8, (height - 0.875) / 0.125);
                    }
                } else {
                    // 第十段：10色渐变
                    if (height < 0.1111) {
                        return mix(color0, color1, height / 0.1111);
                    } else if (height < 0.2222) {
                        return mix(color1, color2, (height - 0.1111) / 0.1111);
                    } else if (height < 0.3333) {
                        return mix(color2, color3, (height - 0.2222) / 0.1111);
                    } else if (height < 0.4444) {
                        return mix(color3, color4, (height - 0.3333) / 0.1111);
                    } else if (height < 0.5556) {
                        return mix(color4, color5, (height - 0.4444) / 0.1111);
                    } else if (height < 0.6667) {
                        return mix(color5, color6, (height - 0.5556) / 0.1111);
                    } else if (height < 0.7778) {
                        return mix(color6, color7, (height - 0.6667) / 0.1111);
                    } else if (height < 0.8889) {
                        return mix(color7, color8, (height - 0.7778) / 0.1111);
                    } else {
                        return mix(color8, color9, (height - 0.8889) / 0.1111);
                    }
                }
            }

            void main() {
                // 简单的光照效果
                vec3 lightDir = normalize(vec3(1.0, 2.0, 0.5));
                vec3 normal;

                // 计算法向量
                if (abs(vPosition.y) > 0.49) {
                    normal = vec3(0.0, sign(vPosition.y), 0.0);
                } else if (abs(vPosition.x) > 0.49) {
                    normal = vec3(sign(vPosition.x), 0.0, 0.0);
                } else {
                    normal = vec3(0.0, 0.0, sign(vPosition.z));
                }

                float diffuse = max(dot(normal, lightDir), 0.3);

                // 顶部更亮
                float topBrightness = vPosition.y > 0.4 ? 1.2 : 1.0;

                // 获取渐变颜色
                vec3 gradientColor = getGradientColor(vValue, vHeight);

                gl_FragColor = vec4(gradientColor * diffuse * topBrightness, 1.0);
            }
        `,transparent:!1});return console.log("十段渐变着色器材质创建完成"),r}function ee(){console.log("初始化 Three.js...");const{backgroundColor:e,showGridHelper:r,showAxesHelper:l,cameraPosition:n,enableOrbit:v}=t;c=new ge,c.background=new de(e),console.log("场景创建完成，背景色:",e),h=new ve(75,t.width/t.height,.1,1e3),h.position.set(n.x,n.y,n.z),console.log("相机创建完成，位置:",n),i=new pe({antialias:!0,powerPreference:"high-performance"}),i.setSize(t.width,t.height),i.setPixelRatio(Math.min(window.devicePixelRatio,2)),console.log("渲染器创建完成，尺寸:",t.width,"x",t.height),m.value&&(m.value.innerHTML="",m.value.appendChild(i.domElement),console.log("渲染器DOM添加到容器"));const H=new xe(16777215,.8);c.add(H);const C=new we(16777215,.8);C.position.set(5,10,5),c.add(C),console.log("光源设置完成"),y=new ye,c.add(y),console.log("热力图组创建完成"),b=new He,M=new ze,R(),console.log("Three.js 初始化完成")}function oe(){return new Pe(1,1,1,1,8,1)}function R(){var J;console.log("开始创建热力图..."),a&&(y.remove(a),a.geometry.dispose(),a.material.dispose(),a=null,console.log("清理旧的热力图实例")),z.length=0;let e=t.data;Array.isArray(e)&&e.length>0&&e.every(f=>Array.isArray(f)&&f.length>0)||(console.log("使用默认测试数据"),e=[[1,3,5,7,9],[2,4,6,8,10],[3,5,7,9,11],[4,6,8,10,12],[5,7,9,11,13]]),o=e.length,s=((J=e[0])==null?void 0:J.length)||0,console.log(`网格尺寸: ${o} x ${s}`,"数据:",e);let l=1/0,n=-1/0;for(let f=0;f<o;f++){const S=e[f];if(Array.isArray(S))for(let p=0;p<s;p++){const _=S[p];typeof _=="number"&&(_<l&&(l=_),_>n&&(n=_))}}l===1/0&&(l=0),n===-1/0&&(n=1),l===n&&(n=l+1),console.log(`数据范围: ${l} - ${n}`),A=Z();const v=oe(),H=o*s,C=new Float32Array(H),j=new Float32Array(H*3),F=new Float32Array(H*3);let w=0;for(let f=0;f<o;f++){const S=e[f];if(Array.isArray(S))for(let p=0;p<s;p++){const _=typeof S[p]=="number"?S[p]:0,$=(_-l)/(n-l),q=.1+$*t.maxHeight;C[w]=$;const ie=(f-(o-1)/2)*t.baseSize,re=(p-(s-1)/2)*t.baseSize,ne=q/2;j[w*3]=ie,j[w*3+1]=ne,j[w*3+2]=re,F[w*3]=t.baseSize,F[w*3+1]=q,F[w*3+2]=t.baseSize,z[w]={value:_,x:f,z:p,normalizedValue:$},w++}}console.log(`创建 ${H} 个实例`),v.setAttribute("instanceValue",new k(C,1)),v.setAttribute("instancePosition",new k(j,3)),v.setAttribute("instanceScale",new k(F,3)),a=new _e(v,A,H),y.add(a),te(),console.log("热力图创建完成")}let P=null,V=null;function te(){P&&(c.remove(P),P=null),V&&(c.remove(V),V=null);const{showGridHelper:e,showAxesHelper:r}=t;if(e){const l=Math.max(o,s)*t.baseSize*1.5,n=Math.max(o,s);P=new be(l,n,16777215,8947848),P.position.y=-.01,c.add(P)}if(r){const l=Math.max(o,s)*t.baseSize*.8;V=new Me(l),c.add(V)}}function T(){u=requestAnimationFrame(T),g&&g.update(),i.render(c,h)}let E=null;function X(e){if(!m.value||!a)return;const r=m.value.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY<r.bottom){d.value.show=!1;return}E&&cancelAnimationFrame(E),E=requestAnimationFrame(()=>{M.x=(e.clientX-r.left)/r.width*2-1,M.y=-((e.clientY-r.top)/r.height)*2+1,b.setFromCamera(M,h);const l=b.intersectObject(a);if(l.length>0){const n=l[0].instanceId;if(n!==void 0&&z[n]){const v=z[n];d.value={show:!0,x:e.clientX-r.left+10,y:e.clientY-r.top-30,content:`数值: ${v.value.toFixed(2)}<br>位置: (${v.x}, ${v.z})<br>高度: ${(v.normalizedValue*100).toFixed(1)}%`}}}else d.value.show=!1})}function Y(){!h||!i||(h.aspect=t.width/t.height,h.updateProjectionMatrix(),i.setSize(t.width,t.height))}return I({refresh:R,toggleAnimation:()=>L.value=!L.value,updateData:e=>{R()}}),(e,r)=>(O(),N("div",{class:"heatmap-wrapper",style:U({width:G.width+"px",height:G.height+"px"})},[B(d).show?(O(),N("div",{key:0,class:"tooltip",style:U({left:B(d).x+"px",top:B(d).y+"px"}),innerHTML:B(d).content},null,12,Ve)):he("",!0),Q("div",{ref_key:"containerRef",ref:m,class:"three-container"},null,512)],4))}}),Be=ue(Ce,[["__scopeId","data-v-6542bd7e"]]),De={style:{"margin-top":"10px"}},Ge=K({name:"JBHeatMap2",__name:"BasicsHeatMap",setup(G){const I=D(null);function t(c,h){const i=c*h,g=Math.round(i*.02),y=Math.round(i*.2),b=Math.round(i*.3),M=i-g-y-b;console.log({total:i,"40-50":g,"20-30":y,"10-20":b,"1-5":M});const u=[];for(let o=0;o<g;o++)u.push(Math.floor(Math.random()*11)+40);for(let o=0;o<y;o++)u.push(Math.floor(Math.random()*11)+20);for(let o=0;o<b;o++)u.push(Math.floor(Math.random()*11)+10);for(let o=0;o<M;o++)u.push(Math.floor(Math.random()*5)+1);for(let o=u.length-1;o>0;o--){const s=Math.floor(Math.random()*(o+1));[u[o],u[s]]=[u[s],u[o]]}const a=[];let z=0;for(let o=0;o<c;o++){const s=[];for(let A=0;A<h;A++)s.push(u[z++]);a.push(s)}return a}const m=D(t(100,200));function d(){m.value=t(100,200),I.value.refresh()}function L(){console.log("热力图已刷新")}return(c,h)=>{const i=Be,g=le;return O(),N("div",null,[W(i,{ref_key:"heatmap3D",ref:I,cameraPosition:{x:18,y:18,z:0},data:B(m),width:"675",height:"475","base-size":"0.5","max-height":"5","auto-animate":!0,onRefresh:L},null,8,["data"]),Q("div",De,[W(g,{onClick:d},{default:fe(()=>[...h[0]||(h[0]=[me("刷新热力图",-1)])]),_:1})])])}}}),Re=Se(Ge);export{Re as JBHeatMap2};
