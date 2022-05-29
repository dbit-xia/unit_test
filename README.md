# unit_test



#### startServer
```bash
curl -X PUT --data-binary @config.json --unix-socket /var/run/control.unit.sock http://localhost/config/
```

#### request
```bash
node request.js
```
