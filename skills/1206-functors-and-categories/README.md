# 🧠 Functors and Categories

En programación funcional, un functor es una estructura (como un array, un Maybe, o un Promise) que puede ser mapeada con una función sin perder su estructura.

Una categoría es un conjunto de objetos y morfismos (funciones entre objetos) que pueden ser compuestos. En programación, se relaciona con funciones que se pueden componer entre sí de manera predecible.

# 🔗 ¿Y qué es una Categoría?
En JavaScript, las categorías se relacionan con el principio de composición de funciones: si tenés f: A → B y g: B → C, entonces podés componer g(f(x)) → h: A → C.

Esto asegura que podés unir funciones pequeñas sin preocuparte por estructuras internas, mientras respetás la asociatividad.