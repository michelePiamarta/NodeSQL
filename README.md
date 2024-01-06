# Funzionalità
Questa applicazione express permete di connettersi ad un database di un negozio, dove si possono fare 3 operazioni per 3 diversi indumenti:
### 1. Chiedere al server gli indumenti (Metodo HTTP get)
### 2. Inviare al server un nuovo indumento (Metodo HTTP post)
### 3. Rimuovere dal server un indumento (Metodo HTTP delete)


# Avviamento
1. ### Avviare il database
```
sudo service mysql start
```
2. ### Avviare il server node
```
node script.js
```
3. ### Avviare ngrok per connetterci da remoto
```
ngrok http 3000
```
# Comandi Utili
- ### Accedere al DataBase da terminale
```
sudo mysql -u root -p
```

# Timeline Sviluppo
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
    - post trousers
    - post hoodie
    - delete tshirt
    - delete trousers
    - delete hoodie
- creati metodi get
- aggiunto ngrok per semplicità di funzionalità
- creato database
- aggiunto dati iniziali
- pensato come aggiungere le immagini
- postato le immagini su imgur e rispondere alla richiesta con il link
- creati metodi post
- creati metodi delete