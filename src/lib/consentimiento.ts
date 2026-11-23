// Utilidades puras para Consentimiento RGPD (Europa / EEE / Reino Unido / Suiza)
// y Google Consent Mode v2 (compatible con Google Tag Manager y Google AdSense).

export const ADSENSE_CLIENT_ID = 'ca-pub-7933111729537978';
export const GTM_CONTAINER_ID = 'GTM-NKFBN6X5';
export const GTM_ANALYTICS_CONTAINER_ID = 'GTM-WKC77GT5';
export const GTM_CONTAINER_IDS: readonly string[] = [GTM_CONTAINER_ID, GTM_ANALYTICS_CONTAINER_ID];
export const CONTACTO_EMAIL = 'lamieldehorus@gmail.com';
export const CONSENT_STORAGE_KEY = 'pc_consentimiento_v1';

export const REGIONES_RGPD_EEE: readonly string[] = [
  'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR',
  'DE', 'GR', 'HU', 'IS', 'IE', 'IT', 'LV', 'LI', 'LT', 'LU',
  'MT', 'NL', 'NO', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE',
  'GB', 'CH'
];

export const ZONAS_EUROPA_PREFIJOS: readonly string[] = [
  'Europe/',
  'Atlantic/Canary',
  'Atlantic/Faroe',
  'Atlantic/Madeira',
  'Atlantic/Azores',
  'Atlantic/Reykjavik'
];

export interface PreferenciasConsentimiento {
  esenciales: true;
  analitica: boolean;
  publicidad: boolean;
  actualizado?: string;
}

export interface EstadoConsentimientoGoogle {
  ad_storage: 'granted' | 'denied';
  ad_user_data: 'granted' | 'denied';
  ad_personalization: 'granted' | 'denied';
  analytics_storage: 'granted' | 'denied';
  functionality_storage: 'granted';
  security_storage: 'granted';
}

export function esZonaHorariaEuropea(timeZone: string | undefined | null): boolean {
  const tz = String(timeZone || '').trim();
  if (!tz) return false;
  return ZONAS_EUROPA_PREFIJOS.some((pref) => tz === pref || tz.startsWith(pref));
}

export function normalizarPreferenciasConsentimiento(
  entrada: Partial<PreferenciasConsentimiento> | null | undefined
): PreferenciasConsentimiento {
  return {
    esenciales: true,
    analitica: Boolean(entrada?.analitica),
    publicidad: Boolean(entrada?.publicidad),
    actualizado: typeof entrada?.actualizado === 'string' && entrada.actualizado ? entrada.actualizado : undefined
  };
}

export function construirEstadoConsentimientoGoogle(
  prefs: Pick<PreferenciasConsentimiento, 'analitica' | 'publicidad'>
): EstadoConsentimientoGoogle {
  const pub = prefs.publicidad ? 'granted' : 'denied';
  const ana = prefs.analitica ? 'granted' : 'denied';
  return {
    ad_storage: pub,
    ad_user_data: pub,
    ad_personalization: pub,
    analytics_storage: ana,
    functionality_storage: 'granted',
    security_storage: 'granted'
  };
}
