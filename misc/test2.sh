openssl genrsa -out private.pem 2048
openssl rsa -in private.pem -inform pem -out private.der -outform der
openssl pkcs8 -topk8 -in private.der -inform der -out private.key -outform der -nocrypt
openssl rsa -in private.pem -inform pem -out public.key -outform der -pubout