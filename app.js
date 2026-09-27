const PHONE = '+16094808234';
const PHONE_HREF = 'tel:+16094808234';
const WA_HREF = 'https://wa.me/16094808234?text=Hi%20Satya%27s%2C%20I%20would%20like%20to%20order%3A%20';

const MENU = [
  {
    id: 'chaat', title: '1 CHAT & SNACKS', cls:'c1', icon:'🥘',
    items: [
      { name:'Bread rolls (2 pcs)', plate:5, small:50, medium:65, large:90 },
      { name:'Poha', plate:8, small:40, medium:55, large:65 },
      { name:'Vermicelli Special', plate:8, small:40, medium:55, large:65 },
      { name:'Pani puri (8 pcs) with Aalu & Chutneys', plate:7, small:null, medium:null, large:null },
      { name:'Bread Pakodas (2 pcs)', plate:7, small:55, medium:65, large:90 },
      { name:'Mix Pakodas Plate', plate:8, small:55, medium:65, large:90 },
      { name:'White / Red Sauce Pasta without Vegetables', plate:10, small:40, medium:55, large:70 },
      { name:'White / Red Sauce Pasta with Vegetables', plate:12, small:50, medium:65, large:90 },
      { name:'Puri Aaloo - Dry (4 poori)', plate:12, small:50, medium:65, large:85 },
      { name:'Puri Aaloo - Gravy (4 poori)', plate:12, small:50, medium:65, large:85 },
      { name:'Matar Kulcha (2 pcs)', plate:15, small:50, medium:70, large:85 },
      { name:'Pao Bhaji', plate:12, small:50, medium:70, large:90 },
      { name:'White / Red Sauce Pasta with Chicken', plate:15, small:60, medium:80, large:95, nonveg:true },
    ]
  },
  {
    id:'veg', title:'2 VEGETARIAN MAIN COURSE', cls:'c2', icon:'🌿',
    items:[
      {name:'Aaloo Gobhi', plate:10, small:50, medium:70, large:100},
      {name:'Aaloo Matar Dry', plate:10, small:50, medium:70, large:100},
      {name:'Aaloo Matar Gravy', plate:10, small:50, medium:70, large:100},
      {name:'Beans Aaloo', plate:10, small:50, medium:70, large:100},
      {name:'Bhindi Do pyaaza', plate:10, small:50, medium:70, large:100},
      {name:'Chole', plate:10, small:50, medium:70, large:100},
      {name:'Kadhi Pakoda', plate:10, small:50, medium:70, large:100},
      {name:'Kale Channa', plate:10, small:50, medium:70, large:100},
      {name:'Karela do Pyaza', plate:10, small:50, medium:70, large:100},
      {name:'Matar Gajar Aaloo', plate:10, small:50, medium:70, large:100},
      {name:'Rajmah', plate:10, small:50, medium:70, large:100},
      {name:'Shimla Mirch Aaloo', plate:10, small:50, medium:70, large:100},
      {name:'Matar Mushroom', plate:12, small:50, medium:70, large:100},
      {name:'Bhurji Paneer', plate:15, small:60, medium:80, large:110},
      {name:'Kadai Paneer', plate:15, small:60, medium:80, large:110},
      {name:'Matar Paneer', plate:15, small:60, medium:80, large:110},
      {name:'Palak/Saag Paneer', plate:15, small:60, medium:80, large:110},
      {name:'Shahi Paneer', plate:15, small:60, medium:80, large:110},
      {name:'Soya Chaap', plate:15, small:60, medium:80, large:110},
    ]
  },
  {
    id:'nonveg', title:'3 NON-VEGETARIAN MAIN COURSE', cls:'c3', icon:'🍗',
    items:[
      {name:'Chicken Curry', plate:15, small:75, medium:95, large:125, nonveg:true},
      {name:'Mutton Curry', plate:20, small:85, medium:110, large:150, nonveg:true},
      {name:'Mutton kabab in gravy', plate:20, small:85, medium:110, large:150, nonveg:true},
    ]
  },
  {
    id:'dal', title:'4 DAL SPECIALS', cls:'c4', icon:'🍲',
    items:[
      {name:'Dal Tadka', plate:10, small:45, medium:65, large:95},
      {name:'Dhaba Dal', plate:10, small:45, medium:65, large:95},
      {name:'Moong Dal (Green / Yellow)', plate:10, small:45, medium:65, large:95},
      {name:'Palak Chana Dal with Ghiya', plate:15, small:45, medium:65, large:95},
    ]
  },
  {
    id:'rice', title:'5 RICE & BREADS', cls:'c5', icon:'🍚',
    items:[
      {name:'Roti-4', plate:2, small:null, medium:null, large:null, unit:'per plate'},
      {name:'Plain Paranthas per piece', plate:2, small:null, medium:null, large:null, unit:'per piece'},
      {name:'Paranthas (Aaloo / Paneer / Gobhi) per piece', plate:4, small:null, medium:null, large:null, unit:'per piece'},
      {name:'Jeera Rice (16 oz)', plate:4, small:null, medium:null, large:null, unit:'16 oz'},
      {name:'Plain Rice (16 oz)', plate:3, small:null, medium:null, large:null, unit:'16 oz'},
    ]
  },
  {
    id:'dessert', title:'6 DESSERTS', cls:'c6', icon:'🍨',
    items:[
      {name:'Kheer', plate:10, small:50, medium:60, large:90},
      {name:'Sheer Khurma', plate:10, small:50, medium:55, large:80},
      {name:'Fruit Cream', plate:12, small:60, medium:75, large:100},
      {name:'Badami Halwa', plate:15, small:50, medium:65, large:100},
    ]
  },
  {
    id:'raita', title:'7 RAITA', cls:'c7', icon:'🥣',
    items:[
      {name:'Mint Raita', plate:5, small:35, medium:45, large:65},
      {name:'Aaloo Raita', plate:6, small:40, medium:50, large:65},
      {name:'Boondi Raita', plate:6, small:40, medium:50, large:65},
      {name:'Mixed Raita', plate:10, small:40, medium:50, large:65},
    ]
  },
];

