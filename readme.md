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

#### Listar commits
```bash
    git log --oneline --decorate --graph
```
#### Ver diferencia dos commits
```bash
    git diff commit-1 commit-2
```

### Eliminar commits
```bash
    git reset --soft HEAD~1
    git reset --hard HEAD~1
```

