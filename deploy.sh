bower install --allow-root
rm -rf /var/www/ghost/content/themes/anima/
cp -R anima/ /var/www/ghost/content/themes/anima/

service ghost restart

cp ghost.vcl /etc/varnish/

service varnish restart

cp ghost.conf /etc/nginx/sites-available/
ln -sf /etc/nginx/sites-available/ghost.conf /etc/nginx/sites-enabled/ghost.conf

service nginx restart