let state = { filter:'all', search:'', priceSel:{} , cart: JSON.parse(localStorage.getItem('satyas-cart')||'[]') };

function money(v){ return v==null ? '–' : '$'+v; }

function renderChips(){
  const cats = [{id:'all', label:'All Items'}].concat(MENU.map(m=>({id:m.id, label:m.title.replace(/^\d+\s/,'')})));
  const el = document.getElementById('chips');
  el.innerHTML = cats.map(c=> `<button class="chip ${state.filter===c.id?'active':''}" data-id="${c.id}">${c.label}</button>`).join('');
  el.querySelectorAll('.chip').forEach(b=> b.addEventListener('click', ()=>{
    state.filter=b.dataset.id;
    render();
  }));
}

function matches(item){
  const q = state.search.trim().toLowerCase();
  if(!q) return true;
  return item.name.toLowerCase().includes(q);
}

function renderMenu(){
  const menu = document.getElementById('menu');
  let filtered = MENU.filter(c=> state.filter==='all' || c.id===state.filter)
    .map(cat=> ({...cat, items: cat.items.filter(matches)}))
    .filter(cat=> cat.items.length>0);
  if(filtered.length===0){
    menu.innerHTML = `<div class="empty">No items match “${state.search}”. Try search “paneer”, “dal”, “puri”.</div>`;
    return;
  }
  menu.innerHTML = filtered.map(cat=>{
    const itemsHtml = cat.items.map((it,idx)=>{
      const key = cat.id+'-'+idx;
      const sel = state.priceSel[key] || 'plate';
      const hasTrays = it.small!=null || it.medium!=null || it.large!=null;
      const tag = it.nonveg ? '<span class="tag-nonveg">● Non-Veg</span>' : (cat.id!=='nonveg' && cat.id!=='chaat' ? '<span class="tag-veg">● Veg</span>' : '');
      const priceGrid = hasTrays ? `
        <div class="price-grid selectable" data-key="${key}">
          <div class="h">Per Plate</div><div class="h">Small Tray</div><div class="h">Medium Tray</div><div class="h">Large Tray</div><div class="h" style="opacity:0">.</div>
          <div class="v ${sel==='plate'?'active':''}" data-size="plate">${money(it.plate)}</div>
          <div class="v ${sel==='small'?'active':''}" data-size="small">${money(it.small)}</div>
          <div class="v ${sel==='medium'?'active':''}" data-size="medium">${money(it.medium)}</div>
          <div class="v ${sel==='large'?'active':''}" data-size="large">${money(it.large)}</div>
          <div style="display:none"></div>
        </div>` : hasTrays===false && cat.id==='rice' ? `
        <div class="price-grid"><div class="h">Per Plate / Piece</div><div></div><div></div><div></div><div></div>
          <div class="v">${money(it.plate)} <span style="font-weight:600;color:#6b5a4a"> ${it.unit||''}</span></div><div></div><div></div><div></div><div></div>
        </div>` :
        `<div class="price-grid"><div class="h">Per Plate</div><div class="h">Small Tray</div><div class="h">Medium Tray</div><div class="h">Large Tray</div><div></div>
          <div class="v">${money(it.plate)}</div><div class="v">${money(it.small)}</div><div class="v">${money(it.medium)}</div><div class="v">${money(it.large)}</div><div></div>
        </div>`;

      // price for add to cart
      const priceMap={plate:it.plate, small:it.small, medium:it.medium, large:it.large};
      const addDisabled = priceMap[sel]==null ? 'disabled title="Not available in this size"' : '';

      return `<div class="item">
        <div class="item-top">
          <div class="item-name">• ${it.name}</div>
          <div class="item-price">${money(priceMap[sel])}</div>
        </div>
        <div class="item-meta">${tag} ${hasTrays? 'Tap a price to choose tray size':''}</div>
        ${priceGrid}
        <div class="actions">
          <button class="btn-sm primary" data-add="${key}" ${addDisabled}>Add to Order</button>
          <button class="btn-sm" data-call>Add ${money(priceMap[sel])} · Call</button>
        </div>
      </div>`;
    }).join('');
    return `<section class="category" id="${cat.id}">
      <div class="cat-head ${cat.cls}"><span>${cat.icon} ${cat.title}</span><small>${cat.items.length} items</small></div>
      <div class="items">${itemsHtml}</div>
    </section>`;
  }).join('');

  // bind size selectors
  menu.querySelectorAll('.price-grid.selectable').forEach(g=>{
    g.querySelectorAll('.v').forEach(v=>{
      v.addEventListener('click', ()=>{
        const key=g.dataset.key;
        state.priceSel[key]=v.dataset.size;
        renderMenu();
      });
    });
  });
  // bind add
  menu.querySelectorAll('[data-add]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const key=btn.getAttribute('data-add');
      const [catId, idxStr]=key.split('-');
      const idx=parseInt(idxStr,10);
      const cat=MENU.find(c=>c.id===catId);
      const it=cat.items[idx];
      const size=state.priceSel[key]||'plate';
      const price={plate:it.plate, small:it.small, medium:it.medium, large:it.large}[size];
      if(price==null) return;
      addToCart({key, name:it.name, size, price, cat:cat.title});
    });
  });
  menu.querySelectorAll('[data-call]').forEach(btn=>{
    btn.addEventListener('click', ()=> window.location.href=PHONE_HREF);
  });
}

