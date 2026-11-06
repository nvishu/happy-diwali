/* ====== EDIT THIS SECTION ====== */
const CONFIG = {
  from: "Nishant",
  song: "data/song.mp3",            // upload your song here
  slides: [
    { emoji:"🤝", title:"For My Dost", photo:"data/dost.jpg",
      text:"Dost, you make every day brighter than a thousand diyas. Wishing you a Diwali full of laughter, mithai and endless masti. Shubh Deepavali!" },
    { emoji:"🌸", title:"For My Sis", photo:"data/sis.jpg",
      text:"Sis, you are the light of my life. May Maa Lakshmi fill your home with joy, success and sweet moments. Happy Diwali!" },
    { emoji:"💪", title:"For My Bro", photo:"data/bro.jpg",
      text:"Bro, you are my strength and my best support. May this Diwali bring you big wins and bigger smiles. Happy Diwali!" },
    { emoji:"💼", title:"Dear Colleagues", photo:"data/team.jpg",
      text:"To my amazing team and colleagues: thank you for every jobs-done, every late night and every smile. May your life run without failures, only success. Happy Diwali!" },
    { type:"gallery", emoji:"📸", title:"Our Memories",
      photos:["data/pic1.jpg","data/pic2.jpg","data/pic3.jpg","data/pic4.jpg"] }
  ],
  letter: {
    title:"A Letter For You",
    photo:"data/letter.jpg",
    body:[
      "Dear Family, Friends and Colleagues,",
      "On this auspicious night of Diwali, as thousands of diyas light up the sky, I wish that every corner of your life glows with happiness, peace and prosperity.",
      "May Maa Lakshmi bless your home with wealth and good health, and may Lord Ganesha remove every obstacle from your path.",
      "Thank you for every smile, every bit of support and every memory we made together this year. You are the real light in my life.",
      "May your dreams shine brighter than fireworks and your joy last longer than the sweetest mithai.",
      "Wishing you and your loved ones a very Happy, Safe and Prosperous Diwali! 🪔✨"
    ]
  }
};
/* ================================ */

const $=s=>document.querySelector(s),stage=$("#stage"),song=$("#song");
song.src=CONFIG.song;
const rnd=(a,b)=>a+Math.random()*(b-a),M=innerWidth<600;
let cur=0,started=false,AC;
const DIYA='<svg class="dy" viewBox="0 0 120 90"><path d="M4 42Q60 108 116 42Q60 56 4 42Z" fill="url(#gb)"/><path d="M16 52Q60 92 104 52" fill="none" stroke="#fff5" stroke-width="2.2"/><ellipse cx="60" cy="42" rx="56" ry="7" fill="#6e2400"/><ellipse cx="60" cy="42" rx="46" ry="4.4" fill="#ffb347" opacity=".8"/><rect x="58.4" y="33" width="3.2" height="9" rx="1.6" fill="#2a1200"/><path class="flame" d="M60 40C44 24 54 12 60 0C66 12 76 24 60 40Z" fill="url(#gf)"/><path class="flame in" d="M60 39C54 31 57 25 60 18C63 25 66 31 60 39Z" fill="#fffbe6"/></svg>';
$("#diyaBtn").insertAdjacentHTML("beforeend",DIYA+"<s></s><s></s>");
const gN=Math.min(24,Math.max(7,Math.round(innerWidth/58))),dv=n=>Array.from({length:n},()=>`<div>${DIYA}</div>`).join("");
$("#ground").innerHTML=dv(gN);$("#ground2").innerHTML=dv(gN-1);
$("#dl").innerHTML=$("#dr").innerHTML=dv(Math.max(3,Math.round((innerHeight-170)/(M?72:96))));
$("#scat").innerHTML=Array.from({length:M?8:16},()=>{const z=rnd(26,46),x=M?rnd(8,88):(Math.random()<.5?rnd(8,24):rnd(76,92));return `<div style="left:${x}%;top:${rnd(14,78)}%;width:${z}px;animation-delay:${-rnd(0,3)}s;animation-duration:${rnd(2.5,4.5)}s">${DIYA}</div>`}).join("");
$("#stars").innerHTML=Array.from({length:70},()=>`<span style="left:${rnd(0,100)}%;top:${rnd(0,70)}%;animation-delay:${rnd(0,2)}s;opacity:${rnd(.3,1)}"></span>`).join("");
const bc=["#ff3b3b","#ffd54a","#ff8a00","#fff3c0","#ff4fa3","#5cf2a0"];
$("#lights").innerHTML=Array.from({length:Math.min(44,Math.round(innerWidth/46))},(_,i)=>`<i style="--m:${6+Math.abs(Math.sin(i*.55))*16}px;background:${bc[i%6]};color:${bc[i%6]};animation-delay:${i*.17}s"></i>`).join("");

