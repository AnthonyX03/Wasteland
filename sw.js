const CACHE = 'wasteland-v190';
const AUDIO_CACHE = 'wasteland-audio-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './img/player-face.png',
  './img/enemies/icons/Asesino_de_la_Hermandad.png',
  './img/enemies/icons/Assaultron_defectuosa.png',
  './img/enemies/icons/Behemoth_mutante.png',
  './img/enemies/icons/Bestia_mutada.png',
  './img/enemies/icons/Bestia_mutada_alfa.png',
  './img/enemies/icons/Bestia_mutada_pequena.png',
  './img/enemies/icons/Cazador_del_Yermo.png',
  './img/enemies/icons/Centinela_del_Enclave.png',
  './img/enemies/icons/Centinela_robotico.png',
  './img/enemies/icons/Colonos_perdidos.png',
  './img/enemies/icons/Comerciante_solitario.png',
  './img/enemies/icons/Courser_del_Instituto.png',
  './img/enemies/icons/Curandero_itinerante.png',
  './img/enemies/icons/Devorador_de_muerte.png',
  './img/enemies/icons/Drone_Zetan.png',
  './img/enemies/icons/Granjero_del_yermo.png',
  './img/enemies/icons/Mensajero_civil.png',
  './img/enemies/icons/Mercenario_del_Yermo.png',
  './img/enemies/icons/Morador_de_refugio.png',
  './img/enemies/icons/Moscas_de_sangre.png',
  './img/enemies/icons/Mr_Handy_hostil.png',
  './img/enemies/icons/Necrofago.png',
  './img/enemies/icons/Necrofago_brillante.png',
  './img/enemies/icons/Necrofago_debil.png',
  './img/enemies/icons/Necrofago_experimento.png',
  './img/enemies/icons/Necrofago_feroz.png',
  './img/enemies/icons/Peregrino_herido.png',
  './img/enemies/icons/Perro_salvaje.png',
  './img/enemies/icons/Protectron_oxidado.png',
  './img/enemies/icons/Rata_irradiada.png',
  './img/enemies/icons/Refugiado_desarmado.png',
  './img/enemies/icons/Robot_de_seguridad.png',
  './img/enemies/icons/Robot_defectuoso.png',
  './img/enemies/icons/Robot_militar.png',
  './img/enemies/icons/Sanguinario.png',
  './img/enemies/icons/Sanguinario_alfa.png',
  './img/enemies/icons/Sanguinario_joven.png',
  './img/enemies/icons/Saqueador.png',
  './img/enemies/icons/Saqueador_armado.png',
  './img/enemies/icons/Saqueador_con_escopeta.png',
  './img/enemies/icons/Saqueador_con_tuberia.png',
  './img/enemies/icons/Saqueador_de_elite.png',
  './img/enemies/icons/Saqueador_jefe.png',
  './img/enemies/icons/Saqueador_novato.png',
  './img/enemies/icons/Saqueador_nuclear.png',
  './img/enemies/icons/Saqueador_psicopata.png',
  './img/enemies/icons/Saqueador_veterano.png',
  './img/enemies/icons/Sentry_Bot_danado.png',
  './img/enemies/icons/Sonda_de_abduccion.png',
  './img/enemies/icons/Supermutante.png',
  './img/enemies/icons/Supermutante_brutal.png',
  './img/enemies/icons/Supermutante_con_tablon.png',
  './img/enemies/icons/Supermutante_francotirador.png',
  './img/enemies/icons/Supermutante_inestable.png',
  './img/enemies/icons/Supermutante_novato.png',
  './img/enemies/icons/Supermutante_senor_de_la_guerra.png',
  './img/enemies/icons/Synth_Gen-1.png',
  './img/enemies/icons/Synth_Gen-1_armado.png',
  './img/enemies/icons/Synth_Gen-2.png',
  './img/enemies/icons/Synth_Gen-2_infiltrado.png',
  './img/enemies/icons/Synth_Gen-3.png',
  './img/enemies/icons/Synth_Gen-3_Cazador.png',
  './img/enemies/icons/Synth_defectuoso.png',
  './img/enemies/icons/Topo_mutante.png',
  './img/enemies/icons/Viajero_desarmado.png',
  './img/enemies/icons/Zetan_aniquilador.png',
  './img/enemies/icons/Zetan_centinela.png',
  './img/enemies/icons/Zetan_comandante.png',
  './img/enemies/icons/Zetan_de_elite.png',
  './img/enemies/icons/Zetan_experimental.png',
  './img/enemies/icons/Zetan_explorador.png',
  './img/enemies/icons/Zetan_genetico.png',
  './img/enemies/icons/Zetan_inquisidor.png',
  './img/enemies/icons/Zetan_soldado.png',
  './img/enemies/icons/Zetan_tecnico.png',
  './img/enemies/combat/Asesino_de_la_Hermandad.png',
  './img/enemies/combat/Assaultron_defectuosa.png',
  './img/enemies/combat/Behemoth_mutante.png',
  './img/enemies/combat/Bestia_mutada.png',
  './img/enemies/combat/Bestia_mutada_alfa.png',
  './img/enemies/combat/Bestia_mutada_pequena.png',
  './img/enemies/combat/Cazador_del_Yermo.png',
  './img/enemies/combat/Centinela_del_Enclave.png',
  './img/enemies/combat/Centinela_robotico.png',
  './img/enemies/combat/Colonos_perdidos.png',
  './img/enemies/combat/Comerciante_solitario.png',
  './img/enemies/combat/Courser_del_Instituto.png',
  './img/enemies/combat/Curandero_itinerante.png',
  './img/enemies/combat/Devorador_de_muerte.png',
  './img/enemies/combat/Drone_Zetan.png',
  './img/enemies/combat/Granjero_del_yermo.png',
  './img/enemies/combat/Mensajero_civil.png',
  './img/enemies/combat/Mercenario_del_Yermo.png',
  './img/enemies/combat/Morador_de_refugio.png',
  './img/enemies/combat/Moscas_de_sangre.png',
  './img/enemies/combat/Mr_Handy_hostil.png',
  './img/enemies/combat/Necrofago.png',
  './img/enemies/combat/Necrofago_brillante.png',
  './img/enemies/combat/Necrofago_debil.png',
  './img/enemies/combat/Necrofago_experimento.png',
  './img/enemies/combat/Necrofago_feroz.png',
  './img/enemies/combat/Peregrino_herido.png',
  './img/enemies/combat/Perro_salvaje.png',
  './img/enemies/combat/Protectron_oxidado.png',
  './img/enemies/combat/Rata_irradiada.png',
  './img/enemies/combat/Refugiado_desarmado.png',
  './img/enemies/combat/Robot_de_seguridad.png',
  './img/enemies/combat/Robot_defectuoso.png',
  './img/enemies/combat/Robot_militar.png',
  './img/enemies/combat/Sanguinario.png',
  './img/enemies/combat/Sanguinario_alfa.png',
  './img/enemies/combat/Sanguinario_joven.png',
  './img/enemies/combat/Saqueador.png',
  './img/enemies/combat/Saqueador_armado.png',
  './img/enemies/combat/Saqueador_con_escopeta.png',
  './img/enemies/combat/Saqueador_con_tuberia.png',
  './img/enemies/combat/Saqueador_de_elite.png',
  './img/enemies/combat/Saqueador_jefe.png',
  './img/enemies/combat/Saqueador_novato.png',
  './img/enemies/combat/Saqueador_nuclear.png',
  './img/enemies/combat/Saqueador_psicopata.png',
  './img/enemies/combat/Saqueador_veterano.png',
  './img/enemies/combat/Sentry_Bot_danado.png',
  './img/enemies/combat/Sonda_de_abduccion.png',
  './img/enemies/combat/Supermutante.png',
  './img/enemies/combat/Supermutante_brutal.png',
  './img/enemies/combat/Supermutante_con_tablon.png',
  './img/enemies/combat/Supermutante_francotirador.png',
  './img/enemies/combat/Supermutante_inestable.png',
  './img/enemies/combat/Supermutante_novato.png',
  './img/enemies/combat/Supermutante_senor_de_la_guerra.png',
  './img/enemies/combat/Synth_Gen-1.png',
  './img/enemies/combat/Synth_Gen-1_armado.png',
  './img/enemies/combat/Synth_Gen-2.png',
  './img/enemies/combat/Synth_Gen-2_infiltrado.png',
  './img/enemies/combat/Synth_Gen-3.png',
  './img/enemies/combat/Synth_Gen-3_Cazador.png',
  './img/enemies/combat/Synth_defectuoso.png',
  './img/enemies/combat/Topo_mutante.png',
  './img/enemies/combat/Viajero_desarmado.png',
  './img/enemies/combat/Zetan_aniquilador.png',
  './img/enemies/combat/Zetan_centinela.png',
  './img/enemies/combat/Zetan_comandante.png',
  './img/enemies/combat/Zetan_de_elite.png',
  './img/enemies/combat/Zetan_experimental.png',
  './img/enemies/combat/Zetan_explorador.png',
  './img/enemies/combat/Zetan_genetico.png',
  './img/enemies/combat/Zetan_inquisidor.png',
  './img/enemies/combat/Zetan_soldado.png',
  './img/enemies/combat/Zetan_tecnico.png'
];
const AUDIO_ASSETS = [
  './audio/RadioWasteland1.mp3',
  './audio/RadioWasteland2.mp3',
  './audio/RadioWasteland3.mp3',
  './audio/RadioNewVegas1.mp3',
  './audio/RadioNewVegas2.mp3',
  './audio/RadioNewVegas3.mp3',
  './audio/EnclaveRadio1.mp3',
  './audio/EnclaveRadio2.mp3',
  './audio/EnclaveRadio3.mp3',
  './audio/EnclaveRadio4.mp3',
  './audio/EnclaveRadio5.mp3',
  './audio/EnclaveRadio6.mp3',
  './audio/EnclaveRadio7.mp3',
  './audio/EnclaveRadio8.mp3',
  './audio/AmbientMap.mp3',
  './audio/CasinoStrip.mp3',
  './audio/Buy.mp3'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    for (const url of ASSETS) {
      try { await cache.add(url); } catch (e) {}
    }
    const ac = await caches.open(AUDIO_CACHE);
    for (const url of AUDIO_ASSETS) {
      try { await ac.add(url); } catch (e) {}
    }
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((k) => (k !== CACHE && k !== AUDIO_CACHE) ? caches.delete(k) : null))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const isAudio = /\.(mp3|ogg|wav|m4a)(\?|$)/i.test(url.pathname) || url.pathname.indexOf('/audio/') !== -1;
  const isHTML = req.mode === 'navigate' || url.pathname.endsWith('.html') || url.pathname.endsWith('/') || url.pathname.endsWith('index.html', 'nuka-cap.png', 'ticket-nuka.png', 'nuka-token.png', 'ticket-cz.png', 'other/comandos.txt', 'other/id.txt');

  if (isAudio) {
    event.respondWith((async () => {
      const cache = await caches.open(AUDIO_CACHE);
      const cached = await cache.match(req) || await cache.match(url.pathname) || await cache.match('./audio/' + url.pathname.split('/').pop());
      if (cached) return cached;
      try {
        const res = await fetch(req);
        if (res && res.ok) {
          try { await cache.put(req, res.clone()); } catch (e) {}
        }
        return res;
      } catch (e) {
        return cached || Response.error();
      }
    })());
    return;
  }

  if (isHTML) {
    event.respondWith(
      fetch(req, { cache: 'no-store' }).then((res) => {
        if (res && res.ok) {
          const clone = res.clone();
          caches.open(CACHE).then((cache) => cache.put(req, clone));
        }
        return res;
      }).catch(() => caches.match(req).then((c) => c || caches.match('./index.html')))
    );
    return;
  }

  event.respondWith(
    caches.match(req).then((cached) => {
      const fetched = fetch(req).then((res) => {
        if (res && res.ok && req.url.startsWith(self.location.origin)) {
          const clone = res.clone();
          caches.open(CACHE).then((cache) => cache.put(req, clone));
        }
        return res;
      }).catch(() => cached);
      return cached || fetched;
    })
  );
});


// Cache dinámico de sprites de enemigos
self.addEventListener('fetch', (event) => {
  const url = event.request.url;
  if (url.includes('/img/enemies/')) {
    event.respondWith(
      caches.open(CACHE).then((cache) =>
        cache.match(event.request).then((cached) => {
          if (cached) return cached;
          return fetch(event.request).then((res) => {
            if (res && res.ok) cache.put(event.request, res.clone());
            return res;
          }).catch(() => cached);
        })
      )
    );
  }
});
