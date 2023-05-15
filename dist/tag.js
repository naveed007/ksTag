function getCookieConsent() {
    return window.document.cookie.split('; ').reduce((r, v) => {
        const parts = v.split('=');
        return parts[0] === '_swb_consent_' ? decodeURIComponent(parts[1]) : r;
    }, '');
}