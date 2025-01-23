---
title : Les Fondamentaux du HTML
description: Les principes de base du HTML.
sidebar:
  label: Les Fondamentaux
  order: 1
  badge:
    text: Cours 1
    variant: tip
---

## Principes de base du HTML
HTML est une norme définie par le **WHATWG**, un acronyme pour *Web Hypertext Application Technology Working Group*, une organisation formée par les personnes travaillant sur le navigateur web le plus populaire. Cela signifie qu'il est essentiellement contrôlé par Google, Mozilla, Apple et Microsoft.

Dans le passé, le **W3C** *(World Wide Web Consortium)* était l'organisation chargée de créer la norme HTML.

Le contrôle est officieusement passé du W3C au WHATWG lorsqu'il est apparu clairement que la poussée du W3C vers le XHTML n'était pas une bonne idée.

##Structure des pages HTML
Faisons un exemple d’une page HTML correcte.

Tout commence par la déclaration de type de document (appelée aussi *doctype*), une manière d’indiquer au navigateur qu’il s’agit d’une page HTML et de préciser la version d’HTML utilisée.

Le HTML moderne utilise ce doctype :

```html
<!DOCTYPE html>
```

Ensuite, nous avons l’élément ```HTML```, qui possède une balise ouvrante et une balise fermante :

```html
<!DOCTYPE html>
<html>
...
</html>
```

La plupart des balises vont par paires avec une balise ouvrante et une balise fermante. La balise fermante s’écrit de la même manière que la balise ouvrante, mais avec un ```/``` :

```html
<balise>some content</balise>
```

Il existe quelques balises auto-fermantes, ce qui signifie qu’elles n’ont pas besoin d’une balise fermante distincte, car elles ne contiennent rien en elles.

La balise ouvrante ```<html>``` est utilisée au début du document, juste après la déclaration du type de document.

La balise fermante ```</html>``` est la dernière chose présente dans un document HTML.

À l’intérieur de l’élément ```<html>```, nous trouvons deux éléments : ```<head>``` et ```<body>```.

```html
<!DOCTYPE html>

<html>
  <head>
	...
  </head>
  <body>
	...
  </body>
</html>
```

À l’intérieur de l’élément ```<head>```, nous trouverons des balises essentielles à la création d’une page web, comme le titre, les métadonnées, ainsi que des fichiers CSS et JavaScript internes ou externes. Ce sont principalement des éléments qui n’apparaissent pas directement sur la page, mais qui aident le navigateur (ou des robots comme celui de Google) à l’afficher correctement.

À l’intérieur de l’élément ```<body>```, nous aurons le contenu de la page, c’est-à-dire les éléments visibles.

## Balises vs Éléments
J’ai mentionné les balises *(tags)* et les éléments *(elements)*. Quelle est la différence ?

Les _éléments_ possèdent une balise ouvrante et une balise fermante.

Dans cet exemple, nous utilisons les balises ouvrante et fermante ```p``` pour créer un élément ```p``` :

```html
<p>Un paragraphe de texte</p>
```

Ainsi, un élément représente l’ensemble complet :

• Une balise ouvrante *(starting tag)*
• Un contenu textuel (et éventuellement d’autres éléments)
• Une balise fermante *(closing tag)*

Si un élément n’a pas de balise fermante, il est uniquement écrit avec la balise ouvrante et ne peut pas contenir de contenu textuel.

Cela dit, je peux utiliser les termes “balise” ou “élément” de manière interchangeable dans ce texte, sauf si je mentionne explicitement une balise ouvrante ou fermante.

## Attributs
La balise ouvrante d’un élément peut contenir des **attributs**, qui sont des informations supplémentaires associées à cet élément.

Les attributs suivent la syntaxe ```clé="valeur"```.

```html
<p class="a-class">Un paragraph de text</p>
```

%% Vous pouvez également utiliser des guillemets simples, mais l’utilisation de guillemets doubles en HTML est une bonne convention. %%

Nous pouvons en avoir plusieurs :

```html
<p class="a-class" id="an-id">Un paragraph de text</p>
```

Et certains attributs sont booléens, ce qui signifie que seule la clé est nécessaire :

```html
<script defer src="script.js"></script>
```

Les attributs ```class``` et ```id``` sont deux des plus couramment utilisés.

Ils ont une signification particulière et sont utiles à la fois en CSS et en JavaScript.

La différence entre les deux est qu’un id est unique dans le contexte d’une page web : il ne peut pas être dupliqué.

Les classes, en revanche, peuvent apparaître plusieurs fois sur plusieurs éléments.

De plus, un ```id``` ne peut contenir qu’une seule valeur, tandis qu’une ```class``` peut en contenir plusieurs, séparées par un espace :

```html
<p class="a-class another-class">Un paragraphe de texte</p>
```

Il est courant d’utiliser le tiret ```-``` pour séparer les mots dans une valeur de classe, mais ce n’est qu’une convention.

Ce ne sont que deux exemples des attributs possibles. Certains attributs sont spécifiques à une seule balise et sont très spécialisés.

D’autres attributs peuvent être utilisés de manière plus générale. Vous avez vu ```id``` et ```class```, mais il en existe d’autres, comme ```style```, qui permet d’insérer des règles CSS en ligne dans un élément.
