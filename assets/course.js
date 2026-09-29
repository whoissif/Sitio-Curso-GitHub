// Shared rendering engine for the module pages of "Matemáticas para la Economía I".
// Each module page defines its own DATA object and calls renderModule(DATA, storageKey).
function renderModule(DATA, storageKey){
  let progress = {};
  try{ progress = JSON.parse(localStorage.getItem(storageKey) || "{}"); }catch(e){ progress = {}; }
  function saveProgress(){ try{ localStorage.setItem(storageKey, JSON.stringify(progress)); }catch(e){} }

  const tabsEl = document.getElementById("tabs");
  const panelsEl = document.getElementById("panels");
  const exIds = Object.keys(DATA);

  exIds.forEach((exId, i)=>{
    const ex = DATA[exId];
    const btn = document.createElement("button");
    btn.type = "button";
    btn.setAttribute("role","tab");
    btn.setAttribute("aria-selected", i===0 ? "true":"false");
    btn.dataset.ex = exId;
    btn.innerHTML = ex.title + ' <span class="count">('+ex.items.length+')</span>';
    btn.addEventListener("click", ()=> selectTab(exId));
    tabsEl.appendChild(btn);

    const panel = document.createElement("section");
    panel.className = "panel" + (i===0 ? " active":"");
    panel.id = "panel-"+exId;

    const introWrap = document.createElement("div");
    introWrap.innerHTML =
      '<div class="section-title"><h2>'+ex.title+'</h2><span>'+ex.items.length+' apartados</span></div>'+
      '<p class="section-intro">'+ex.subtitle+'</p>';
    panel.appendChild(introWrap);

    ex.items.forEach((it, idx)=>{
      const card = document.createElement("article");
      card.className = "card";
      card.id = "card-"+it.id;

      const label = it.label !== undefined ? it.label : it.id.replace(/^[0-9]+/,"").replace(/^-/,"") || (idx+1);
      const checked = !!progress[it.id];
      if(checked) card.classList.add("done");

      card.innerHTML =
        '<div class="card-head">'+
          '<div class="letter">'+label+'</div>'+
          '<div class="statement"><span class="math">'+it.stmt+'</span></div>'+
          '<label class="check-wrap"><input type="checkbox" '+(checked?'checked':'')+' aria-label="Marcar '+it.id+' como resuelto"></label>'+
        '</div>'+
        '<div class="card-actions">'+
          '<button type="button" class="hint-btn">Ver pista</button>'+
          '<button type="button" class="sol-btn">Ver solución completa</button>'+
        '</div>'+
        '<div class="reveal hint" hidden><span class="tag">Método</span>'+it.hint+'</div>'+
        '<div class="reveal sol" hidden><span class="tag">Desarrollo</span><ol>'+
          it.steps.map(s=>'<li>'+s+'</li>').join('')+
        '</ol><div class="answer">Solución: '+it.answer+'</div></div>';

      const hintBtn = card.querySelector(".hint-btn");
      const solBtn = card.querySelector(".sol-btn");
      const hintBox = card.querySelector(".reveal.hint");
      const solBox = card.querySelector(".reveal.sol");
      hintBtn.addEventListener("click", ()=>{
        hintBox.hidden = !hintBox.hidden;
        hintBtn.textContent = hintBox.hidden ? "Ver pista" : "Ocultar pista";
      });
      solBtn.addEventListener("click", ()=>{
        solBox.hidden = !solBox.hidden;
        solBtn.textContent = solBox.hidden ? "Ver solución completa" : "Ocultar solución";
      });
      const cb = card.querySelector('input[type="checkbox"]');
      cb.addEventListener("change", ()=>{
        progress[it.id] = cb.checked;
        card.classList.toggle("done", cb.checked);
        saveProgress();
        updateProgressBar();
      });

      panel.appendChild(card);
    });

    panelsEl.appendChild(panel);
  });

  function selectTab(exId){
    document.querySelectorAll('nav.tabs button').forEach(b=>{
      b.setAttribute("aria-selected", b.dataset.ex===exId ? "true":"false");
    });
    document.querySelectorAll('.panel').forEach(p=>{
      p.classList.toggle("active", p.id === "panel-"+exId);
    });
  }

  function updateProgressBar(){
    let total = 0, done = 0;
    exIds.forEach(exId=>{
      DATA[exId].items.forEach(it=>{
        total++;
        if(progress[it.id]) done++;
      });
    });
    const pct = total ? Math.round((done/total)*100) : 0;
    const fill = document.getElementById("progressFill");
    const label = document.getElementById("progressLabel");
    if(fill) fill.style.width = pct+"%";
    if(label) label.textContent = done+" / "+total+" resueltos";
  }
  updateProgressBar();
}

// Counts done/total for a module's DATA + storageKey, without rendering — used on index.html.
function countModuleProgress(DATA, storageKey){
  let progress = {};
  try{ progress = JSON.parse(localStorage.getItem(storageKey) || "{}"); }catch(e){ progress = {}; }
  let total = 0, done = 0;
  Object.keys(DATA).forEach(exId=>{
    DATA[exId].items.forEach(it=>{
      total++;
      if(progress[it.id]) done++;
    });
  });
  return { done, total };
}
