// Datos del Bloque 3 (ejercicios 7-17): funciones.
const DATA_BLOQUE3 = {
"78": { title:"Ej. 7-8", subtitle:"Dominio, imagen y composición.", items:[
  { id:"7a", stmt:"f(x)=1/x, g(x)=x²−1: dominio e imagen de cada una", hint:"El dominio de f excluye donde se anula el denominador. Para la imagen de f, piensa qué valores puede tomar 1/x. Para g, recuerda que x² solo toma valores ≥0.",
    steps:["f(x)=1/x: dominio = R−{0}. Cualquier valor no nulo se alcanza (despejando x=1/y), así que imagen = R−{0}.","g(x)=x²−1: dominio = R (no hay restricciones). Como x²≥0, se tiene x²−1≥−1, y se alcanza cualquier valor ≥−1: imagen = [−1,+∞)."],
    answer:"D(f)=R−{0}, Im(f)=R−{0}.  D(g)=R, Im(g)=[−1,+∞)." },
  { id:"7b", stmt:"Calcular f(g(2)) y g(f(2))", hint:"Sustituye de dentro hacia fuera: primero calcula el valor de la función interior, y luego aplica la exterior a ese resultado.",
    steps:["g(2) = 2²−1 = 3. Entonces f(g(2)) = f(3) = 1/3.","f(2) = 1/2. Entonces g(f(2)) = g(1/2) = (1/2)²−1 = 1/4−1 = −3/4."],
    answer:"f(g(2)) = 1/3.  g(f(2)) = −3/4." },
  { id:"7c", stmt:"Hallar las expresiones f(g(x)) y g(f(x))", hint:"Sustituye la fórmula completa de la función interior en la variable de la función exterior, y simplifica. No olvides el dominio: excluye los puntos donde la composición no está definida.",
    steps:["f(g(x)) = 1/g(x) = 1/(x²−1), con dominio x≠±1 (donde x²−1≠0).","g(f(x)) = f(x)²−1 = (1/x)²−1 = 1/x²−1, con dominio x≠0."],
    answer:"f(g(x)) = 1/(x²−1), x≠±1.   g(f(x)) = 1/x² − 1, x≠0." },
  { id:"8a", stmt:"h(x) = ln(sen x): dominio e imagen", hint:"El argumento del logaritmo debe ser estrictamente positivo: necesitas sen x > 0. Localiza en qué tramos de la recta real ocurre eso, y luego usa que en esos tramos sen x toma valores en (0,1] para deducir la imagen.",
    steps:["Dominio: sen x > 0 ⇔ x ∈ (2kπ, π+2kπ), k∈Z.","En ese dominio, sen x toma todos los valores del intervalo (0, 1].","Como ln es creciente, ln(sen x) toma todos los valores de (−∞, ln 1] = (−∞, 0]."],
    answer:"Dominio: ∪k (2kπ, π+2kπ).  Imagen: (−∞, 0]." },
  { id:"8b", stmt:"g(x) = ln(sen 2x): dominio e imagen", hint:"Igual que el apartado anterior pero con el argumento 2x: impón sen(2x)>0 y despeja x.",
    steps:["Dominio: sen(2x) > 0 ⇔ 2x ∈ (2kπ, π+2kπ) ⇔ x ∈ (kπ, π/2+kπ), k∈Z.","En ese dominio, sen(2x) toma valores en (0,1], igual que antes.","Imagen: (−∞, 0], igual razonamiento que en 8a."],
    answer:"Dominio: ∪k (kπ, π/2+kπ).  Imagen: (−∞, 0]." },
  { id:"8c", stmt:"h(x) = ln(−x²+4x−3): dominio e imagen", hint:"Impón que el argumento sea positivo: −x²+4x−3>0, equivalente a (x−1)(x−3)<0. Después, completa el cuadrado del argumento para hallar su valor máximo dentro del dominio, y así obtener la imagen.",
    steps:["−x²+4x−3>0 ⇔ x²−4x+3<0 ⇔ (x−1)(x−3)<0 ⇔ 1<x<3. Dominio = (1,3).","Completando el cuadrado: −x²+4x−3 = −(x−2)²+1. El máximo del argumento es 1 (en x=2), y se acerca a 0 en los extremos del intervalo (sin alcanzarlo).","El argumento toma valores en (0, 1], así que ln(argumento) toma valores en (−∞, ln 1] = (−∞, 0]."],
    answer:"Dominio: (1, 3).  Imagen: (−∞, 0]." },
]},
"9": { title:"Ej. 9", subtitle:"Transformaciones gráficas a partir de f(x)=x², eˣ, ln x, sen x.", items:[
  { id:"9i", stmt:"g(x) = f(x + 1)", hint:"Sumar dentro del paréntesis mueve la gráfica horizontalmente, y en sentido contrario al signo.", steps:["Es una traslación horizontal.","Como es f(x+1) (signo +), la gráfica se desplaza 1 unidad hacia la IZQUIERDA."], answer:"Traslación horizontal 1 unidad a la izquierda." },
  { id:"9ii", stmt:"h(x) = −2 f(x)", hint:"Combina dos transformaciones sobre el resultado de f: un cambio de signo y un factor multiplicativo.", steps:["El factor −1 refleja la gráfica respecto al eje horizontal (lo que estaba arriba pasa abajo, y viceversa).","El factor 2 estira verticalmente la gráfica, alejándola del eje X al doble de distancia."], answer:"Reflexión respecto al eje X + estiramiento vertical al doble." },
  { id:"9iii", stmt:"p(x) = f(3x)", hint:"Multiplicar la variable x por un número mayor que 1 antes de aplicar f comprime la gráfica horizontalmente.", steps:["Es una compresión horizontal.","La gráfica se \"encoge\" hacia el eje Y por un factor 3 (lo que antes ocurría en x, ahora ocurre en x/3)."], answer:"Compresión horizontal por un factor de 3." },
  { id:"9iv", stmt:"s(x) = f(x) + 1", hint:"Sumar fuera de f, al resultado, desplaza la gráfica verticalmente.", steps:["Es una traslación vertical.","Se desplaza 1 unidad hacia ARRIBA."], answer:"Traslación vertical 1 unidad hacia arriba." },
  { id:"9v", stmt:"r(x) = |f(x)|", hint:"El valor absoluto actúa sobre el resultado de f, no sobre x: piensa en qué le pasa a la parte de la gráfica que está por debajo del eje X.", steps:["Donde f(x)≥0, la gráfica de r coincide con la de f (no cambia).","Donde f(x)<0, se refleja hacia arriba (como un espejo en el eje X), quedando siempre r(x)≥0."], answer:"Se refleja hacia arriba la parte de la gráfica que estaba por debajo del eje X." },
  { id:"9vi", stmt:"m(x) = f(|x|)", hint:"Aquí el valor absoluto está dentro, afectando a la variable x antes de aplicar f: piensa qué pasa con la parte de la gráfica de x negativas.", steps:["Para x≥0: m(x)=f(x), igual que la función original.","Para x<0: m(x)=f(−x) = el valor que f tomaba en el punto positivo correspondiente. Se borra la parte con x<0 y se copia (reflejada respecto al eje Y) la parte con x≥0.","El resultado es siempre una función PAR."], answer:"Se descarta la mitad izquierda y se sustituye por el reflejo de la mitad derecha (función resultante par)." },
]},
"1011": { title:"Ej. 10-11", subtitle:"Monotonía y composición de funciones (f, g crecientes en I, o monótonas en R).", items:[
  { id:"10a", stmt:"f+g : I→R es creciente", hint:"Aplica directamente la definición de creciente a la suma, sumando las dos desigualdades.", steps:["Para x1<x2: f(x1)≤f(x2) y g(x1)≤g(x2) (ambas crecientes).","Sumando ambas desigualdades: f(x1)+g(x1) ≤ f(x2)+g(x2), es decir (f+g)(x1)≤(f+g)(x2)."], answer:"VERDADERA (la suma de crecientes es creciente)." },
  { id:"10b", stmt:"f·g : I→R es creciente", hint:"El producto de dos crecientes no siempre es creciente: prueba con funciones que tomen valores negativos.", steps:["Contraejemplo: en I=(−2,−1), f(x)=g(x)=x son crecientes.","Pero (f·g)(x) = x², que en ese intervalo es DECRECIENTE (al acercarse a 0 desde valores negativos, x² disminuye)."], answer:"FALSA en general (depende del signo de f y g)." },
  { id:"10c", stmt:"f−g : I→R es creciente si ambas son positivas", hint:"Que ambas sean positivas no basta: importa la rapidez relativa con la que crecen. Prueba con dos rectas de distinta pendiente.", steps:["Contraejemplo: en I=(1,10), f(x)=x y g(x)=2x son crecientes y positivas.","(f−g)(x) = x−2x = −x, que es DECRECIENTE."], answer:"FALSA (la positividad no garantiza que f−g sea creciente)." },
  { id:"10d", stmt:"f−g : I→R es creciente si ambas son negativas", hint:"Mismo tipo de contraejemplo que el apartado anterior, ahora con valores negativos.", steps:["Contraejemplo: en I=(−10,−1), f(x)=x y g(x)=2x son crecientes y negativas.","(f−g)(x) = x−2x = −x, que es DECRECIENTE."], answer:"FALSA (misma razón que en el apartado c)." },
  { id:"11", stmt:"g∘f creciente o decreciente según la monotonía de f y g (4 casos)", hint:"Usa el resultado clave: igual monotonía da composición creciente, distinta monotonía da composición decreciente (como multiplicar signos + y −).",
    steps:["f creciente y g creciente ⇒ g∘f CRECIENTE.","f creciente y g decreciente ⇒ g∘f DECRECIENTE.","f decreciente y g creciente ⇒ g∘f DECRECIENTE.","f decreciente y g decreciente ⇒ g∘f CRECIENTE."],
    answer:"Mismo sentido (+,+ o −,−) ⇒ creciente. Sentido distinto (+,− o −,+) ⇒ decreciente." },
]},
"1213": { title:"Ej. 12-13", subtitle:"Restringir a intervalos biyectivos y calcular funciones inversas.", items:[
  { id:"12a", stmt:"f(x) = x²: hallar I, J para que f:I→J sea biyectiva", hint:"x² no es inyectiva en todo R (valores opuestos dan la misma imagen). Restringe a la parte donde es estrictamente monótona.", steps:["Restringiendo a I=[0,+∞), f es estrictamente creciente y por tanto inyectiva.","La imagen correspondiente es J=[0,+∞)."], answer:"I = [0, +∞), J = [0, +∞)  (también válido I=(−∞,0])." },
  { id:"12b", stmt:"g(x) = ln|x|: hallar I, J", hint:"El dominio natural es x≠0, pero |x| hace que g sea simétrica (par), luego no inyectiva en todo el dominio. Restringe a x>0.", steps:["Para x>0: ln|x|=ln x, estrictamente creciente, inyectiva.","Su imagen recorre todo R (ln x cubre todos los reales cuando x recorre (0,+∞))."], answer:"I = (0, +∞), J = R." },
  { id:"12c", stmt:"h(x) = sen x: hallar I, J", hint:"sen x es periódica, no inyectiva en R. Elige la rama estrictamente creciente centrada en el origen, la más habitual.", steps:["En I=[−π/2, π/2], sen x es estrictamente creciente, de −1 a 1."], answer:"I = [−π/2, π/2], J = [−1, 1]." },
  { id:"12d", stmt:"i(x) = e^(−x²): hallar I, J", hint:"Es una función par con un máximo en x=0 (no monótona en R). Restringe a x≥0, donde es estrictamente decreciente.", steps:["En I=[0,+∞), a medida que x crece, x² crece y e^(−x²) decrece: es estrictamente decreciente.","En x=0 vale 1 (máximo); al crecer x hacia +∞, e^(−x²) se acerca a 0 sin alcanzarlo."], answer:"I = [0, +∞), J = (0, 1]." },
  { id:"13f", stmt:"f(x) = (x³ − 5)⁵: calcular f⁻¹", hint:"Despeja x en y=(x³−5)⁵ deshaciendo las operaciones en orden inverso: primero la potencia 5 (con raíz quinta), luego el −5, luego la potencia cúbica (con raíz cúbica).", steps:["y = (x³−5)⁵ ⇒ ⁵√y = x³−5 ⇒ x³ = ⁵√y + 5 ⇒ x = ∛(⁵√y + 5).","Cambiando y por x: f⁻¹(x) = ∛(⁵√x + 5)."], answer:"f⁻¹(x) = ∛(⁵√x + 5)" },
  { id:"13g", stmt:"g(x) = (∛x − 5)⁵: calcular g⁻¹", hint:"Mismo método que el apartado anterior, pero deshaciendo las operaciones en el orden en que aparecen aquí: primero la potencia 5, luego el −5, luego la raíz cúbica.", steps:["y = (∛x − 5)⁵ ⇒ ⁵√y = ∛x − 5 ⇒ ∛x = ⁵√y + 5 ⇒ x = (⁵√y + 5)³.","Cambiando y por x: g⁻¹(x) = (⁵√x + 5)³."], answer:"g⁻¹(x) = (⁵√x + 5)³" },
  { id:"13h", stmt:"h(x) = ln((x−1)/(x−2)): calcular h⁻¹", hint:"Aplica la exponencial en ambos lados para deshacer el logaritmo, y luego despeja x de la ecuación racional resultante.", steps:["y = ln((x−1)/(x−2)) ⇒ eʸ = (x−1)/(x−2)","eʸ(x−2) = x−1 ⇒ eʸ·x − 2eʸ = x − 1 ⇒ x(eʸ−1) = 2eʸ−1","x = (2eʸ−1)/(eʸ−1)"], answer:"h⁻¹(x) = (2eˣ−1)/(eˣ−1)" },
  { id:"13i", stmt:"i(x) = (3x−1)/(x−3): calcular i⁻¹", hint:"Despeja x de la ecuación y(x−3)=3x−1 agrupando los términos con x en un lado.", steps:["y(x−3) = 3x−1 ⇒ yx − 3y = 3x − 1 ⇒ x(y−3) = 3y−1 ⇒ x = (3y−1)/(y−3)"], answer:"i⁻¹(x) = (3x−1)/(x−3)  (¡i es su propia inversa!)" },
  { id:"13j", stmt:"j(x) definida a trozos: x+3 en [−3,0], −2x en (0,3]: calcular j⁻¹", hint:"Invierte cada trozo por separado y calcula el rango (la imagen) de cada uno: ese rango es el dominio del trozo correspondiente de la inversa.", steps:["Trozo 1: y=x+3 en [−3,0], rango y∈[0,3]. Despejando: x=y−3.","Trozo 2: y=−2x en (0,3], rango y∈[−6,0) (decreciente). Despejando: x=−y/2.","Uniendo ambos trozos según el rango de y obtenido."], answer:"j⁻¹(x) = x−3 si 0≤x≤3;  j⁻¹(x) = −x/2 si −6≤x<0" },
]},
"1415": { title:"Ej. 14-15", subtitle:"Paridad de funciones y demostraciones con funciones pares/impares.", items:[
  { id:"14a", stmt:"f(x) = cos(5x)", hint:"cos es una función par: cos(−t)=cos(t) para cualquier t.", steps:["f(−x) = cos(5·(−x)) = cos(−5x) = cos(5x) = f(x)."], answer:"PAR", good:true },
  { id:"14b", stmt:"g(x) = sen(2x)", hint:"sen es una función impar: sen(−t)=−sen(t).", steps:["g(−x) = sen(−2x) = −sen(2x) = −g(x)."], answer:"IMPAR", good:false },
  { id:"14c", stmt:"h(x) = cos(5x)·sen(2x)", hint:"Es un producto de una función par (14a) por una impar (14b). Recuerda la regla par × impar = impar.", steps:["h(−x) = cos(5x)·(−sen(2x)) = −(cos(5x)sen(2x)) = −h(x)."], answer:"IMPAR (par × impar = impar)", good:false },
  { id:"14d", stmt:"k(x) = x² / (x²+1)", hint:"Tanto el numerador como el denominador dependen solo de x²: sustituir −x no cambia nada.", steps:["k(−x) = (−x)²/((−x)²+1) = x²/(x²+1) = k(x)."], answer:"PAR", good:true },
  { id:"14e", stmt:"l(x) = x³ / (x⁴+1)", hint:"El numerador es impar (x³) y el denominador es par (x⁴+1): impar/par = impar.", steps:["l(−x) = (−x)³/((−x)⁴+1) = −x³/(x⁴+1) = −l(x)."], answer:"IMPAR", good:false },
  { id:"14f", stmt:"m(x) = x³ / (x⁵+1)", hint:"Antes de mirar la simetría, comprueba el DOMINIO: ¿es simétrico respecto a 0? Calcula dónde se anula x⁵+1.", steps:["El denominador se anula en x=−1 (pues (−1)⁵+1=0), pero NO en x=1 (1⁵+1=2≠0).","El dominio es R−{−1}, que NO es simétrico respecto a 0 (contiene 1 pero no −1).","Al no ser el dominio simétrico, la función no puede ser ni par ni impar, sin necesidad de más comprobación."], answer:"NI PAR NI IMPAR (el dominio no es simétrico)", good:false },
  { id:"14g", stmt:"n(x) = arctan(x) / x", hint:"arctan es impar y x es impar: impar/impar = par.", steps:["n(−x) = arctan(−x)/(−x) = (−arctan x)/(−x) = arctan(x)/x = n(x)."], answer:"PAR", good:true },
  { id:"15-1", stmt:"Con f par y g impar, demostrar: |g| es par, f∘g es par, g∘f es par", hint:"Sustituye −x en cada expresión y usa que f(−t)=f(t) y g(−t)=−g(t).", steps:[
      "|g|: |g(−x)| = |−g(x)| = |g(x)| (el valor absoluto elimina el signo) → par.",
      "f∘g: (f∘g)(−x) = f(g(−x)) = f(−g(x)) = f(g(x)) [porque f es par] = (f∘g)(x) → par.",
      "g∘f: (g∘f)(−x) = g(f(−x)) = g(f(x)) [porque f es par, no hace falta usar la paridad de g] = (g∘f)(x) → par."
    ], answer:"Las tres demostraciones se basan en que f(−t)=f(t) y en que el valor absoluto borra el signo." },
  { id:"15-2", stmt:"Demostrar: f·g es impar; gᵏ es par si k es par, impar si k es impar", hint:"Para f·g, sustituye −x y usa que f es par y g impar. Para gᵏ, saca el signo (−1)ᵏ fuera de la potencia.", steps:[
      "f·g: (f·g)(−x) = f(−x)·g(−x) = f(x)·(−g(x)) = −(f(x)g(x)) = −(f·g)(x) → impar.",
      "gᵏ con k par: (gᵏ)(−x) = (g(−x))ᵏ = (−g(x))ᵏ = g(x)ᵏ (el signo negativo elevado a potencia par da positivo) → par.",
      "gᵏ con k impar: (gᵏ)(−x) = (−g(x))ᵏ = −g(x)ᵏ (el signo negativo elevado a potencia impar se conserva) → impar."
    ], answer:"Se basa en la regla de signos de una potencia: (−1)ᵏ = 1 si k par, −1 si k impar." },
]},
"1617": { title:"Ej. 16-17", subtitle:"Periodicidad de funciones.", items:[
  { id:"16a", stmt:"f(x) = sen(4x): hallar el periodo", hint:"sen(x) tiene periodo 2π. Aplica la fórmula p/|c| con c=4.", steps:["Periodo de sen(x): 2π.","Aquí c=4, así que el periodo de sen(4x) es 2π/4 = π/2."], answer:"Periodo = π/2" },
  { id:"16b", stmt:"g(x) = tg(x/3): hallar el periodo", hint:"tg(x) tiene periodo π. Aquí el coeficiente que multiplica a x es c=1/3.", steps:["Periodo de tg(x): π.","Aquí c=1/3, así que el periodo es π/|1/3| = 3π."], answer:"Periodo = 3π" },
  { id:"16c", stmt:"l(x) = sen(3x + 2): hallar el periodo", hint:"El +2 es un desplazamiento de fase (horizontal), no afecta al periodo: solo importa el coeficiente que multiplica a x.", steps:["Periodo de sen(x): 2π.","El coeficiente de x es c=3 (el +2 no cambia el periodo).","Periodo = 2π/3."], answer:"Periodo = 2π/3" },
  { id:"17-1", stmt:"f cualquiera, g periódica: ¿son f∘g y g∘f siempre periódicas?", hint:"Demuestra directamente que (f∘g)(x+p)=(f∘g)(x) usando solo que g es periódica. Para g∘f, intenta encontrar un contraejemplo con f no periódica.",
    steps:[
      "f∘g SIEMPRE es periódica: si g tiene periodo p, entonces (f∘g)(x+p) = f(g(x+p)) = f(g(x)) = (f∘g)(x), para cualquier f.",
      "g∘f NO tiene por qué ser periódica: contraejemplo, f(x)=x² (no periódica) y g(x)=sen(x) (periódica). (g∘f)(x)=sen(x²), que NO es periódica (la 'frecuencia' de oscilación crece sin límite)."
    ],
    answer:"f∘g: SIEMPRE periódica. g∘f: NO necesariamente (depende de f)." },
  { id:"17-2", stmt:"Justificar que f(x) = (tg²(3x) + ln(tg(3x))) / (1 + tg(3x)) es periódica", hint:"Identifica la parte interior: toda la expresión depende de x solo a través de tg(3x). Usa el resultado del apartado anterior: F∘g es periódica si g lo es, sea F la función que sea.",
    steps:[
      "Llama u(x) = tg(3x). Es periódica: tg tiene periodo π, y con c=3 el periodo de u es π/3.",
      "La función dada es f(x) = F(u(x)), donde F(t) = (t² + ln t)/(1+t) es una función fija que no depende de x más que a través de u.",
      "Por el resultado del apartado 17-1 (F∘g es siempre periódica cuando g lo es, sin importar F), f es periódica, con periodo π/3 (o un divisor de π/3)."
    ],
    answer:"f es periódica, de periodo π/3 (la periodicidad viene de u(x)=tg(3x), sea cual sea F)." },
]},
};
