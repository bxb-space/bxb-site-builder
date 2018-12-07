# Markdown cheatsheet

> [Comment écrire des titres ?](#titres)  
[Comment écrire des paragraphes ?](#paragraphes)  
[Comment écrire une liste ?](#listes)  
[Comment mettre en valeur des mots ?](#emphase)
[Comment dessiner un tableau ?](#tableaux)  
[Comment écrire des blocs de texte ?](#blocs)  
[Comment écrire des liens ?](#liens)  
[Comment ajouter des images ?](#images)  



### Titres
```
# Titre 1
## Titre 2
### Titre 3
#### Titre 4
##### Titre 5
```

> # Titre 1
> ## Titre 2
> ### Titre 3
> #### Titre 4
> ##### Titre 5

### Paragraphes
Un texte écrit seul est traité comme un paragraphe.  
```
Voici un paragraphe.
Les sauts de lignes ne sont pas pris en compte.  
Voici un second paragraphe.
Le saut de ligne est pris en compte, un nouveau paragraphe est créé.
```
Pour prendre en compte un saut de ligne et ainsi passer paragraphe suivant, il faut précéder le retour à la ligne de deux espaces ou plus.

```
Ceci est le premier paragraphe.  
Voici le second paragraphe. Il est plus long.  

La troisième ligne est comptée comme parapraphe entier
car elle contient deux espaces.
```

Ceci est le premier paragraphe.  
Voici le second paragraphe. 

**À retenir** : deux espaces terminent un paragraphe.

### Listes
Les listes peuvent etre numérotées ou non numérotées.  

Ces deux listes sont équivalentes, on peut utiliser `-, *, +` et `-`.
```
- element 1
- element 2
- element 3

* element 1
* element 2
* element 3
```


- element 1
- element 2
- element 3

Voici les listes numérotées :
```
1. element 1
2. element 2
3. element 3
```

1. element 1
2. element 2
3. element 3


### Emphase
#### Italique

```
Voici un texte en *italique*
```
Voici un texte en *italique*
#### Gras
```
Ce texte est en **gras**.
```
Ce texte est en **gras**.
#### Encadrement
```
Cette encadrement reste dans la ligne : `texte`.
```
Cette encadrement reste dans la ligne : `texte`.  
Pour encadrer un mot special, utilisé la plupart du temps pour encadrer un petit bout de code.

### Tableaux
```
| Col 1 | Col 2 | Col 3 |
|-------|-------|-------|
| Row 1 | Row 1 | Row 1 |
| Row 2 | Row 2 | Row 2 |

Voici le tableau minimal :
|||
|--|--|

```

| Col 1 | Col 2 | Col 3 |
|-------|-------|-------|
| Row 1 | Row 1 | Row 1 |
| Row 2 | Row 2 | Row 2 |

Trois tirets sont necessaires la seconde ligne pour faire un tableau minimal :

|||
|---|---|

### Blocs
```
> Ce paragraphe est un bloc.
> Il est possible d'y utiliser les *autres syntaxes*  également.  
> Voici un second paragraphe dans le bloc.
```
> Ce paragraphe est un bloc.
> Il est possible d'y utiliser les *autres syntaxes*  également.  
> Voici un second paragraphe dans le bloc.

### Liens
```md
[Je suis un lien hypertexte](https://www.google.com)
```
[Je suis un lien hypertexte](https://www.google.com)


### Images
```md
![description du texte](https://cdn.radiofrance.fr/s3/cruiser-production/2017/05/46b0db27-4627-4660-96ba-02ba7dad3cbb/838_planck.jpg)
```
![description du texte](https://cdn.radiofrance.fr/s3/cruiser-production/2017/05/46b0db27-4627-4660-96ba-02ba7dad3cbb/838_planck.jpg) 

La description du texte est utile uniquement pour le referencement web et les malvoyants.

