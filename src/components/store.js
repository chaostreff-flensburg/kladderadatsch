import { syncedStore, getYjsValue } from "@syncedstore/core";
import { IndexeddbPersistence } from "y-indexeddb";
import { WebrtcProvider } from "y-webrtc";
import { svelteSyncedStore } from "@syncedstore/svelte";
import { nanoid } from "nanoid";

export const store = syncedStore({ habits: [] });
export const state = svelteSyncedStore(store);

const doc = getYjsValue(store);
let indexeddbProvider;
let webrtcProvider;

// export const disconnect = () => webrtcProvider.disconnect();
// export const connect = () => webrtcProvider.connect();

let keyStorage = window.localStorage;

init();

function init() {
  const query = window.location.search;
  const params = new URLSearchParams(query);
  if (params.has("syncKey")) {
    console.log(params.get("syncKey"));
    keyStorage.setItem("syncKey", params.get("syncKey"));
  }

  let initialKey = keyStorage.getItem("syncKey");
  setSyncKey(initialKey ? initialKey : nanoid());
}

export function getSyncKey() {
  return keyStorage.getItem("syncKey");
}

export function setSyncKey(key) {
  keyStorage.setItem("syncKey", key);

  if (webrtcProvider) {
    webrtcProvider.destroy();
    indexeddbProvider.destroy();
  }
  indexeddbProvider = new IndexeddbPersistence(key, doc);
  webrtcProvider = new WebrtcProvider(key, doc);
}

export function hardReset() {
  webrtcProvider.destroy();
  indexeddbProvider.destroy();
  indexeddbProvider.clearData();
  keyStorage.clear();
  window.location.reload();
}
