# unit_test

if datasize between 131k and 165k , response time > **40ms** 
else response time < **2ms** 

#### install
```
npm install
```

#### startServer
```bash
curl -X PUT --data-binary @config.json --unix-socket /var/run/control.unit.sock http://localhost/config/
```

#### request
```bash
node request.js
```
