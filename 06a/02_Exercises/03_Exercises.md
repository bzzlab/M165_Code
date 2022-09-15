### Übung 6.03: Fehlermeldung interpretieren

1. Führen Sie folgende Query aus und interpretieren Sie den Output und versuchen Sie eine Erklärung mit
eigenen Worten und ganzen Sätzen zu erarbeiten.

```
db.users.replaceOne(
  {"name" : "Margaery Baratheon"},
  {"_id": 9, "name": "Margaery Baratheon", "email":     "Margaery.Baratheon@got.es"}
)
```