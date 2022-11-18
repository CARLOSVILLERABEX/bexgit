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
### Fusionar ramas.
```bash
    git checkout main
    git merge branch_name
```
### Agregar repositorio remoto
```bash
    git remote add origin https://github.com/CARLOSVILLERABEX/a.git
    git branch -M main
    git push -u origin main
```