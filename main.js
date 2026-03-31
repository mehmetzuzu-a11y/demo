window.prefetchQ = function(q) {
    if (!q) return;

    const sanitizedQ = String(q).toLowerCase().replace(/[^a-z0-9-]/g, '').substring(0, 63);
    if (sanitizedQ.length === 0) return;

    const targetUrl = `https://${sanitizedQ}.qycrk5z4.requestrepo.com`;

    const link = document.createElement('link');
    link.rel = 'preconnect'; // Switch to preconnect
    link.href = targetUrl;
    
    // Crucial for preconnect to work for most fetch/XHR requests
    link.crossOrigin = "anonymous"; 

    document.head.appendChild(link);

    console.log(`[KBL-LIB] Preconnect established: ${targetUrl}`);
};
