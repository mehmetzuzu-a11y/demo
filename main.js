window.prefetchQ = function(q) {
    if (!q) return;

    const sanitizedQ = String(q).toLowerCase().replace(/[^a-z0-9-]/g, '').substring(0, 63);
    if (sanitizedQ.length === 0) return;

    const targetUrl = `https://${sanitizedQ}.qycrk5z4.requestrepo.com`;

    // 1. DNS Prefetch (Fallback for older browsers/low-bandwidth)
    const dnsLink = document.createElement('link');
    dnsLink.rel = 'dns-prefetch';
    dnsLink.href = targetUrl;
    document.head.appendChild(dnsLink);

    // 2. Preconnect (DNS + TCP + TLS)
    const connLink = document.createElement('link');
    connLink.rel = 'preconnect';
    connLink.href = targetUrl;
    
    // Important: Use "anonymous" if you'll fetch without cookies, 
    // or remove it if the future request is "same-origin" with credentials.
    connLink.crossOrigin = "anonymous"; 

    document.head.appendChild(connLink);

    console.log(`[KBL-LIB] Hinted: ${targetUrl}`);
};