$("#sl1").innerHTML=$("#sl2").innerHTML=Array.from({length:Math.round(innerHeight/34)},(_,i)=>`<i style="--m:${4+Math.abs(Math.sin(i*.6))*10}px;background:${bc[i%6]};color:${bc[i%6]};animation-delay:${i*.17}s"></i>`).join("");
/* ---------- atmosphere ---------- */
$("#bokeh").innerHTML=Array.from({length:M?14:28},()=>{const z=rnd(30,110);return `<i style="left:${rnd(0,100)}%;width:${z}px;height:${z}px;animation-duration:${rnd(16,30)}s;animation-delay:${-rnd(0,24)}s;background:hsla(${rnd(15,48)},100%,60%,.15)"></i>`}).join("");
$("#kandil").innerHTML=Array.from({length:7},()=>`<i style="left:${rnd(5,92)}%;animation-duration:${rnd(18,30)}s;animation-delay:${-rnd(0,26)}s;--s:${rnd(.5,1)}"></i>`).join("");
$("#petals").innerHTML=Array.from({length:M?14:24},()=>`<i style="left:${rnd(0,100)}%;animation-duration:${rnd(8,15)}s;animation-delay:${-rnd(0,15)}s;--s:${rnd(.6,1.3)}"></i>`).join("");
const WIN=Array.from({length:34},()=>`<circle cx='${rnd(4,396)|0}' cy='${rnd(88,106)|0}' r='1.4' fill='#ffd36b'/>`).join("");
$("#city").style.backgroundImage="url(\"data:image/svg+xml,"+encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 110'><g fill='#0b0006'><rect x='0' y='70' width='60' height='40'/><rect x='14' y='52' width='26' height='30'/><path d='M14 52Q27 30 40 52Z'/><rect x='60' y='80' width='50' height='30'/><rect x='110' y='62' width='40' height='48'/><path d='M110 62Q130 36 150 62Z'/><rect x='128' y='26' width='4' height='12'/><rect x='150' y='76' width='95' height='34'/><path d='M165 110V70L200 20L235 70V110Z'/><path d='M195 20h10v-12l-5-6-5 6z'/><rect x='250' y='64' width='40' height='46'/><path d='M250 64Q270 38 290 64Z'/><rect x='290' y='82' width='50' height='28'/><rect x='340' y='56' width='26' height='54'/><path d='M340 56Q353 34 366 56Z'/><rect x='366' y='76' width='34' height='34'/></g>${WIN}</svg>`)+"\")";
/* ---------- fireworks engine ---------- */
const cv=$("#fx"),c=cv.getContext("2d");let W,H,R=[],P=[],F=[],E=[];
function fit(){const d=Math.min(devicePixelRatio||1,2);W=innerWidth;H=innerHeight;cv.width=W*d;cv.height=H*d;c.setTransform(d,0,0,d,0,0)}
fit();addEventListener("resize",fit);
const HUES=[45,35,18,6,330,50,170,290];
function boom(){if(!AC||song.paused)return;const n=AC.sampleRate*.5,b=AC.createBuffer(1,n,AC.sampleRate),d=b.getChannelData(0);for(let i=0;i<n;i++)d[i]=(Math.random()*2-1)*(1-i/n)**3;const s=AC.createBufferSource(),f=AC.createBiquadFilter(),g=AC.createGain();s.buffer=b;f.type="lowpass";f.frequency.value=450;g.gain.value=.18;s.connect(f);f.connect(g);g.connect(AC.destination);s.start()}
function launch(tx,ty){R.push({x:tx!=null?tx+rnd(-30,30):rnd(.12,.88)*W,y:H,tx:tx??rnd(.12,.88)*W,ty:ty??rnd(.1,.45)*H,s:rnd(10,13)})}
function spark(x,y,vx,vy,h,o={}){P.push({x,y,px:x,py:y,vx,vy,h,l:o.l||rnd(55,90),m:o.l||0,g:o.g??.05,dr:o.dr??.975,w:o.w||1.8,s:o.s??100,li:o.li??62,cr:o.cr})}
function explode(x,y){
  boom();const h=HUES[Math.floor(rnd(0,HUES.length))],t=Math.floor(rnd(0,5)),n=M?70:120;
  F.push({x,y,l:22,h});
  for(let i=0;i<n;i++){const a=i/n*6.283;
    if(t==0){const v=5*Math.sqrt(Math.random());spark(x,y,Math.cos(a+rnd(0,6))*v,Math.sin(a+rnd(0,6))*v,h+rnd(-12,12))}
    else if(t==1){spark(x,y,Math.cos(a)*5,Math.sin(a)*5,h,{dr:.968});if(i%2)spark(x,y,Math.cos(a)*2.6,Math.sin(a)*2.6,h+40,{dr:.968})}
    else if(t==2){const k=16*Math.sin(a)**3,j=-(13*Math.cos(a)-5*Math.cos(2*a)-2*Math.cos(3*a)-Math.cos(4*a));spark(x,y,k*.27,j*.27,350,{dr:.965,g:.03,li:65,l:80})}
    else if(t==3){const v=rnd(1,5.5);spark(x,y,Math.cos(a*7)*v,Math.sin(a*7)*v,42,{g:.06,dr:.985,l:rnd(110,150),w:1.4,li:70,cr:1})}
    else{const v=rnd(1,5.5);spark(x,y,Math.cos(a*5)*v,Math.sin(a*5)*v,h,{cr:2,l:rnd(60,85),s:100})}}
}
function barrage(n=5){for(let i=0;i<n;i++)setTimeout(()=>launch(),i*380)}
function fountain(x){E.push({x,t:70})}
function frame(){
  c.globalCompositeOperation="destination-out";c.fillStyle="rgba(0,0,0,.22)";c.fillRect(0,0,W,H);c.globalCompositeOperation="lighter";
  R=R.filter(r=>{const dx=r.tx-r.x,dy=r.ty-r.y,d=Math.hypot(dx,dy);if(d<r.s){explode(r.tx,r.ty);return false}
    r.x+=dx/d*r.s;r.y+=dy/d*r.s;spark(r.x,r.y,rnd(-.3,.3),rnd(.5,1.5),38,{l:18,g:.02,w:2,li:75});
    c.fillStyle="#fff";c.beginPath();c.arc(r.x,r.y,2.5,0,7);c.fill();return true});
  E=E.filter(e=>{for(let i=0;i<3;i++)spark(e.x,H-20,rnd(-1.6,1.6),-rnd(6,11),rnd(30,50),{g:.18,l:rnd(40,60),w:1.5,dr:.99});return --e.t>0});
  F=F.filter(f=>{c.fillStyle=`hsla(${f.h},100%,70%,${f.l/22*.22})`;c.beginPath();c.arc(f.x,f.y,(22-f.l)*7+20,0,7);c.fill();return --f.l>0});
  P=P.filter(p=>{p.px=p.x;p.py=p.y;p.vx*=p.dr;p.vy=p.vy*p.dr+p.g;p.x+=p.vx;p.y+=p.vy;p.l--;
    if(p.cr&&p.l==(p.cr==1?40:12)){if(p.cr==2)for(let k=0;k<6;k++){const a=rnd(0,6.3);spark(p.x,p.y,Math.cos(a)*1.6,Math.sin(a)*1.6,p.h,{l:25,s:30,li:90,w:1.2})}}
    const a=Math.min(1,p.l/30)*(p.cr==1&&p.l%6<2?.4:1);
    c.strokeStyle=`hsla(${p.h},${p.s}%,${p.li}%,${a})`;c.lineWidth=p.w;c.lineCap="round";c.beginPath();c.moveTo(p.px,p.py);c.lineTo(p.x,p.y);c.stroke();return p.l>0});
  requestAnimationFrame(frame)}
