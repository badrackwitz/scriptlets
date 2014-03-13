# Willkommen

Moin Moin.  

Im Folgenden wird erklärt, welche Schritte beachtet werden müssen, um ein Skriplet zu erstellen, zu testen oder hochzuladen.


## Setup
Folgende Vorarbeiten müssen getätigt werden, um mit diesem Projekt arbeiten zu können.

1. [Node.JS](http://nodejs.org/) installieren
2. [GruntJS](http://gruntjs.com/) installieren mit `npm install -g grunt-cli`
3. [grunt-init](http://gruntjs.com/project-scaffolding) installieren mit `npm install -g grunt-init`
4. Projekt in lokales Repository klonen.
5. Mit Hilfe der Konsole in den Projekt-Ordner navigieren.
6. Plugins und Module installieren mit `npm install`


## Namenskonvention

Beim Erstellen eines Skriptlets wird der Name des Projektes abgefragt. Hierbei ist bitte folgende Namenskonvention einzuhalten:  

`[background.click|background.color].[Kürzel des Objekts(Bsp.: azo, bvo, tvm...)]`  
Diese Bennenung sollte auch beim Anlegen des Gists befolgt werden, um eine reibungslose Kommunikation zu ermöglichen.  


Diese Richtline sollte auch bereits beim Erstellen des Ordners innerhalb des Projektes eingehalten werden. Unterordner des Objekts werden dann nach der Funktion des Skriptlets bezeichnet.  
z.B.: background.click  

## Neues Skriptlet erstellen

Um ein neues Skriptlet zu erstellen müssen folgende Schritte abgearbeitet werden:  
1. ggf. Erstellen des Ordners (z.B. bravo, autozeitung, cosmopolitan, etc.)  
2. Erstellen des Ordners für das Skriptlet (z.B. background.click oder background.color)  
3. Öffnen der Konsole  
4. Navigieren zum erstellten Skriptletordner  
5. Ausführen des Befehls `grunt-init ../../_template`  
6. Angeben der geforderten Eingaben  

Nun sollten im Skriptletordner alle Dateien angelegt sein, die benötigt werden.   
Im Ordner *src* liegt nun eine Datei bereit, in der das Skriptlet enthalten sein soll.  

## Skriptlet testen

Um das Skriplet zu testen stehen mehrere Task bzw. Tests zur Verfügung. Diese werden über die Konsole mittels `grunt ` und dem Namen des Tasks/Tests aufgerufen.  
*z.B. `grunt jshint`*. Falls kein Taskname angegeben wird, wird eine Kette vordefinierter Tasks als default ausgeführt.  

## Skriptlet hochladen

Die getesteten und lauffähigen Skriptlets werden auf Gist hochgeladen. Hierzu wurde beim Erstellen des Skriptlet-Projekts bereits nach der GistID gefragt.  
Falls noch kein Gist angelegt wurde, muss dies nun getan werden.  
Ist bereits ein Gist angelegt worden, steht die GistID wahrscheinlich in der `package.json`-Datei. Ist dies nicht der Fall, sollte diese nachgepflegt werden.  

Wenn die ID hinterlegt ist, kann über die Konsole `grunt publish` aufgerufen werden. Hierbei wird die Datei mit dem Namen (z.B.:) `background.color.build.html` hochgeladen.  


Have fun!
