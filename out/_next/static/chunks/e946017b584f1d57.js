(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,46529,e=>{"use strict";var t=e.i(43476),o=e.i(71645);let r=[[-27.603994,-48.585536],[-27.62474,-48.655409],[-27.488244,-48.650498],[-27.451507,-48.404241]];function a(){let a=(0,o.useRef)(null),n=(0,o.useRef)(null);return(0,o.useEffect)(()=>{if(a.current&&!n.current)return e.A(71400).then(t=>{e.r(65265);let o=t.default.map(a.current,{scrollWheelZoom:!0,zoomControl:!1});t.default.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(o);let l=t.default.divIcon({className:"rodobras-marker",html:`<span style="
          display: block;
          width: 24px;
          height: 24px;
          background: #EB720C;
          border: 2px solid white;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          box-shadow: 0 2px 6px rgba(0,0,0,0.3);
        "></span>`,iconSize:[24,24],iconAnchor:[12,24]}),s=t.default.latLngBounds(r.map(([e,t])=>[e,t]));r.forEach(([e,r])=>{t.default.marker([e,r],{icon:l}).addTo(o).bindPopup("Rodobras Guindastes & Muncks")}),o.fitBounds(s.pad(.15)),o.addControl(t.default.control.zoom({position:"bottomright"})),n.current=o}),()=>{n.current&&"function"==typeof n.current.remove&&(n.current.remove(),n.current=null)}},[]),(0,t.jsx)("div",{ref:a,className:"h-[200px] w-full min-h-[200px] rounded-lg z-0","aria-label":"Mapa com as quatro unidades Rodobras"})}e.s(["LocationsMap",()=>a])},63274,e=>{e.n(e.i(46529))},71400,e=>{e.v(t=>Promise.all(["static/chunks/9c09817456a99b20.js"].map(t=>e.l(t))).then(()=>t(32322)))}]);