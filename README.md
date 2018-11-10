# bxb-site-builder

## Assets
Ce dossier regroupe l'ensemble des fichiers servant de près où de loin pour la conception du site : contenu texte, media, logos, maquettes, images ..

## Build
Il s'agit ici de la construction du site. C'est l'arbre qui permet de présenter le site.  
Il est copié (censé être) sur [bxb-space.github.io](https://github.com/bxb-space/bxb-space.github.io).  
S'il est construit ici et herbergé la-bas, c'est pour ne pas rendre accesible la source depuis l'url `bxb.space`

## Src
C'est le cousin de `Assets`, ces fichiers sont **reservés pour le développeur** et servent à la construction du site.  
S'y trouve un serveur écrit en `Go` permettant de générer le contenu de `/build` grâce à `/assets` et `/src`.

```sh
$ go run ./src/*.go
```