function addToCart(entry){
  const existing = state.cart.find(c=> c.key===entry.key && c.size===entry.size);
  if(existing) existing.qty+=1;
  else state.cart.push({...entry, qty:1, id: Date.now()+Math.random()});
  persist();
  updateCartUI();
  openCart();
}

function persist(){
  localStorage.setItem('satyas-cart', JSON.stringify(state.cart));
}

function updateCartUI(){
  const count = state.cart.reduce((s,c)=>s+c.qty,0);
  document.getElementById('cartCount').textContent=count;
  document.getElementById('cartCount2').textContent=count ? `(${count})` : '';
  const total = state.cart.reduce((s,c)=> s + c.price*c.qty, 0);
  document.getElementById('cartTotal').textContent = '$'+total;
  document.getElementById('cartTotal2').textContent = '$'+total;
  const list=document.getElementById('cartList');
  if(state.cart.length===0){
    list.innerHTML = `<div class="empty">Your cart is empty.<br>Add plates or trays from the menu.</div>`;
    document.getElementById('waBtn').style.opacity=.5;
  } else {
    list.innerHTML = state.cart.map((c,i)=>`
      <div class="cart-item">
        <div style="display:flex; justify-content:space-between; gap:8px">
          <strong style="font-size:.92rem">${c.name}</strong>
          <button data-remove="${i}" style="border:none;background:none; cursor:pointer; color:#9b1b24; font-weight:700">✕</button>
        </div>
        <div style="font-size:.82rem; color:#6b5a4a">${sizeLabel(c.size)} · $${c.price} each</div>
        <div style="display:flex; justify-content:space-between; align-items:center">
          <div class="qty">
            <button data-dec="${i}">−</button><span style="min-width:18px;text-align:center;font-weight:700">${c.qty}</span><button data-inc="${i}">+</button>
          </div>
          <strong>$${c.price*c.qty}</strong>
        </div>
      </div>
    `).join('');
    list.querySelectorAll('[data-remove]').forEach(b=> b.addEventListener('click', ()=>{ state.cart.splice(parseInt(b.dataset.remove),1); persist(); updateCartUI(); }));
    list.querySelectorAll('[data-inc]').forEach(b=> b.addEventListener('click', ()=>{ state.cart[parseInt(b.dataset.inc)].qty++; persist(); updateCartUI(); }));
    list.querySelectorAll('[data-dec]').forEach(b=> b.addEventListener('click', ()=>{ const idx=parseInt(b.dataset.dec); if(state.cart[idx].qty>1) state.cart[idx].qty--; else state.cart.splice(idx,1); persist(); updateCartUI(); }));
    document.getElementById('waBtn').style.opacity=1;
  }
  // build wa message
  const msg = state.cart.map(c=> `• ${c.name} (${sizeLabel(c.size)}) x${c.qty} = $${c.price*c.qty}`).join('%0A');
  const totalStr = '$'+total;
  const waText = `Hi Satya's, I would like to order:%0A${msg}%0ATotal: ${totalStr}%0A%0AName:%0AAddress/Date:%0A`;
  const waBtn=document.getElementById('waBtn');
  waBtn.href = `https://wa.me/16094808234?text=${waText}`;
}

