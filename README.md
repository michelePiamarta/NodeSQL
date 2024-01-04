# Avviamento
1. ### Avviamo il database
```
sudo service mysql start
```
2. ### Avviamo il server node
```
node script.js
```
3. ### Avviamo ngrok per connetterci da remoto
```
ngrok http 3000
```
# Comandi Utili
- ### Accedere al DataBase da terminale
```
sudo mysql -u root -p
```
# Sviluppo
- pensato quali parametri per gestire i dati
    - trousers_id INT AUTO_INCREMENT PRIMARY KEY,
    - image_path VARCHAR(255),
    - name_info VARCHAR(100),
    - short_description VARCHAR(255),
    - long_description TEXT,
    - price DECIMAL(10, 2),
    - discount DECIMAL(2, 0),
    - size_info VARCHAR(10),
    - sex ENUM('Male', 'Female'),
    - material VARCHAR(50),
    - producer_phone VARCHAR(12)
- pensato quali metodi http usare
    - get tshirts
    - get trousers
    - get hoodies
    - post tshirt
    - post trouser
    - post hoodie
    - delete tshirt
    - delete trouser
    - delete hoodie
- creati metodi get
- aggiunto ngrok per semplicità di funzionalità
- creato database
- aggiunto dati iniziali
- pensato come aggiungere le immagini
- postato le immagini su imgur e rispondere alla richiesta con il link
- creati metodi post
- creati metodi delete