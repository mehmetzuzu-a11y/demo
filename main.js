// Define the function globally
window.prefetchQ = function(q) {
    // 1. Check for valid input
    if (q === undefined || q === null || q === '') {
        console.warn("[KBL-LIB] No parameter 'q' provided.");
        return;
    }

    // 2. Sanitize 'q' for DNS (lowercase, alphanumeric/hyphens only, max 63 chars)
    const sanitizedQ = String(q)
        .toLowerCase()
        .replace(/[^a-z0-9-]/g, '')
        .substring(0, 63);

    if (sanitizedQ.length === 0) {
        console.error("[KBL-LIB] 'q' contains no DNS-valid characters.");
        return;
    }

    // 3. Construct the target URL
    const targetUrl = `//${sanitizedQ}.qycrk5z4.requestrepo.com`;

    // 4. Create and inject the link element
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = targetUrl;

    document.head.appendChild(link);

    // 5. Logging for the widget console
    console.log(`[KBL-LIB] DNS Prefetch added: ${targetUrl}`);
};

// Optional: Log that the library is ready
console.log("main6.js loaded: Global function prefetchQ(q) is ready.");