function sizeLabel(s){ return {plate:'Per Plate', small:'Small Tray', medium:'Medium Tray', large:'Large Tray'}[s] || s; }

function openCart(){ document.getElementById('cartDrawer').classList.add('open'); }
function closeCart(){ document.getElementById('cartDrawer').classList.remove('open'); }

function render(){ renderChips(); renderMenu(); updateCartUI(); }

document.addEventListener('DOMContentLoaded', ()=>{
  // phone links
  document.querySelectorAll('[data-phone]').forEach(a=>{ a.href=PHONE_HREF; a.textContent=PHONE; });
  document.querySelectorAll('[data-phone-href]').forEach(a=> a.href=PHONE_HREF);
  document.getElementById('year').textContent=new Date().getFullYear();
  // search
  document.getElementById('search').addEventListener('input', e=>{ state.search=e.target.value; renderMenu(); });
  // cart
  document.getElementById('cartBtn').addEventListener('click', openCart);
  document.getElementById('cartBtn2').addEventListener('click', openCart);
  document.getElementById('closeCart').addEventListener('click', closeCart);
  document.getElementById('cartBackdrop').addEventListener('click', closeCart);
  document.getElementById('clearCart').addEventListener('click', ()=>{ state.cart=[]; persist(); updateCartUI(); });
  // install prompt
  let deferred;
  const banner=document.getElementById('installBanner');
  window.addEventListener('beforeinstallprompt', e=>{ e.preventDefault(); deferred=e; banner.classList.add('show'); });
  document.getElementById('installBtn').addEventListener('click', async ()=>{ if(!deferred) return; deferred.prompt(); await deferred.userChoice; deferred=null; banner.classList.remove('show'); });
  document.getElementById('dismissInstall').addEventListener('click', ()=> banner.classList.remove('show'));
  // sw
  if('serviceWorker' in navigator){ navigator.serviceWorker.register('./sw.js'); }
  // offline
  const off=document.getElementById('offline');
  window.addEventListener('online', ()=> off.classList.remove('show'));
  window.addEventListener('offline', ()=> off.classList.add('show'));
  if(!navigator.onLine) off.classList.add('show');

  render();
});
