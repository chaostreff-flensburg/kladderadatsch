import { build } from "$service-worker";
import {
  pageCache,
  imageCache,
  staticResourceCache,
  warmStrategyCache,
} from "workbox-recipes";
import { StaleWhileRevalidate } from "workbox-strategies";

// https://developer.chrome.com/docs/workbox/modules/workbox-recipes/#warm-strategy-cache
const strategy = new StaleWhileRevalidate();
const urls = [build];

warmStrategyCache({ urls, strategy });
pageCache();
staticResourceCache();
imageCache();
