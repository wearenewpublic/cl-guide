import { useEffect, useState } from "react";

// TODO: Using a global variable is a hack.  We should use a context instead.
var global_url_watcher = null;

export function useLiveUrl() {
    const [url, setUrl] = useState(window.location.href);

    useEffect(() => {
        window.addEventListener('popstate', event => {
            setUrl(window.location.href);
        })

        global_url_watcher = url => {
            setUrl(url);
        }    
    }, []);

    return url;
}

export function gotoUrl(url) {
    history.pushState({url}, '', url);
    if (global_url_watcher) {
        global_url_watcher(url);
    }
}

export function replaceUrl(url) {
    console.log('replaceUrl', url);
    history.replaceState({url}, '', url);
    if (global_url_watcher) {
        global_url_watcher(url);
    }
}
