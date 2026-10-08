WASTELAND – ASSETS COMPARTIDOS v4
===================================

Sistema de assets compartidos y nombres legibles.

Los objetos que utilizan la misma imagen comparten el mismo PNG.
NO se generan copias innecesarias.

Nombres de imagen:
  weapons_001.png
  armor_001.png
  aid_001.png
  food_001.png
  junk_001.png
  ammo_001.png
  etc.

Cada entrada de items.json contiene:
- id: ID del objeto
- name: nombre del objeto
- category: categoría
- sprite_id: identificador del sprite
- icon_id: identificador del icono
- sprite: ruta del sprite
- icon: ruta del icono

Sprites: 256x256
Iconos: 64x64

El icono es el mismo sprite reducido.
