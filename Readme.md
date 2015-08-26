### Dependecies
1. Node.js
2. Bower

```
# Node.js
sudo apt-get install -y nodejs

# Bower
sudo npm install -g bower
```

### Install
```
bower install
cp -R anima/ ghost/content/themes
```

### Configuration
```
cp ghost.conf /etc/nginx/sites-available
ln -s /etc/nginx/sites-available/ghost.conf /etc/nginx/sites-enabled/ghost.conf

cp ghost.vcl /etc/varnish

service nginx restart
service varnish restart
```