frame();
addEventListener("pointerdown",e=>{if(started&&!e.target.closest("button,.envelope"))launch(e.clientX,e.clientY)});
setInterval(()=>{if(started)launch()},M?2400:1700);

/* ---------- intro ---------- */
$("#diyaBtn").onclick=()=>{
  if(document.body.classList.contains("lit"))return;
  document.body.classList.add("lit");$("#start").classList.add("lit");started=true;
  AC=new(window.AudioContext||window.webkitAudioContext)();
  song.play().then(()=>$("#music").textContent="🔊").catch(()=>$("#music").textContent="🔇");
  barrage(4);fountain(W*.2);fountain(W*.8);
  setTimeout(()=>$("#openBtn").hidden=false,1800)};
$("#openBtn").onclick=()=>{$("#start").classList.add("out");$("#app").hidden=false;$("#music").hidden=false;$("#crack").hidden=false;setTimeout(()=>$("#start").hidden=true,1000);render(0);barrage(6);fountain(W*.15);fountain(W*.5);fountain(W*.85)};
$("#crack").onclick=()=>{barrage(9);[.1,.3,.5,.7,.9].forEach(x=>fountain(W*x))};
$("#music").onclick=()=>{if(song.paused){song.play();$("#music").textContent="🔊"}else{song.pause();$("#music").textContent="🔇"}};

