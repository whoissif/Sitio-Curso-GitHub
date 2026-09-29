// Datos del Bloque 2 (ejercicios 5-6): relaciones de orden y orden de Pareto.
function trig(fn, sym, prefix){
  const rows = [
    {a:"−1", key:"neg1", sol:{sen:"x = −π/2 + 2kπ, k∈Z", cos:"x = π + 2kπ, k∈Z"}[fn]},
    {a:"0",  key:"0",    sol:{sen:"x = kπ, k∈Z", cos:"x = π/2 + kπ, k∈Z"}[fn]},
    {a:"1",  key:"1",    sol:{sen:"x = π/2 + 2kπ, k∈Z", cos:"x = 2kπ, k∈Z"}[fn]},
  ];
  return rows.map(r=>({
    id: prefix+"-"+r.key,
    label: "α="+r.a,
    stmt: sym+"(x) = "+r.a,
    hint:"Escribe explícitamente el conjunto de soluciones de "+sym+"(x)="+r.a+". Es una progresión de puntos aislados que se repite cada 2π indefinidamente hacia +∞ y −∞: al no estar acotado en ningún sentido, nunca puede tener máximo ni mínimo.",
    steps:["Conjunto de soluciones: A = {"+r.sol+"}.","Es un conjunto discreto (puntos aislados) que se extiende sin límite tanto hacia +∞ como hacia −∞.","Al no estar acotado ni superior ni inferiormente, no existe ni máximo ni mínimo."],
    answer:"No tiene máximo ni mínimo (para ningún α ∈ [−1,1])."
  }));
}

