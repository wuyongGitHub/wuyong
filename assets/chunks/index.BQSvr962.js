const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/OrbitControls.DfyDYf8j.js","assets/chunks/three.module.CjLKN4l_.js"])))=>i.map(i=>d[i]);
import{_ as L,p as H,v as U,V as $,x as J,c as Q,j as I,o as ee}from"./framework.Gi3K-aNU.js";import{S as oe,P as te,V as ie,W as ne,a as re,b as f,M as se,B,c as w,A as q,d as V,C as ae}from"./three.module.CjLKN4l_.js";import{w as ce}from"./tool.D1yyrI_Z.js";const ve={class:"wrapper"},le=Object.assign({name:"WyBasicsDocsImage"},{__name:"BasicsDocImage",setup(pe){let y=0;const t=H();return U(async()=>{var A,j,F;const{OrbitControls:g}=await $(async()=>{const{OrbitControls:e}=await import("./OrbitControls.DfyDYf8j.js");return{OrbitControls:e}},__vite__mapDeps([0,1])),s=(A=t.value)==null?void 0:A.clientWidth,h=(j=t.value)==null?void 0:j.clientHeight,v=new oe,i=new te(75,s/h,.001,1e3);i.position.set(0,0,4),i.lookAt(new ie);const n=new ne({antialias:!0,alpha:!0});n.setPixelRatio(2),n.setSize(s,h),(F=t.value)==null||F.appendChild(n.domElement);const r=new g(i,n.domElement);r.enableDamping=!0,r.dampingFactor=.05,r.rotateSpeed=.5,r.zoomSpeed=.8,r.enablePan=!1;const D=new re(1,200,200),E=`
  uniform float uTime;

  varying vec3 vColor;
  varying vec3 vNormal;

  
//	Simplex 4D Noise
//	by Ian McEwan, Ashima Arts
vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
float permute(float x){return floor(mod(((x*34.0)+1.0)*x, 289.0));}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
float taylorInvSqrt(float r){return 1.79284291400159 - 0.85373472095314 * r;}

vec4 grad4(float j, vec4 ip){
const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);
vec4 p,s;

p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;
p.w = 1.5 - dot(abs(p.xyz), ones.xyz);
s = vec4(lessThan(p, vec4(0.0)));
p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www;

return p;
}

float snoise(vec4 v){
const vec2  C = vec2( 0.138196601125010504,  // (5 - sqrt(5))/20  G4
                      0.309016994374947451); // (sqrt(5) - 1)/4   F4
// First corner
vec4 i  = floor(v + dot(v, C.yyyy) );
vec4 x0 = v -   i + dot(i, C.xxxx);

// Other corners

// Rank sorting originally contributed by Bill Licea-Kane, AMD (formerly ATI)
vec4 i0;

vec3 isX = step( x0.yzw, x0.xxx );
vec3 isYZ = step( x0.zww, x0.yyz );
//  i0.x = dot( isX, vec3( 1.0 ) );
i0.x = isX.x + isX.y + isX.z;
i0.yzw = 1.0 - isX;

//  i0.y += dot( isYZ.xy, vec2( 1.0 ) );
i0.y += isYZ.x + isYZ.y;
i0.zw += 1.0 - isYZ.xy;

i0.z += isYZ.z;
i0.w += 1.0 - isYZ.z;

// i0 now contains the unique values 0,1,2,3 in each channel
vec4 i3 = clamp( i0, 0.0, 1.0 );
vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );
vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );

//  x0 = x0 - 0.0 + 0.0 * C
vec4 x1 = x0 - i1 + 1.0 * C.xxxx;
vec4 x2 = x0 - i2 + 2.0 * C.xxxx;
vec4 x3 = x0 - i3 + 3.0 * C.xxxx;
vec4 x4 = x0 - 1.0 + 4.0 * C.xxxx;

// Permutations
i = mod(i, 289.0);
float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);
vec4 j1 = permute( permute( permute( permute (
            i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))
          + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))
          + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))
          + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));
// Gradients
// ( 7*7*6 points uniformly over a cube, mapped onto a 4-octahedron.)
// 7*7*6 = 294, which is close to the ring size 17*17 = 289.

vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;

vec4 p0 = grad4(j0,   ip);
vec4 p1 = grad4(j1.x, ip);
vec4 p2 = grad4(j1.y, ip);
vec4 p3 = grad4(j1.z, ip);
vec4 p4 = grad4(j1.w, ip);

// Normalise gradients
vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
p0 *= norm.x;
p1 *= norm.y;
p2 *= norm.z;
p3 *= norm.w;
p4 *= taylorInvSqrt(dot(p4,p4));

// Mix contributions from the five corners
vec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);
vec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4)            ), 0.0);
m0 = m0 * m0;
m1 = m1 * m1;
return 49.0 * ( dot(m0*m0, vec3( dot( p0, x0 ), dot( p1, x1 ), dot( p2, x2 )))
              + dot(m1*m1, vec2( dot( p3, x3 ), dot( p4, x4 ) ) ) ) ;
}


  // https://gist.github.com/983/e170a24ae8eba2cd174f
vec3 hsv2rgb(vec3 c) {
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

  void main() {
    vNormal = normal;

    // float noise = snoise(vec4(position * 10.0, 0.0));
    float noise = snoise(vec4(position * 10.0, uTime * 0.2));

    // vColor = vec3(noise);
    // vColor = vec3(noise, 0.0, 0.0);
    // vColor = hsv2rgb(vec3(noise, 1.0, 1.0));
    // vColor = hsv2rgb(vec3(noise * 0.1, 1.0, 1.0));
    vColor = hsv2rgb(vec3(noise * 0.1 + 0.04, 0.8, 1.0));

    vec3 newPos = position + 0.8 * normal * noise;

    // gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.0);
  }
`,G=`
varying vec3 vColor;
varying vec3 vNormal;

void main() {
  gl_FragColor = vec4(vec3(1.0), 1.0);
  gl_FragColor = vec4(vNormal, 1.0);
  gl_FragColor = vec4(vColor, 1.0);
}
`,z=new f({vertexShader:E,fragmentShader:G,uniforms:{uTime:{value:0}}}),N=new se(D,z);v.add(N);const k=`
  uniform float uTime;

  void main() {
    vec3 newPos = position;
    newPos.y += 0.1 * sin(newPos.y * 6.0 + uTime);
    newPos.z += 0.05 * sin(newPos.y * 10.0 + uTime);
    vec4 mvPosition = modelViewMatrix * vec4(newPos, 1.0);
    gl_PointSize = 6.0 / -mvPosition.z; // 3.5 6.0
    gl_Position = projectionMatrix * mvPosition;
  }
`,Y=`
  void main() {
    gl_FragColor = vec4(vec3(1.0), 0.6);
  }
`,P=new B,p=1e4,l=new Float32Array(p*3),Z=Math.PI*(3-Math.sqrt(5)),_=2/p,x=2;for(let e=0;e<p;e++){const o=e*_-1+_/2,a=Math.sqrt(1-o*o),c=e*Z;l[3*e]=x*Math.cos(c)*a,l[3*e+1]=x*o,l[3*e+2]=x*Math.sin(c)*a}P.setAttribute("position",new w(l,3));const C=new f({vertexShader:k,fragmentShader:Y,uniforms:{uTime:{value:0}},transparent:!0,blending:q}),M=new V(P,C);v.add(M);const d=new B,u=500,m=new Float32Array(u*3),b=new Float32Array(u);for(let e=0;e<u;e++){const o=Math.random()*5+5;m[e*3+0]=(Math.random()-.5)*o,m[e*3+1]=(Math.random()-.5)*o,m[e*3+2]=(Math.random()-.5)*o,b[e]=Math.random()+.4}d.setAttribute("position",new w(m,3)),d.setAttribute("aSize",new w(b,1));const K=`
  uniform float uTime;
  attribute float aSize;

  void main() {
      vec3 newPos = position;
      newPos.y += sin(uTime * 0.5 + newPos.x * 100.0) * aSize * 0.2;
      newPos.x += sin(uTime * 0.5 + newPos.x * 200.0) * aSize * 0.1;
      vec4 mvPosition = modelViewMatrix * vec4(newPos, 1.0);
      gl_PointSize = 40.0 * aSize / -mvPosition.z; // 70 30 50
      gl_Position = projectionMatrix * mvPosition;
  }
`,R=`
  void main() {
    float d = length(gl_PointCoord - vec2(0.5));
    float strength = clamp(0.05 / d - 0.05 * 2.0, 0.0, 1.0);
    gl_FragColor = vec4(vec3(1.0), strength);
}
`,S=new f({uniforms:{uTime:{value:0}},vertexShader:K,fragmentShader:R,transparent:!0,blending:q,depthWrite:!1}),W=new V(d,S);v.add(W);const X=new ae;function T(){const e=X.getElapsedTime();z.uniforms.uTime.value=e,C.uniforms.uTime.value=e,M.rotation.y=e*.1,S.uniforms.uTime.value=e,r.update(),n.render(v,i),y=requestAnimationFrame(T)}T();function O(){var a,c;const e=(a=t.value)==null?void 0:a.clientWidth,o=(c=t.value)==null?void 0:c.clientHeight;n.setSize(e,o),i.aspect=e/o,i.updateProjectionMatrix()}window.addEventListener("resize",O)}),J(()=>{cancelAnimationFrame(y)}),(g,s)=>(ee(),Q("div",ve,[s[0]||(s[0]=I("div",{class:"bg"},null,-1)),I("div",{class:"container",ref_key:"domRef",ref:t},null,512)]))}}),me=L(le,[["__scopeId","data-v-ce638678"]]),we=ce(me);export{we as BqBasicsDocsImage};