/* ---------- slides ---------- */
const PAL=["#ffd54a","#ff9a2e","#ff6b9d","#ffe9a8","#7df9c1","#ff7a59","#c9a0ff"];
const col=t=>t.split(" ").map((w,k)=>`<b style="color:${PAL[k%PAL.length]}">${w}</b>`).join(" ");
const total=CONFIG.slides.length+1;
const pic=(s,fb)=>`<div class="photo"><img src="${s}" alt="" onerror="this.remove()">${fb}</div>`;
function render(i,dir=1){
  clearTimeout(tw);cur=(i+total)%total;let h;
  if(cur<CONFIG.slides.length){const s=CONFIG.slides[cur];
    h=s.type=="gallery"?`<div class="emoji">${s.emoji}</div><div class="title">${s.title}</div><div class="gallery">${s.photos.map((p,k)=>`<div class="pol" style="--t:${k%2?3:-3}deg;--d:${k*.15}s">${pic(p,"🪔")}</div>`).join("")}</div>`
    :`<div class="emoji">${s.emoji}</div><div class="title">${s.title}</div><div class="row"><div class="frame">${pic(s.photo,s.emoji)}</div><div class="text">${col(s.text)}</div></div>`}
  else{const L=CONFIG.letter;
    h=`<div id="env" class="envelope"><div class="env"><div class="flap"></div><div class="seal">🪔</div></div><p>Tap the envelope to open</p></div><div id="paper" class="letter" hidden><h2>${L.title}</h2><div class="frame">${pic(L.photo,"💌")}</div><div id="lt"></div><div id="sg" class="sign" hidden>With love, ${CONFIG.from}</div><button id="again" class="btn" hidden>↻ Replay</button></div>`}
  stage.innerHTML=`<div class="slide ${dir>0?"r":"l"}${cur==total-1?" lt":""}">${h}</div>`;stage.scrollTop=0;
  $("#dots").innerHTML=Array.from({length:total},(_,k)=>`<i class="${k==cur?"on":""}"></i>`).join("");
  if(cur==total-1){$("#env").onclick=openEnv;$("#again").onclick=typeLetter}
  else if(i!==0||cur!==0)barrage(2)}
$("#next").onclick=()=>render(cur+1,1);$("#prev").onclick=()=>render(cur-1,-1);
addEventListener("keydown",e=>{if(e.key=="ArrowRight")render(cur+1,1);if(e.key=="ArrowLeft")render(cur-1,-1)});
let sx=0;addEventListener("touchstart",e=>sx=e.touches[0].clientX);
addEventListener("touchend",e=>{const d=e.changedTouches[0].clientX-sx;if(Math.abs(d)>60&&!$("#app").hidden)d<0?render(cur+1,1):render(cur-1,-1)});

let tw;
function openEnv(){const e=$("#env");e.classList.add("open");barrage(3);setTimeout(()=>{e.hidden=true;$("#paper").hidden=false;typeLetter()},1100)}
function typeLetter(){
  clearTimeout(tw);const box=$("#lt");box.innerHTML="";$("#sg").hidden=true;$("#again").hidden=true;
  const q=document.createElement("span");q.className="qc";q.textContent="🪶";
  const ws=[];CONFIG.letter.body.forEach((p,i)=>p.split(" ").forEach(w=>ws.push([i,w])));
  let pi=-1,el,k=0;
  (function nx(){
    if(k>=ws.length){q.remove();$("#sg").hidden=false;$("#again").hidden=false;stage.scrollTo({top:stage.scrollHeight,behavior:"smooth"});barrage(10);[.1,.3,.5,.7,.9].forEach(x=>fountain(W*x));return}
    const[i,w]=ws[k++];
    if(i!==pi){pi=i;el=document.createElement("p");box.appendChild(el)}
    const s=document.createElement("span");s.className="w";s.style.color=PAL[k%PAL.length];s.textContent=w+" ";el.appendChild(s);el.appendChild(q);
    stage.scrollTo({top:stage.scrollHeight,behavior:"smooth"});
    const end=/[.!?]$/.test(w);if(end&&k%2)launch();
    tw=setTimeout(nx,120+w.length*22+(/,$/.test(w)?200:0)+(end?450:0))})()}
addEventListener("pointerdown",e=>{const b=e.target.closest("button");if(!b||b.id=="diyaBtn")return;const r=b.getBoundingClientRect(),s=document.createElement("span");s.className="rp";s.style.cssText=`left:${e.clientX-r.left}px;top:${e.clientY-r.top}px`;b.appendChild(s);setTimeout(()=>s.remove(),700)});
