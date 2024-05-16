# Comandos git.
## Configurar git.
### Configurar git globalmente.

```bash
    git config -–global user.name “mi nombre”
    git config -–global user.email “mi correo"
```
### Configurar git localmente.

```bash
    git config --local user.name “mi nombre”
    git config -–local user.email “mi correo"
```
#### Listar configuraciones.
```bash
    git config –list
    git config -l
```
#### Inicializar repositorio git.

```bash
    git init
```
#### Ver modificaciones archivo en el directorio de trabajo.

```bash
    git diff
```
### Agregar archivo área de preparación.

```bash
    git add
```
### Agregar archivo al repositorio.

```bash
    git commit -m
```
### Restaurar cambios en el directorio de trabajo.

```bash
    git restore “nombre archivo”
    git checkout “nombre archivo
```

### Restaurar cambios en el área de preparación.

```bash
    git reset “nombre del archivos”
    git reset HEAD
```

#### Listar commits.
```bash
    git log --oneline --decorate --graph
```
#### Ver diferencia dos commits.
```bash
    git diff commit-1 commit-2
```

### Eliminar commits repositorio local.
```bash
    git reset --soft HEAD~1
    git reset --hard HEAD~1
```
### Eliminar commits repositorio remoto.
```bash
    git revert HEAD
```
##### Se debe hace push.
### Eliminar commits repositorio remoto sin commit.
```bash
    git revert HEAD
    git revert --no-commit HEAD
    git revert –continue
```
```bash
    git revert --abort
```

##### Se debe hace push.

### Listar ramas locales, remotas.
```bash
    git branch
    git branch -a
```
### Crear rama.
```bash
    git branch nameNewBranch
```

### Moverme a una rama.
```bash
    git checkout nameBranch
```
### Crear rama y moverme.
```bash
    git checkout -b anothebranch
```
### Eliminar rama local.
```bash
    git branch -d branch_name
```
### Renombrar rama local.
```bash
    git branch -m oldname newname
```
### Eliminar rama remota
```bash
    git push origin --delete branch_name
```

### Fusionar ramas.
```bash
    git checkout main
    git merge branch_name
```
### Agregar repositorio remoto.
```bash
    git remote add origin https://github.com/CARLOSVILLERABEX/a.git
    git branch -M main
    git push -u origin main
```
### Listar origen remoto.
```bash
    git remote -v
```

### Listar origen remoto
```bash
    git remote -v
```
### Cambiar origen remoto.
```bash
    git remote set-url origin https://github.com/CARLOSVILLERABEX/a.git
```

# Clase tres
### Actualizar repositorio local desde el remoto.
```bash
    git tag <name>
```
### Crear etiqueta.
```bash
    git tag <name>
```
### Crear etiqueta anotada.
```bash
    git tag -a <name>
```
### Listar etiquetas.
```bash
    git tag 
    git tag -l "*0*"
```
### Eliminar etiquetas.
```bash
    git tag -d <name>
```
### Publicar etiquetas. 
```bash
    git push -u origin <name>
    git push --tags
```
## git stash.
```bash
    git stash
    git stash –path
    git stash save "custom name"
    git stash list
    git stash show
    git stash pop stash@{0}
    git stash apply stash@{0}
    git stash clear
    git stash branch test_2 stash@{0}
```