const DATA_BLOQUE2 = {
  "5sen": { title:"Ej. 5 · sen", subtitle:"A = {x : sen x = α}, para α = −1, 0, 1.", items: trig("sen","sen","5sen") },
  "5cos": { title:"Ej. 5 · cos", subtitle:"A = {x : cos x = α}, para α = −1, 0, 1.", items: trig("cos","cos","5cos") },
  "5exp": { title:"Ej. 5 · exp", subtitle:"A = {x : eˣ ≤ α} y A = {x : eˣ ≥ α}, para α = −1, 0, 1.", items: [
      { id:"5c-1", label:"≤ −1", stmt:"eˣ ≤ −1", hint:"eˣ es siempre positivo: nunca puede ser ≤ un número negativo.", steps:["eˣ > 0 para todo x, así que eˣ ≤ −1 no tiene solución."], answer:"A = ∅ → no tiene máximo ni mínimo." },
      { id:"5c-0", label:"≤ 0", stmt:"eˣ ≤ 0", hint:"Igual que antes: eˣ nunca vale 0 ni menos.", steps:["eˣ > 0 para todo x, así que eˣ ≤ 0 no tiene solución."], answer:"A = ∅ → no tiene máximo ni mínimo." },
      { id:"5c-1p", label:"≤ 1", stmt:"eˣ ≤ 1", hint:"Usa que eˣ es creciente: eˣ ≤ 1 = e⁰ equivale a x ≤ 0.", steps:["eˣ ≤ 1 ⇔ x ≤ 0 (eˣ es creciente).","A = (−∞, 0].","El extremo superior 0 pertenece a A."], answer:"Máximo = 0. No tiene mínimo (no acotado inferiormente)." },
      { id:"5d-1", label:"≥ −1", stmt:"eˣ ≥ −1", hint:"eˣ siempre es positivo, luego siempre es ≥ −1: se cumple para todo x.", steps:["eˣ > 0 > −1 para todo x ∈ R.","A = R."], answer:"A = R → no tiene máximo ni mínimo." },
      { id:"5d-0", label:"≥ 0", stmt:"eˣ ≥ 0", hint:"eˣ siempre es positivo, luego siempre es ≥ 0.", steps:["eˣ > 0 ≥ 0 para todo x ∈ R.","A = R."], answer:"A = R → no tiene máximo ni mínimo." },
      { id:"5d-1p", label:"≥ 1", stmt:"eˣ ≥ 1", hint:"Usa que eˣ es creciente: eˣ ≥ 1 = e⁰ equivale a x ≥ 0.", steps:["eˣ ≥ 1 ⇔ x ≥ 0 (eˣ es creciente).","A = [0, +∞).","El extremo inferior 0 pertenece a A."], answer:"Mínimo = 0. No tiene máximo (no acotado superiormente)." },
  ]},
  "5log": { title:"Ej. 5 · ln", subtitle:"A = {x : ln x ≤ α} y A = {x : ln x ≥ α}, para α = −1, 0, 1 (dominio x>0).", items: [
      { id:"5e-1", label:"≤ −1", stmt:"ln x ≤ −1", hint:"Recuerda el dominio x>0. Usa que ln es creciente: ln x ≤ −1 equivale a x ≤ e⁻¹, y luego interseca con x>0.", steps:["ln x ≤ −1 ⇔ x ≤ e⁻¹ = 1/e (ln es creciente).","Con el dominio x>0: A = (0, 1/e]."], answer:"Máximo = 1/e. No tiene mínimo (el 0 no pertenece al dominio)." },
      { id:"5e-0", label:"≤ 0", stmt:"ln x ≤ 0", hint:"Igual que el anterior, con α=0: ln x ≤ 0 equivale a x ≤ e⁰=1.", steps:["ln x ≤ 0 ⇔ x ≤ 1.","Con el dominio x>0: A = (0, 1]."], answer:"Máximo = 1. No tiene mínimo." },
      { id:"5e-1p", label:"≤ 1", stmt:"ln x ≤ 1", hint:"ln x ≤ 1 equivale a x ≤ e.", steps:["ln x ≤ 1 ⇔ x ≤ e.","Con el dominio x>0: A = (0, e]."], answer:"Máximo = e. No tiene mínimo." },
      { id:"5f-1", label:"≥ −1", stmt:"ln x ≥ −1", hint:"Usa que ln es creciente: ln x ≥ −1 equivale a x ≥ e⁻¹.", steps:["ln x ≥ −1 ⇔ x ≥ e⁻¹ = 1/e.","A = [1/e, +∞)."], answer:"Mínimo = 1/e. No tiene máximo (no acotado superiormente)." },
      { id:"5f-0", label:"≥ 0", stmt:"ln x ≥ 0", hint:"ln x ≥ 0 equivale a x ≥ 1.", steps:["ln x ≥ 0 ⇔ x ≥ 1.","A = [1, +∞)."], answer:"Mínimo = 1. No tiene máximo." },
      { id:"5f-1p", label:"≥ 1", stmt:"ln x ≥ 1", hint:"ln x ≥ 1 equivale a x ≥ e.", steps:["ln x ≥ 1 ⇔ x ≥ e.","A = [e, +∞)."], answer:"Mínimo = e. No tiene máximo." },
  ]},
  "6": { title:"Ejercicio 6", subtitle:"Orden de Pareto en R²: demostrar que es de orden parcial y hallar máximo, mínimo, maximales y minimales de A, B, C, D y E.", items: [
      { id:"6-demo", label:"demo", stmt:"Demostrar que ≤P es una relación de orden parcial en R²", hint:"Comprueba las tres propiedades (reflexiva, antisimétrica, transitiva) aplicando la definición de ≤ en cada componente por separado, y demuestra que es parcial (no total) dando un ejemplo de dos puntos no comparables.",
        steps:[
          "Reflexiva: (x,y) ≤P (x,y) ⇔ x≤x y y≤y, ambas ciertas siempre.",
          "Antisimétrica: si (x1,y1)≤P(x2,y2) y (x2,y2)≤P(x1,y1), entonces x1≤x2≤x1 y y1≤y2≤y1, luego x1=x2 e y1=y2, es decir, los dos puntos son iguales.",
          "Transitiva: si (x1,y1)≤P(x2,y2) y (x2,y2)≤P(x3,y3), entonces x1≤x2≤x3 e y1≤y2≤y3, luego x1≤x3 e y1≤y3, es decir (x1,y1)≤P(x3,y3).",
          "No es total: por ejemplo (1,5) y (3,2) no se pueden comparar, porque ni (1≤3 y 5≤2) ni (3≤1 y 2≤5) se cumplen."
        ],
        answer:"≤P es reflexiva, antisimétrica y transitiva ⇒ orden parcial (no total)." },
      { id:"6-A", label:"A", stmt:"A = {(x,y) ∈ R² : x + y ≤ 1}", hint:"Es el primer ejemplo visto en el Tema 1: la región es un semiplano no acotado hacia abajo-izquierda, con frontera la recta y=1−x, donde x e y se mueven en sentidos opuestos.",
        steps:[ "La región es el semiplano bajo la recta y=1−x, no acotado en ninguna dirección hacia −∞.", "No existe un «punto ideal» (mayor x y mayor y a la vez) dentro de la región: no hay máximo.", "En la frontera y=1−x, al aumentar x disminuye y: son puntos incomparables entre sí, y ninguno está dominado por otro de la región → todos son maximales.", "Por simetría (la región tampoco está acotada hacia −∞ en ninguna dirección): no hay mínimo ni minimales." ],
        answer:"Máx = ∅. Maximales = {(x,y): y=1−x}. Mín = ∅. Minimales = ∅." },
      { id:"6-B", label:"B", stmt:"B = {(x,y) ∈ R² : |x| ≤ 1, |y| ≤ 1}", hint:"Es el cuadrado [−1,1]×[−1,1]. Al ser una región acotada en las cuatro direcciones, busca directamente las esquinas extremas.",
        steps:[ "La región es el cuadrado de vértices (±1, ±1).", "El punto (1,1) pertenece a B y domina a todos los demás (x≤1, y≤1 para cualquier punto de B): es el máximo.", "El punto (−1,−1) pertenece a B y está dominado por todos los demás: es el mínimo." ],
        answer:"Máx = Maximal = {(1,1)}. Mín = Minimal = {(−1,−1)}." },
      { id:"6-C", label:"C", stmt:"C = {(x,y) ∈ R² : 0 ≤ y ≤ 4 − x²}", hint:"Es el tercer ejemplo del Tema 1: región bajo la parábola y=4−x², sobre el eje x. Divide la parábola frontera en su mitad izquierda (creciente) y derecha (decreciente).",
        steps:[ "El punto más bajo y a la izquierda es (−2, 0), único punto con x=−2 (ahí la parábola toca el eje). Domina a toda la región: es el mínimo.", "En la mitad derecha de la parábola (0≤x≤2), al aumentar x, y=4−x² disminuye: son puntos incomparables entre sí, y no dominados por ningún otro punto de la región → todos maximales.", "En la mitad izquierda de la parábola (−2≤x≤0), al aumentar x también aumenta y=4−x² (la parábola crece hacia el vértice): esos puntos SÍ están dominados por los de la mitad derecha con mayor x, luego no son maximales.", "No existe un único punto que domine a toda la región por arriba: no hay máximo." ],
        answer:"Máx = ∅. Maximales = {(x,y): y=4−x², 0≤x≤2}. Mín = Minimal = {(−2,0)}." },
      { id:"6-D", label:"D", stmt:"D = {(x,y) ∈ R² : x² − 9 ≤ y ≤ 0}", hint:"Primero halla el dominio en x (impón x²−9≤0). La región está entre la parábola y=x²−9 (abajo) y la recta y=0 (arriba). Comprueba si el punto (3,0) —mayor x y mayor y posibles— pertenece a la región; y estudia por separado la mitad izquierda y derecha de la parábola para los minimales.",
        steps:[
          "Dominio: x²−9≤0 ⇒ −3≤x≤3.",
          "Candidato a máximo: mayor x posible es 3, mayor y posible es 0. El punto (3,0) cumple x²−9=0≤y=0≤0, luego SÍ pertenece a D y domina a todos los demás puntos (x≤3, y≤0 siempre) → es el máximo.",
          "Candidato a mínimo: menor x es −3, menor y es −9 (en x=0). El punto (−3,−9) NO pertenece a D (en x=−3 solo vale y=0), así que no hay mínimo.",
          "Minimales: en la mitad izquierda de la parábola (−3≤x≤0), al aumentar x, y=x²−9 disminuye (se acerca a −9): son puntos incomparables entre sí y ninguno dominado → todos minimales.",
          "En la mitad derecha (0≤x≤3), todo punto (x, x²−9) está dominado por (0,−9) (0≤x y −9≤x²−9), así que ninguno de esos es minimal."
        ],
        answer:"Máx = Maximal = {(3,0)}. Mín = ∅. Minimales = {(x, x²−9) : −3 ≤ x ≤ 0}." },
      { id:"6-E", label:"E", stmt:"E = {(x,y) ∈ R² : |x| ≤ y ≤ 6 − x²}", hint:"Halla primero el dominio en x resolviendo |x| ≤ 6−x². La región queda entre la V de y=|x| (abajo) y la parábola y=6−x² (arriba). Comprueba si los puntos «ideales» pertenecen a la región, y estudia cada mitad de cada curva frontera por separado.",
        steps:[
          "Dominio: |x|≤6−x² ⇒ x²+|x|−6≤0 ⇒ (con t=|x|) t²+t−6≤0 ⇒ −3≤t≤2, y como t≥0: |x|≤2, es decir x∈[−2,2].",
          "Candidato a máximo: mayor x=2, mayor y=6 (en x=0). El punto (2,6) no pertenece a E (en x=2 la región exige y≤6−4=2), así que no hay máximo.",
          "Maximales (curva superior y=6−x²): para x∈[0,2] la parábola decrece al aumentar x → puntos incomparables, todos maximales. Para x∈[−2,0) la parábola crece al aumentar x → dominados por los de x∈[0,2], no son maximales.",
          "Candidato a mínimo: menor x=−2, menor y=0 (en x=0). El punto (−2,0) no pertenece a E (en x=−2 la región exige y≥2), así que no hay mínimo.",
          "Minimales (curva inferior y=|x|): para x∈[−2,0] la V decrece al aumentar x (se acerca a 0) → puntos incomparables, todos minimales. Para x∈(0,2] la V crece al aumentar x → dominados por los de x∈[−2,0] (en concreto por (0,0)), no son minimales."
        ],
        answer:"Máx = ∅. Maximales = {(x,6−x²): 0≤x≤2}. Mín = ∅. Minimales = {(x,|x|): −2≤x≤0}." },
  ]},
};
