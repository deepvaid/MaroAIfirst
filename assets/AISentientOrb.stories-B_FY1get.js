import{_ as _e}from"./preload-helper-PPVm8Dsz.js";import{U as Ie,ax as ke,ay as Ce,a3 as Oe,r as Te,a1 as Le}from"./iframe-DScATqdl.js";import{_ as Be}from"./_plugin-vue_export-helper-DlAUqK2U.js";const ye=`
  varying vec3 vNormal;
  varying vec3 vView;
  varying vec3 vPos;
  void main() {
    vPos = position;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vNormal = normalize(normalMatrix * normal);
    vView = normalize(-mv.xyz);
    gl_Position = projectionMatrix * mv;
  }
`,Ee=`
  uniform float uTime;
  uniform float uIntensity;
  uniform vec3 uDeep;
  uniform vec3 uBright;
  varying vec3 vNormal;
  varying vec3 vView;
  varying vec3 vPos;
  void main() {
    float facing = clamp(dot(normalize(vNormal), normalize(vView)), 0.0, 1.0);
    float center = pow(facing, 1.6);
    // A slow flowing band evokes the swirling "thinking" energy in the core.
    float flow = 0.5 + 0.5 * sin(vPos.y * 3.2 + sin(vPos.x * 2.0 + uTime * 0.8) + uTime * 1.1);
    vec3 col = mix(uDeep, uBright, center);
    col += uBright * flow * 0.18 * center;
    float alpha = center * uIntensity;
    gl_FragColor = vec4(col * uIntensity, alpha);
  }
`,Re=`
  uniform float uTime;
  uniform float uRim;
  uniform vec3 uBody;
  uniform vec3 uEdge;
  varying vec3 vNormal;
  varying vec3 vView;
  varying vec3 vPos;
  void main() {
    float fres = pow(1.0 - clamp(dot(normalize(vNormal), normalize(vView)), 0.0, 1.0), 2.6);
    float body = 0.08 + 0.05 * (0.5 + 0.5 * sin(vPos.y * 2.0 + uTime * 0.5));
    vec3 col = mix(uBody, uEdge, fres);
    float alpha = body + fres * 0.9 * uRim;
    gl_FragColor = vec4(col, clamp(alpha, 0.0, 1.0));
  }
`,ze=`
  attribute float aScale;
  attribute float aPhase;
  attribute float aMix;
  uniform float uTime;
  uniform float uSizeScale;
  uniform float uViewHeight;
  varying float vTw;
  varying float vMix;
  void main() {
    vMix = aMix;
    float tw = 0.55 + 0.45 * sin(uTime * 1.8 + aPhase);
    vTw = tw;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = aScale * uSizeScale * tw * (uViewHeight / max(-mv.z, 0.001));
    gl_Position = projectionMatrix * mv;
  }
`,Ge=`
  uniform float uOpacity;
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  varying float vTw;
  varying float vMix;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    float a = smoothstep(0.5, 0.0, d);
    vec3 col = mix(uColorA, uColorB, vMix);
    gl_FragColor = vec4(col, a * vTw * uOpacity);
  }
`,Ve=`
  attribute float aScale;
  attribute float aPhase;
  uniform float uTime;
  uniform float uSizeScale;
  uniform float uViewHeight;
  varying float vTw;
  void main() {
    float tw = pow(0.5 + 0.5 * sin(uTime * 3.0 + aPhase), 2.0);
    vTw = tw;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = aScale * uSizeScale * (0.4 + tw) * (uViewHeight / max(-mv.z, 0.001));
    gl_Position = projectionMatrix * mv;
  }
`,Fe=`
  uniform float uOpacity;
  uniform vec3 uColor;
  varying float vTw;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    float a = smoothstep(0.5, 0.0, d);
    gl_FragColor = vec4(uColor, a * vTw * uOpacity);
  }
`,xe=Ie({__name:"AISentientOrb",props:{state:{default:"idle"},audioLevel:{default:0}},setup(F){const S=F,w=Te(null);let l=null,p=0,I=null,b=null,m=[];function N(t,u){return t+Math.random()*(u-t)}return ke(async()=>{if(!w.value)return;const t=await _e(()=>import("./three.module--MGUDD-H.js"),[],import.meta.url),u=window.matchMedia("(prefers-reduced-motion: reduce)").matches,y=u?.4:1,M=new t.Scene,v=new t.PerspectiveCamera(45,1,.1,100);v.position.z=6,l=new t.WebGLRenderer({alpha:!0,antialias:!0}),l.setPixelRatio(Math.min(window.devicePixelRatio,2)),l.setClearColor(0,0),w.value.appendChild(l.domElement);const k=document.createElement("canvas");k.width=256,k.height=256;const C=k.getContext("2d");if(C){const e=C.createRadialGradient(128,128,0,128,128,128);e.addColorStop(0,"rgba(160, 205, 255, 0.9)"),e.addColorStop(.4,"rgba(95, 150, 255, 0.32)"),e.addColorStop(1,"rgba(95, 150, 255, 0)"),C.fillStyle=e,C.fillRect(0,0,256,256)}const U=new t.CanvasTexture(k);U.colorSpace=t.SRGBColorSpace;const H=new t.SpriteMaterial({map:U,blending:t.AdditiveBlending,transparent:!0,depthWrite:!1,opacity:.2}),A=new t.Sprite(H),Q=4.6;A.scale.setScalar(Q),A.position.z=-.5,A.renderOrder=0,M.add(A),m.push(U,H);const P=new t.Group;M.add(P);const W={uTime:{value:0},uIntensity:{value:.85},uDeep:{value:new t.Color(1863167)},uBright:{value:new t.Color(13099775)}},ee=new t.SphereGeometry(.62,u?32:48,u?32:48),te=new t.ShaderMaterial({uniforms:W,vertexShader:ye,fragmentShader:Ee,transparent:!0,depthWrite:!1,blending:t.AdditiveBlending}),ae=new t.Mesh(ee,te);ae.renderOrder=1,P.add(ae),m.push(ee,te);const j={uTime:{value:0},uRim:{value:.8},uBody:{value:new t.Color(7314431)},uEdge:{value:new t.Color(16777215)}},ne=new t.SphereGeometry(1,u?40:64,u?40:64),ie=new t.ShaderMaterial({uniforms:j,vertexShader:ye,fragmentShader:Re,transparent:!0,depthWrite:!1}),re=new t.Mesh(ne,ie);re.renderOrder=3,P.add(re),m.push(ne,ie);const x=u?360:620,O=new Float32Array(x*3),oe=new Float32Array(x),D=new Float32Array(x),se=new Float32Array(x),le=.92,ce=[];for(let e=0;e<x;e+=1){const i=le*Math.cbrt(Math.random()),r=Math.random()*Math.PI*2,c=Math.acos(2*Math.random()-1),h=i*Math.sin(c)*Math.cos(r),f=i*Math.sin(c)*Math.sin(r),s=i*Math.cos(c)*.6;O[e*3]=h,O[e*3+1]=s,O[e*3+2]=f,oe[e]=N(.5,1.6),D[e]=Math.random()*Math.PI*2,se[e]=Math.random(),ce.push({ang0:Math.atan2(f,h),rxz:Math.hypot(h,f),y0:s,ph:D[e]??0,rNorm:i/le})}const g=new t.BufferGeometry;g.setAttribute("position",new t.BufferAttribute(O,3)),g.setAttribute("aScale",new t.BufferAttribute(oe,1)),g.setAttribute("aPhase",new t.BufferAttribute(D,1)),g.setAttribute("aMix",new t.BufferAttribute(se,1));const T={uTime:{value:0},uOpacity:{value:.5},uSizeScale:{value:.085},uViewHeight:{value:600},uColorA:{value:new t.Color(14347519)},uColorB:{value:new t.Color(47092)}},ue=new t.ShaderMaterial({uniforms:T,vertexShader:ze,fragmentShader:Ge,transparent:!0,depthWrite:!1,blending:t.AdditiveBlending}),q=new t.Points(g,ue);q.frustumCulled=!1,q.renderOrder=2,P.add(q);const de=g.getAttribute("position");m.push(g,ue);const pe=new t.Group;M.add(pe);const $=u?96:160,L=new Float32Array($*3);for(let e=0;e<$;e+=1){const i=e/$*Math.PI*2;L[e*3]=Math.cos(i),L[e*3+1]=Math.sin(i),L[e*3+2]=0}const K=new t.BufferGeometry;K.setAttribute("position",new t.BufferAttribute(L,3)),m.push(K);const me=[{color:12576511,opacity:.34,radius:1.32,tilt:[1.2,.2,0],axis:[1,0,0],speed:.0042},{color:15398143,opacity:.22,radius:1.5,tilt:[.4,0,.9],axis:[0,1,0],speed:.0028},{color:10475775,opacity:.18,radius:1.18,tilt:[-.6,.5,.3],axis:[.6,.6,0],speed:.0035}].map(e=>{const i=new t.LineBasicMaterial({color:e.color,transparent:!0,opacity:e.opacity,blending:t.AdditiveBlending,depthWrite:!1}),r=new t.LineLoop(K,i);return r.rotation.set(e.tilt[0]??0,e.tilt[1]??0,e.tilt[2]??0),r.scale.setScalar(e.radius),r.renderOrder=3,pe.add(r),m.push(i),{loop:r,axis:new t.Vector3(e.axis[0],e.axis[1],e.axis[2]).normalize(),speed:e.speed,radius:e.radius}}),B=u?40:70,E=new Float32Array(B*3),fe=new Float32Array(B),ve=new Float32Array(B);for(let e=0;e<B;e+=1){const i=N(1.05,1.7),r=Math.random()*Math.PI*2,c=Math.acos(2*Math.random()-1);E[e*3]=i*Math.sin(c)*Math.cos(r),E[e*3+1]=i*Math.cos(c)*.7,E[e*3+2]=i*Math.sin(c)*Math.sin(r),fe[e]=N(.6,1.4),ve[e]=Math.random()*Math.PI*2}const _=new t.BufferGeometry;_.setAttribute("position",new t.BufferAttribute(E,3)),_.setAttribute("aScale",new t.BufferAttribute(fe,1)),_.setAttribute("aPhase",new t.BufferAttribute(ve,1));const R={uTime:{value:0},uOpacity:{value:.2},uSizeScale:{value:.11},uViewHeight:{value:600},uColor:{value:new t.Color(15398655)}},he=new t.ShaderMaterial({uniforms:R,vertexShader:Ve,fragmentShader:Fe,transparent:!0,depthWrite:!1,blending:t.AdditiveBlending}),X=new t.Points(_,he);X.frustumCulled=!1,X.renderOrder=4,M.add(X),m.push(_,he);const n={scale:1,core:.85,halo:.7,flow:.55,swirl:.18,ring:.5,sparkle:.18,ripple:0},a={...n};function be(){const e=Math.min(Math.max(S.audioLevel,0),1);switch(S.state){case"listening":a.scale=1.05+e*.06,a.core=1+e*.45,a.halo=.95+e*.5,a.flow=1.1+e*.7,a.swirl=.35,a.ring=.85+e*.4,a.sparkle=.35,a.ripple=0;break;case"thinking":a.scale=1.02,a.core=1.05,a.halo=.85,a.flow=1.6,a.swirl=1,a.ring=1.5,a.sparkle=.95,a.ripple=0;break;case"speaking":a.scale=1.04+e*.1,a.core=1.1+e*.5,a.halo=1+e*.5,a.flow=1.25+e*.5,a.swirl=.4,a.ring=1.05,a.sparkle=.45,a.ripple=.6+e*.6;break;default:a.scale=1,a.core=.85,a.halo=.7,a.flow=.55,a.swirl=.18,a.ring=.5,a.sparkle=.18,a.ripple=0}}function ge(){if(!w.value||!l)return;const e=w.value.getBoundingClientRect(),i=Math.max(1,e.width),r=Math.max(1,e.height);l.setSize(i,r,!1),v.aspect=i/r;const c=v.fov*Math.PI/180,h=Math.tan(c/2),f=1.95,s=.82;v.position.z=v.aspect<1?f/(s*h*v.aspect):f/(s*h),v.updateProjectionMatrix();const o=r*l.getPixelRatio();T.uViewHeight.value=o,R.uViewHeight.value=o}I=new ResizeObserver(()=>ge()),I.observe(w.value),ge();let d=0,we=0;const Y=()=>{if(!l)return;d+=.0166*y,be();const e=.06;n.scale+=(a.scale-n.scale)*e,n.core+=(a.core-n.core)*e,n.halo+=(a.halo-n.halo)*e,n.flow+=(a.flow-n.flow)*e,n.swirl+=(a.swirl-n.swirl)*e,n.ring+=(a.ring-n.ring)*e,n.sparkle+=(a.sparkle-n.sparkle)*e,n.ripple+=(a.ripple-n.ripple)*e;const i=Math.min(Math.max(S.audioLevel,0),1),r=S.state==="speaking";let c=Math.sin(d*.6)*.018;r&&(c+=Math.sin(d*7.5)*.05*i),P.scale.setScalar(n.scale*(1+c*y));const h=r?Math.sin(d*20)*.07*i*y:0;W.uTime.value=d,W.uIntensity.value=n.core+h,j.uTime.value=d,j.uRim.value=.7+n.core*.25,we+=(.05+n.flow*.06+n.swirl*.12)*y;for(let s=0;s<x;s+=1){const o=ce[s];if(!o)continue;const z=o.ang0+we*(1-.4*o.rNorm),Z=1+Math.sin(d*.7+o.ph)*.05,Me=Math.cos(z)*o.rxz*Z,Ae=Math.sin(z)*o.rxz*Z,Pe=o.y0*Z+Math.sin(d*.9+o.ph)*.04;de.setXYZ(s,Me,Pe,Ae)}de.needsUpdate=!0,T.uTime.value=d,T.uOpacity.value=.4+n.core*.22,R.uTime.value=d,R.uOpacity.value=n.sparkle*.7;for(let s=0;s<me.length;s+=1){const o=me[s];if(!o)continue;o.loop.rotateOnWorldAxis(o.axis,o.speed*n.ring*y);const z=1+Math.sin(d*3-s*.7)*.06*n.ripple;o.loop.scale.setScalar(o.radius*z)}const f=S.state==="listening"||r?i*.25:0;H.opacity=Math.min(.55,.16+n.halo*.16+f*y),A.scale.setScalar(Q*(1+(n.halo-.7)*.08+f*.15)),l.render(M,v),p=window.requestAnimationFrame(Y)};b=()=>{document.hidden?(p&&window.cancelAnimationFrame(p),p=0):!p&&l&&(p=window.requestAnimationFrame(Y))},document.addEventListener("visibilitychange",b),Y()}),Ce(()=>{p&&window.cancelAnimationFrame(p),p=0,b&&document.removeEventListener("visibilitychange",b),b=null,I?.disconnect(),I=null;for(const t of m)t.dispose();m=[],l?.dispose(),l?.domElement.remove(),l=null}),(t,u)=>(Le(),Oe("div",{ref_key:"container",ref:w,class:"ai-sentient-orb","aria-hidden":"true"},null,512))}}),J=Be(xe,[["__scopeId","data-v-8149339d"]]);xe.__docgenInfo={exportName:"default",displayName:"AISentientOrb",description:"",tags:{},props:[{name:"state",required:!1,type:{name:"AISentientOrbState"},defaultValue:{func:!1,value:"'idle'"}},{name:"audioLevel",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}}],sourceFiles:["/home/runner/work/MaroAIfirst/MaroAIfirst/src/features/ai-assistant/components/AISentientOrb.vue"]};const Se="min-height: 420px; display: flex; align-items: center; justify-content: center; padding: 48px; background: radial-gradient(120% 120% at 50% 30%, #ffffff 0%, #eef4ff 45%, #dbe7ff 100%);",je={title:"AI Assistant/AISentientOrb",component:J,tags:["autodocs"],argTypes:{state:{control:"select",options:["idle","listening","thinking","speaking"],description:"Drives the orb animation. Transitions are smoothly interpolated."},audioLevel:{control:{type:"range",min:0,max:1,step:.01},description:"Audio amplitude (0–1). Pulses the halo/core during listening & speaking."}},parameters:{docs:{description:{component:`
### Overview
\`AISentientOrb\` is a lightweight, transparent Three.js orb for the AI assistant surface — a glowing blue core inside a glass-like Fresnel shell, with an inner particle flow, thin orbit rings, gentle sparkles, and a soft outer halo. It is built to blend into a pale-blue background.

### Layers
- **Glass shell** — Fresnel-rim \`ShaderMaterial\` (translucent body + bright white edge).
- **Blue core** — additive \`ShaderMaterial\` with a slow flowing energy band.
- **Particle core** — 360–620 additive points in coherent differential rotation.
- **Orbit rings** — three thin \`LineLoop\`s tumbling on different axes.
- **Halo** — additive radial-gradient sprite.

### States
- **idle** — slow breathing pulse + gentle drift.
- **listening** — scales up, faster particles, halo/rings pulse with \`audioLevel\`.
- **thinking** — particles swirl, rings spin faster, sparkles brighten.
- **speaking** — amplitude pulse from \`audioLevel\`, rings ripple outward, core flickers softly.

### Notes
- Canvas is transparent and \`pointer-events: none\`.
- Single \`requestAnimationFrame\` loop, paused when the tab is hidden, and respects \`prefers-reduced-motion\`.
        `}}}},G={args:{state:"idle",audioLevel:.5},render:F=>({components:{AISentientOrb:J},setup(){return{args:F}},template:`<div style="${Se}"><AISentientOrb v-bind="args" /></div>`})},V={render:()=>({components:{AISentientOrb:J},template:`
      <div style="${Se} gap: 8px; flex-wrap: wrap;">
        <div style="display:flex; flex-direction:column; align-items:center; gap:12px;">
          <AISentientOrb state="idle" :audioLevel="0" />
          <span style="font: 600 13px/1 Inter, sans-serif; color:#475569;">idle</span>
        </div>
        <div style="display:flex; flex-direction:column; align-items:center; gap:12px;">
          <AISentientOrb state="listening" :audioLevel="0.6" />
          <span style="font: 600 13px/1 Inter, sans-serif; color:#475569;">listening</span>
        </div>
        <div style="display:flex; flex-direction:column; align-items:center; gap:12px;">
          <AISentientOrb state="thinking" :audioLevel="0" />
          <span style="font: 600 13px/1 Inter, sans-serif; color:#475569;">thinking</span>
        </div>
        <div style="display:flex; flex-direction:column; align-items:center; gap:12px;">
          <AISentientOrb state="speaking" :audioLevel="0.7" />
          <span style="font: 600 13px/1 Inter, sans-serif; color:#475569;">speaking</span>
        </div>
      </div>
    `})};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'idle',
    audioLevel: 0.5
  },
  render: args => ({
    components: {
      AISentientOrb
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div style="\${PALE_BLUE_BG}"><AISentientOrb v-bind="args" /></div>\`
  })
}`,...G.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      AISentientOrb
    },
    template: \`
      <div style="\${PALE_BLUE_BG} gap: 8px; flex-wrap: wrap;">
        <div style="display:flex; flex-direction:column; align-items:center; gap:12px;">
          <AISentientOrb state="idle" :audioLevel="0" />
          <span style="font: 600 13px/1 Inter, sans-serif; color:#475569;">idle</span>
        </div>
        <div style="display:flex; flex-direction:column; align-items:center; gap:12px;">
          <AISentientOrb state="listening" :audioLevel="0.6" />
          <span style="font: 600 13px/1 Inter, sans-serif; color:#475569;">listening</span>
        </div>
        <div style="display:flex; flex-direction:column; align-items:center; gap:12px;">
          <AISentientOrb state="thinking" :audioLevel="0" />
          <span style="font: 600 13px/1 Inter, sans-serif; color:#475569;">thinking</span>
        </div>
        <div style="display:flex; flex-direction:column; align-items:center; gap:12px;">
          <AISentientOrb state="speaking" :audioLevel="0.7" />
          <span style="font: 600 13px/1 Inter, sans-serif; color:#475569;">speaking</span>
        </div>
      </div>
    \`
  })
}`,...V.parameters?.docs?.source}}};const De=["Playground","AllStates"];export{V as AllStates,G as Playground,De as __namedExportsOrder,je as default};
