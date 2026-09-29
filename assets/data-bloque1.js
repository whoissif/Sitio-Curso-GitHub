const DATA_BLOQUE1 = {
  1: {
    title: "Ejercicio 1",
    subtitle: "Resolver cada desigualdad y describir el conjunto solución.",
    items: [
      { id:"1a", stmt:"|9 − 2x| ≤ 1",
        hint:"Es del tipo |a| ≤ p. Aplica −1 ≤ 9−2x ≤ 1 y despeja x en la cadena doble; recuerda invertir el sentido al dividir entre −2.",
        steps:[
          "−1 ≤ 9 − 2x ≤ 1",
          "Resta 9 en los tres miembros: −10 ≤ −2x ≤ −8",
          "Divide entre −2 (se invierte el sentido): 5 ≥ x ≥ 4",
          "Reordenando: 4 ≤ x ≤ 5"
        ],
        answer:"x ∈ [4, 5]" },
      { id:"1b", stmt:"−5|x + 3| ≤ 4x − 5",
        hint:"Hay una incógnita fuera y otra dentro del valor absoluto, así que no puedes usar la propiedad 7 directamente: define casos según el signo de x+3 (punto de quiebre x = −3) y resuelve cada tramo como una desigualdad lineal normal.",
        steps:[
          "Caso x ≥ −3: |x+3| = x+3. Sustituyendo: −5(x+3) ≤ 4x−5 → −5x−15 ≤ 4x−5 → −10 ≤ 9x → x ≥ −10/9. Combinado con x ≥ −3: x ≥ −10/9.",
          "Caso x < −3: |x+3| = −x−3. Sustituyendo: −5(−x−3) ≤ 4x−5 → 5x+15 ≤ 4x−5 → x ≤ −20. Combinado con x < −3: x ≤ −20.",
          "Unión de los dos casos."
        ],
        answer:"x ∈ (−∞, −20] ∪ [−10/9, +∞)" },
      { id:"1c", stmt:"|x| / 3 + 2 ≤ |x|",
        hint:"No hay que separar en casos: agrupa todos los términos con |x| en un lado. Queda una desigualdad lineal directa en la variable |x|.",
        steps:[
          "Pasa |x|/3 al otro lado: 2 ≤ |x| − |x|/3",
          "Simplifica: 2 ≤ (2/3)|x|",
          "Multiplica por 3/2: |x| ≥ 3",
          "Aplica la propiedad |a| ≥ p: x ≤ −3 ∨ x ≥ 3"
        ],
        answer:"x ∈ (−∞, −3] ∪ [3, +∞)" },
      { id:"1d", stmt:"1 ≤ |3 − 2x|",
        hint:"Es del tipo |a| ≥ p: se transforma en dos desigualdades separadas por «o», que resuelves por separado.",
        steps:[
          "|3 − 2x| ≥ 1  ⇒  3 − 2x ≥ 1  ∨  3 − 2x ≤ −1",
          "Primera: 3 − 2x ≥ 1 → −2x ≥ −2 → x ≤ 1",
          "Segunda: 3 − 2x ≤ −1 → −2x ≤ −4 → x ≥ 2",
          "Unión de ambas soluciones."
        ],
        answer:"x ∈ (−∞, 1] ∪ [2, +∞)" },
      { id:"1e", stmt:"(x² − 16)(x − 1) / (x − 3) ≥ 0",
        hint:"No lleva valor absoluto: es el método de los signos. Factoriza x²−16 = (x−4)(x+4), localiza los puntos donde cada factor cambia de signo (incluida la x=3 del denominador, que queda excluida del dominio) y estudia el signo del cociente en cada tramo.",
        steps:[
          "Factoriza: (x−4)(x+4)(x−1) / (x−3) ≥ 0, con x ≠ 3.",
          "Puntos críticos, ordenados: −4, 1, 3, 4.",
          "Estudia el signo en cada intervalo probando un punto: (−∞,−4) positivo · (−4,1) negativo · (1,3) positivo · (3,4) negativo · (4,+∞) positivo.",
          "Incluye los ceros del numerador (−4, 1, 4) porque la desigualdad es ≥, y excluye x = 3 por anular el denominador."
        ],
        answer:"x ∈ (−∞, −4] ∪ [1, 3) ∪ [4, +∞)" },
      { id:"1f", stmt:"|x − 3| + |x + 3| ≤ 10",
        hint:"Dos valores absolutos con puntos de quiebre distintos (x=3 y x=−3): divide R en tres tramos (x<−3, −3≤x≤3, x>3) y sustituye cada valor absoluto por su expresión sin barras en cada tramo.",
        steps:[
          "x < −3: |x−3|=3−x, |x+3|=−x−3. Suma = −2x. La desigualdad −2x ≤ 10 da x ≥ −5. Con x<−3: −5 ≤ x < −3.",
          "−3 ≤ x ≤ 3: |x−3|=3−x, |x+3|=x+3. Suma = 6, constante. Como 6 ≤ 10 siempre, todo el tramo es solución.",
          "x > 3: |x−3|=x−3, |x+3|=x+3. Suma = 2x. La desigualdad 2x ≤ 10 da x ≤ 5. Con x>3: 3 < x ≤ 5.",
          "Unión de los tres tramos."
        ],
        answer:"x ∈ [−5, 5]" },
      { id:"1g", stmt:"|x − 3| + |x + 3| ≤ k,  k ∈ R",
        hint:"Es el mismo ejercicio que el anterior pero con un parámetro k: repite el mismo razonamiento por tramos, sabiendo que la suma mínima posible de |x−3|+|x+3| es 6 (la distancia entre −3 y 3). Discute según si k es menor, igual o mayor que ese mínimo.",
        steps:[
          "El valor mínimo de |x−3|+|x+3| es 6, alcanzado para todo x ∈ [−3,3] (la suma de distancias a −3 y a 3 nunca baja de la distancia entre ambos puntos).",
          "Si k < 6: ninguna x puede cumplir la desigualdad → conjunto vacío.",
          "Si k = 6: solo el tramo central cumple la igualdad → solución [−3, 3].",
          "Si k > 6: repitiendo el razonamiento del apartado f) con k en vez de 10, se obtiene el intervalo simétrico [−k/2, k/2]."
        ],
        answer:"k < 6 ⇒ ∅  ·  k ≥ 6 ⇒ x ∈ [−k/2, k/2]" },
      { id:"1h", stmt:"|(x − 1)/x| − 1 ≥ 0",
        hint:"Aísla el valor absoluto: queda |(x−1)/x| ≥ 1. Aplica la propiedad |a|≥p (dos casos, unidos por «o») y resuelve cada inecuación racional resultante con el método de los signos. No olvides excluir x=0 del dominio.",
        steps:[
          "Aísla: |(x−1)/x| ≥ 1, con x ≠ 0.",
          "Caso (x−1)/x ≥ 1: (x−1)/x − 1 ≥ 0 → (x−1−x)/x ≥ 0 → −1/x ≥ 0 → x < 0.",
          "Caso (x−1)/x ≤ −1: (x−1)/x + 1 ≤ 0 → (2x−1)/x ≤ 0 → por el método de los signos (puntos críticos 0 y 1/2): 0 < x ≤ 1/2.",
          "Unión de los dos casos (x=0 queda excluido por el dominio)."
        ],
        answer:"x ∈ (−∞, 0) ∪ (0, 1/2]" },
    ]
  },
  2: {
    title: "Ejercicio 2",
    subtitle: "Interpretar geométricamente las desigualdades a), b), c) y d) del ejercicio 1.",
    items: [
      { id:"2a", stmt:"y = |9 − 2x| ;  y = 1",
        hint:"Dibuja la V de y=|9−2x| (vértice en x=4.5) y la recta horizontal y=1. La solución de |9−2x|≤1 es el tramo de x donde la V queda por debajo o toca la recta.",
        steps:[
          "La gráfica de y=|9−2x| es una V con vértice en (4.5, 0), abierta hacia arriba.",
          "La recta y=1 es horizontal, a la altura 1.",
          "La V corta a la recta exactamente en los puntos donde |9−2x|=1, es decir en x=4 y x=5 (los mismos valores obtenidos algebraicamente).",
          "Entre esos dos cortes, la V está por debajo de la recta: ese tramo es la solución visual de |9−2x| ≤ 1."
        ],
        answer:"Coincide con la solución algebraica: x ∈ [4, 5]" },
      { id:"2b", stmt:"y = −5|x + 3| ;  y = 4x − 5",
        hint:"y=−5|x+3| es una V invertida (abre hacia abajo) con vértice en (−3,0). y=4x−5 es una recta creciente. Localiza dónde la V queda por debajo o toca la recta.",
        steps:[
          "y=−5|x+3| tiene su punto más alto (el vértice) en (−3, 0) y desciende rápidamente a ambos lados.",
          "y=4x−5 es una recta con pendiente positiva que cruza el eje Y en −5.",
          "Los puntos de corte entre ambas curvas son las soluciones de la ecuación asociada, que coinciden con los extremos hallados algebraicamente: x=−20 y x=−10/9.",
          "La V queda por debajo de la recta fuera del tramo (−20, −10/9): son dos ramas separadas, no un único intervalo."
        ],
        answer:"Coincide con la solución algebraica: x ∈ (−∞, −20] ∪ [−10/9, +∞)" },
      { id:"2c", stmt:"y = |x| / 3 + 2 ;  y = |x|",
        hint:"Ambas son V con vértice en el origen, pero |x|/3+2 es más abierta y está desplazada 2 unidades hacia arriba, mientras que |x| es más cerrada (crece más rápido). Busca dónde la segunda alcanza o supera a la primera.",
        steps:[
          "y=|x|/3+2 tiene pendientes ±1/3 y corta el eje Y en (0,2).",
          "y=|x| tiene pendientes ±1, más pronunciada, y pasa por el origen.",
          "Cerca del origen, |x| queda por debajo de |x|/3+2 (la V pronunciada está \"dentro\"). Al alejarse del origen, |x| crece más rápido y acaba superando a la otra V.",
          "El cruce ocurre en |x|=3, es decir en x=±3, coincidiendo con la solución algebraica."
        ],
        answer:"Coincide con la solución algebraica: x ∈ (−∞, −3] ∪ [3, +∞)" },
      { id:"2d", stmt:"y = 1 ;  y = |3 − 2x|",
        hint:"y=1 es una recta horizontal. y=|3−2x| es una V con vértice en x=1.5. La desigualdad 1 ≤ |3−2x| pide dónde la V está por encima o toca la recta.",
        steps:[
          "y=|3−2x| tiene su vértice (mínimo) en (1.5, 0).",
          "La recta y=1 corta a la V en los puntos donde |3−2x|=1, es decir x=1 y x=2 (coinciden con la solución algebraica).",
          "Cerca del vértice (entre x=1 y x=2) la V está por debajo de la recta; fuera de ese tramo, la V sube por encima de la recta.",
          "La solución de 1 ≤ |3−2x| es, por tanto, la parte exterior a ese tramo central."
        ],
        answer:"Coincide con la solución algebraica: x ∈ (−∞, 1] ∪ [2, +∞)" },
    ]
  },
  3: {
    title: "Ejercicio 3",
    subtitle: "Para cada afirmación (x, y ∈ R), decide si es siempre cierta o falsa.",
    items: [
      { id:"3a", stmt:"|x + y| ≤ |x| + |y|",
        hint:"Es exactamente la desigualdad triangular (propiedad 6). No hace falta demostrarla de nuevo: es un resultado básico de teoría.",
        steps:[ "Es la desigualdad triangular, válida siempre para cualesquiera x, y ∈ R." ],
        answer:"VERDADERA (es la propiedad 6 del valor absoluto)", good:true },
      { id:"3b", stmt:"|x| + |y| ≤ |x + y|",
        hint:"Es la desigualdad contraria a la triangular. Busca un contraejemplo sencillo con signos opuestos.",
        steps:[ "Contraejemplo: x=1, y=−1 → |x|+|y| = 1+1 = 2, mientras que |x+y| = |0| = 0. Como 2 ≤ 0 es falso, la afirmación no se cumple en general." ],
        answer:"FALSA (contraejemplo: x=1, y=−1)", good:false },
      { id:"3g", stmt:"|x − y| ≤ |x| + |y|",
        hint:"Aplica la desigualdad triangular a x + (−y), ya que |x−y| = |x + (−y)|.",
        steps:[ "|x − y| = |x + (−y)| ≤ |x| + |−y| = |x| + |y|, por la desigualdad triangular aplicada a x y −y." ],
        answer:"VERDADERA (triangular aplicada a x y −y)", good:true },
      { id:"3c", stmt:"|x − y| ≤ |x| − |y|",
        hint:"Fíjate en que el lado derecho puede ser negativo aunque el izquierdo nunca lo es. Prueba con |y| > |x|.",
        steps:[ "Contraejemplo: x=1, y=2 → |x−y| = |−1| = 1, mientras que |x|−|y| = 1−2 = −1. Como 1 ≤ −1 es falso, la afirmación no se cumple en general." ],
        answer:"FALSA (contraejemplo: x=1, y=2)", good:false },
      { id:"3d", stmt:"|x| − |y| ≤ |x − y|",
        hint:"Escribe x = (x−y) + y y aplica la desigualdad triangular a esa suma.",
        steps:[ "|x| = |(x−y) + y| ≤ |x−y| + |y| (triangular), y pasando |y| al otro lado: |x| − |y| ≤ |x−y|." ],
        answer:"VERDADERA (consecuencia directa de la triangular)", good:true },
      { id:"3h", stmt:"|x| + |y| ≤ |x − y|",
        hint:"Compárala con la triangular en su forma habitual: suele ir en sentido contrario. Prueba con dos valores iguales.",
        steps:[ "Contraejemplo: x=1, y=1 → |x|+|y| = 2, mientras que |x−y| = |0| = 0. Como 2 ≤ 0 es falso, la afirmación no se cumple en general." ],
        answer:"FALSA (contraejemplo: x=1, y=1)", good:false },
      { id:"3e", stmt:"||x| − |y|| ≤ |x| + |y|",
        hint:"||x|−|y|| nunca puede superar a |x|+|y|, porque ambos términos de la resta ya están acotados por la suma. Compruébalo con la desigualdad triangular en ambos sentidos.",
        steps:[ "Por la triangular: |x| = |(x−y)+y| ≤ |x−y|+|y|, y de forma simétrica |y| ≤ |y−x|+|x|. Esto acota |x|−|y| entre −(|x|+|y|) y |x|+|y|, es decir ||x|−|y|| ≤ |x|+|y|." ],
        answer:"VERDADERA (se deduce de la triangular en ambos sentidos)", good:true },
      { id:"3f", stmt:"|x| + |y| ≤ ||x| − |y||",
        hint:"Es la desigualdad opuesta a la del apartado e). Un contraejemplo simple con dos valores iguales basta.",
        steps:[ "Contraejemplo: x=1, y=1 → |x|+|y| = 2, mientras que ||x|−|y|| = |0| = 0. Como 2 ≤ 0 es falso, la afirmación no se cumple en general." ],
        answer:"FALSA (contraejemplo: x=1, y=1)", good:false },
      { id:"3i", stmt:"||x| − |y|| ≤ |x| − |y|",
        hint:"El lado izquierdo nunca es negativo, pero el derecho sí puede serlo. Solo se cumple cuando |x| ≥ |y|; busca un contraejemplo con |y| > |x|.",
        steps:[ "Contraejemplo: x=1, y=2 → ||x|−|y|| = |−1| = 1, mientras que |x|−|y| = −1. Como 1 ≤ −1 es falso, la afirmación no se cumple en general (solo sería cierta si |x| ≥ |y|)." ],
        answer:"FALSA en general (contraejemplo: x=1, y=2)", good:false },
    ]
  },
  4: {
    title: "Ejercicio 4",
    subtitle: "Discutir la verdad o falsedad de cada afirmación (x, y ∈ R).",
    items: [
      { id:"4a", stmt:"x ≤ y  ⇒  x² ≤ y²",
        hint:"El orden habitual no se conserva al elevar al cuadrado cuando hay números negativos de por medio. Prueba con x negativo e y positivo pequeño.",
        steps:[ "Contraejemplo: x=−3, y=1 → x ≤ y se cumple (−3 ≤ 1), pero x²=9 e y²=1, y 9 ≤ 1 es falso." ],
        answer:"FALSA (solo es cierta si además 0 ≤ x, o en general si 0 ≤ x ≤ y)", good:false },
      { id:"4b", stmt:"|x| ≤ |y|  ⇒  x² ≤ y²",
        hint:"Aquí ya partimos de valores absolutos, que son no negativos: elevar al cuadrado una desigualdad entre números no negativos sí conserva el orden. Relaciónalo con x²=|x|².",
        steps:[ "Como |x|, |y| ≥ 0, elevar al cuadrado conserva el orden: |x| ≤ |y| ⇒ |x|² ≤ |y|².", "Y como |x|²=x² y |y|²=y², se obtiene x² ≤ y²." ],
        answer:"VERDADERA", good:true },
      { id:"4c", stmt:"x² ≤ y²  ⇒  x ≤ y",
        hint:"x²≤y² solo habla de las distancias al origen, no del orden real. Prueba con un x positivo mayor que un y negativo.",
        steps:[ "Contraejemplo: x=2, y=−3 → x²=4, y²=9, y 4 ≤ 9 se cumple, pero x ≤ y sería 2 ≤ −3, que es falso." ],
        answer:"FALSA", good:false },
      { id:"4d", stmt:"x² ≤ y²  ⇒  |x| ≤ |y|",
        hint:"Es exactamente la propiedad 5 del valor absoluto vista en teoría: relaciona cuadrados con valores absolutos, no con el orden directo de x e y.",
        steps:[ "Es la propiedad 5 de la teoría: si a² ≤ b², entonces |a| ≤ |b|. Aplicada directamente con a=x, b=y." ],
        answer:"VERDADERA (propiedad 5 del valor absoluto)", good:true },
    ]
  }
};
