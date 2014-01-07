# Willkommen

Moin Moin. 

Im Folgenden wird *gründlichst* erklärt, welche Schritte beachtet werden müssen, um ein Skriplet zu erstelen, zu testen oder hochzuladen.

## Neues Skriptlet erstellen

Um ein neues Skriptlet zu erstellen müssen folgende Schritte abgearbeitet werden:
- ggf. Erstellen des Ordners (z.B. bravo, autozeitung, cosmopolitan, etc.)
- Erstellen des Ordners für das Skriptlet (z.B. background.click oder background.color)
- Öffnen der Konsole
- Navigieren zum erstellten Skriptletordner
- Ausführen des Befehls `grunt-init ../../_template`
- Angeben der geforderten Eingaben

Nun sollten im Skriptletordner alle Dateien angelegt sein, die benötigt werden. 
Im Ordner *src* liegt nun eine Datei bereit, in der das Skriptlet enthalten sein soll.

## Skriptlet testen

Um das Skriplet zu testen stehen mehrere Task bzw. Tests zur Verfügung. Diese werden über die Konsole mittels `grunt ` und dem Namen des Tasks/Tests aufgerufen.
*z.B. `grunt jshint`*

## Skriptlet hochladen

Die getesteten und lauffähigen Skriptlets werden auf Gist hochgeladen. Hierzu wurde beim Erstellen des Skriptlet-Projekts bereits nach der GistID gefragt.
Falls noch kein Gist angelegt wurde, muss dies nun getan werden. 
Ist bereits ein Gist angelegt worden, steht die GistID wahrscheinlich in der `package.json`-Datei. Ist dies nicht der Fall, sollte diese nachgepflegt werden. 

Wenn die ID hinterlegt ist, muss über die Konsole `grunt publish` aufgerufen werden.

Have fun!
