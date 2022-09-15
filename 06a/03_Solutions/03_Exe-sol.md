### Übung 6.03: Fehlermeldung interpretieren

1. Führen Sie folgende Query aus und interpretieren Sie den Output und versuchen Sie eine Erklärung mit
eigenen Worten und ganzen Sätzen zu erarbeiten.

```
db.users.replaceOne(
  {"name" : "Margaery Baratheon"},
  {"_id": 9, "name": "Margaery Baratheon", "email":     "Margaery.Baratheon@got.es"}
)
```

#### Solution:
```
Write operation error on server localhost:27017. Write error: WriteError{code=66, message='After applying the update,
the (immutable) field '_id' was found to have been altered to _id: 9', details={}}.
```

Die _id-Felder in MongoDB sind unveränderlich (immutable). Unveränderliche Felder sind wie normale Felder.
Sobald jedoch ein Wert zugewiesen wurde, kann ihr Wert nicht erneut geändert werden. 
Das Feld _id dient als eindeutiger Bezeichner (unique identifier) eines Dokuments und sollte daher nicht geändert werden, 
solange das Dokument existiert.
Ähnlich wie bei Benutzerkonten, welche eine eindeutige Kennung bei Online-Portalen sind.  
Sie können Ihr Passwort oder andere Informationen in Ihrem Profil ändern, 