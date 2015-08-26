ckend default {
    .host = "127.0.0.1";
    .port = "2368";
}

sub vcl_recv {
    unset req.http.cache-control;
    unset req.http.cookie;
}

sub vcl_fetch {
    unset beresp.http.cache-control;

    set beresp.ttl = 2m;
}
