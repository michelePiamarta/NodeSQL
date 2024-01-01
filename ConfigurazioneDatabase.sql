CREATE DATABASE `negozio`;
/*
  Non creo relazioni tra tabelle perchè aggiungerei troppa complessità. Inoltre per facilitare il lavoro sul database uso l'estensione Database Client JDBC
*/
CREATE TABLE tshirts (
    tshirt_id INT AUTO_INCREMENT PRIMARY KEY,
    image_path VARCHAR(255),
    name_info VARCHAR(100),
    short_description VARCHAR(255),
    long_description TEXT,
    price DECIMAL(10, 2),
    discount DECIMAL(2, 0),
    size_info VARCHAR(10),
    sex ENUM('Male', 'Female'),
    material VARCHAR(50),
    producer_phone VARCHAR(12)
);

CREATE TABLE hoodies (
    hoodies_id INT AUTO_INCREMENT PRIMARY KEY,
    image_path VARCHAR(255),
    name_info VARCHAR(100),
    short_description VARCHAR(255),
    long_description TEXT,
    price DECIMAL(10, 2),
    discount DECIMAL(2, 0),
    size_info VARCHAR(10),
    sex ENUM('Male', 'Female'),
    material VARCHAR(50),
    producer_phone VARCHAR(12)
);

CREATE TABLE trousers (
    trousers_id INT AUTO_INCREMENT PRIMARY KEY,
    image_path VARCHAR(255),
    name_info VARCHAR(100),
    short_description VARCHAR(255),
    long_description TEXT,
    price DECIMAL(10, 2),
    discount DECIMAL(2, 0),
    size_info VARCHAR(10),
    sex ENUM('Male', 'Female'),
    material VARCHAR(50),
    producer_phone VARCHAR(12)
);
-- Valori iniziali tabelle
INSERT INTO tshirts (name_info,short_description, long_description, price, discount, size_info, sex, material, producer_phone) 
VALUES 
  ('Cool T-shirt', 'Short and stylish', 'This is a cool T-shirt with a short and stylish design.', 19.99, 5, 'Medium', 'Male', 'Cotton', '123-456-7890'),
  ('Awesome Shirt', 'Comfortable fit', 'An awesome shirt with a comfortable fit for everyday wear.', 24.99, 10, 'Large', 'Female', 'Polyester', '987-654-3210'),
  ('Fantastic Tee', 'Colorful and vibrant', 'A fantastic tee with a colorful and vibrant design.', 14.99, 2, 'Small', 'Female', 'Cotton Blend', '555-123-4567'),
  ('Super Shirt', 'Premium quality', 'This super shirt offers premium quality and durability.', 29.99, 8, 'XL', 'Male', 'Male', '333-888-2222'),
  ('Epic T-shirt', 'Casual elegance', 'An epic T-shirt with casual elegance and a comfortable feel.', 22.99, 3, 'Medium', 'Female', 'Linen', '111-999-4444'),
  ('Great Tee', 'Athletic design', 'This great tee features an athletic design for an active lifestyle.', 17.99, 6, 'Small', 'Male', 'Poly-cotton', '999-333-1111'),
  ('Amazing Shirt', 'Bold and stylish', 'An amazing shirt with a bold and stylish appearance.', 26.99, 12, 'Large', 'Male', 'Female', '444-555-6666'),
  ('Perfect T-shirt', 'Classic and timeless', 'The perfect T-shirt with a classic and timeless design.', 31.99, 15, 'XL', 'Female', 'Modal', '777-222-3333'),
  ('Stylish Tee', 'Urban chic', 'This stylish tee combines urban chic with comfort and versatility.', 20.99, 7, 'Medium', 'Male', 'Jersey', '222-777-5555'),
  ('Casual Shirt', 'Relaxed style', 'A casual shirt with a relaxed style for laid-back occasions.', 23.99, 9, 'Large', 'Male', 'Cotton Blend', '666-444-8888'),
  ('Funky Tee', 'Vibrant and playful', 'A funky tee with vibrant and playful colors for a fun look.', 18.99, 8, 'Small', 'Female', 'Cotton Blend', '111-222-3333'),
  ('Graphic Print Shirt', 'Unique graphic design', 'A shirt with a unique graphic print design for a distinctive style.', 24.99, 15, 'Medium', 'Male', 'Polyester', '444-555-6666'),
  ('Striped Polo', 'Classic striped pattern', 'A classic polo shirt with a stylish striped pattern for a timeless look.', 29.99, 10, 'Large', 'Female', 'Cotton', '777-888-9999'),
  ('Casual V-neck', 'Comfortable V-neck style', 'A casual V-neck tee designed for comfort and a laid-back style.', 22.99, 5, 'XL', 'Male', 'Jersey', '123-456-7890'),
  ('Floral Print T-shirt', 'Elegant floral design', 'An elegant T-shirt with a floral print design for a touch of sophistication.', 34.99, 12, 'Medium', 'Female', 'Silk', '555-666-7777'),
  ('Sporty Raglan Tee', 'Athletic raglan sleeves', 'A sporty tee with raglan sleeves for an athletic and trendy appearance.', 26.99, 8, 'Large', 'Male', 'Poly-cotton', '999-111-2222'),
  ('Vintage Logo Shirt', 'Nostalgic logo design', 'A shirt featuring a vintage logo design for a nostalgic and retro vibe.', 31.99, 18, 'Small', 'Female', 'Denim', '333-444-5555'),
  ('Casual Henley', 'Relaxed Henley style', 'A casual Henley shirt with a relaxed style for comfortable everyday wear.', 27.99, 10, 'XL', 'Male', 'Cotton', '666-777-8888'),
  ('Bold Striped Tee', 'Bold and dynamic stripes', 'A tee with bold and dynamic stripes for a striking and fashionable look.', 19.99, 6, 'Medium', 'Female', 'Polyester', '888-999-0000'),
  ('Pocket Detail Shirt', 'Stylish pocket detail', 'A shirt with a stylish pocket detail for added flair and fashion.', 23.99, 14, 'Large', 'Male', 'Cotton Blend', '222-333-4444');

INSERT INTO tshirts (image_path, name_info, short_description, long_description, price, discount, size_info, sex, material, producer_phone)
VALUES 
('https://i.imgur.com/O3xFSrH.jpeg','Stylish Trousers prova', 'Short and trendy prova', 'This is a stylish pair of trousers with a short and trendy design.', 29.99, 10, 'Medium', 'Male', 'Cotton Blend', '123-456-7890');

INSERT INTO trousers (name_info, short_description, long_description, price, discount, size_info, sex, material, producer_phone)
VALUES 
  ('Stylish Trousers', 'Short and trendy', 'This is a stylish pair of trousers with a short and trendy design.', 29.99, 10, 'Medium', 'Male', 'Cotton Blend', '123-456-7890'),
  ('Casual Pants', 'Comfortable fit', 'Casual pants with a comfortable fit for everyday wear.', 34.99, 15, 'Large', 'Female', 'Denim', '987-654-3210'),
  ('Fashionable Slacks', 'Modern and chic', 'Fashionable slacks with a modern and chic appearance.', 24.99, 5, 'Small', 'Male', 'Polyester', '555-123-4567'),
  ('Business Trousers', 'Professional look', 'Business trousers that offer a professional and polished look.', 39.99, 20, 'XL', 'Female', 'Wool', '333-888-2222'),
  ('Classic Jeans', 'Timeless style', 'Classic jeans with a timeless style for a versatile wardrobe.', 32.99, 12, 'Medium', 'Male', 'Denim', '111-999-4444'),
  ('Sporty Joggers', 'Active lifestyle', 'Sporty joggers designed for an active and athletic lifestyle.', 27.99, 8, 'Small', 'Female', 'Cotton Blend', '999-333-1111'),
  ('Elegant Palazzos', 'Graceful and elegant', 'Elegant palazzos that provide a graceful and elegant appearance.', 36.99, 18, 'Large', 'Male', 'Silk', '444-555-6666'),
  ('Slim Fit Trousers', 'Modern slim fit', 'Slim fit trousers with a modern and stylish slim fit design.', 42.99, 22, 'XL', 'Female', 'Poly-cotton', '777-222-3333'),
  ('Cargo Pants', 'Casual and practical', 'Cargo pants that are both casual and practical for various occasions.', 31.99, 14, 'Medium', 'Male', 'Canvas', '222-777-5555'),
  ('Relaxed Chinos', 'Easygoing style', 'Relaxed chinos for an easygoing and laid-back style.', 37.99, 16, 'Large', 'Female', 'Cotton', '666-444-8888'),
  ('Stylish Trousers', 'Modern and sleek', 'Stylish trousers with a modern and sleek design for a sophisticated look.', 39.99, 8, 'Medium', 'Male', 'Polyester', '111-222-3333'),
  ('Casual Joggers', 'Comfortable jogger style', 'Casual joggers designed for comfort and a laid-back jogger style.', 29.99, 10, 'Large', 'Female', 'Cotton Blend', '444-555-6666'),
  ('Classic Khakis', 'Timeless khaki style', 'Classic khakis with a timeless style for a versatile and refined wardrobe.', 34.99, 12, 'Small', 'Male', 'Khaki', '777-888-9999'),
  ('Formal Dress Pants', 'Elegant formal wear', 'Formal dress pants that offer an elegant and polished appearance for formal occasions.', 49.99, 15, 'XL', 'Female', 'Wool', '123-456-7890'),
  ('Denim Jeans', 'Casual denim style', 'Casual denim jeans with a comfortable fit for everyday casual wear.', 27.99, 6, 'Medium', 'Male', 'Denim', '555-666-7777'),
  ('Cargo Trousers', 'Functional cargo design', 'Cargo trousers with a functional design and multiple pockets for added functionality.', 37.99, 14, 'Large', 'Female', 'Canvas', '999-111-2222'),
  ('Slim Fit Chinos', 'Modern slim fit', 'Slim fit chinos with a modern and stylish design for a contemporary look.', 42.99, 18, 'Small', 'Male', 'Cotton Blend', '333-444-5555'),
  ('Casual Linen Pants', 'Breathable linen fabric', 'Casual linen pants made from breathable linen fabric for a comfortable and casual style.', 31.99, 10, 'XL', 'Female', 'Linen', '666-777-8888'),
  ('Athletic Track Pants', 'Sporty track style', 'Athletic track pants with a sporty design for an active and athletic lifestyle.', 24.99, 8, 'Medium', 'Male', 'Polyester', '888-999-0000'),
  ('Wide Leg Palazzo Pants', 'Fashionable wide leg', 'Fashionable palazzo pants with a wide leg design for a trendy and chic appearance.', 35.99, 12, 'Large', 'Female', 'Rayon', '222-333-4444');

INSERT INTO hoodies (name_info, short_description, long_description, price, discount, size_info, sex, material, producer_phone)
VALUES 
  ('Casual Hoodie', 'Comfortable and versatile', 'A casual hoodie that provides comfort and versatility for everyday wear.', 49.99, 10, 'Medium', 'Male', 'Cotton Blend', '111-222-3333'),
  ('Sporty Pullover', 'Sporty pullover style', 'A sporty pullover hoodie designed for an active and athletic lifestyle.', 59.99, 15, 'Large', 'Female', 'Polyester', '444-555-6666'),
  ('Graphic Print Hoodie', 'Eye-catching graphics', 'A hoodie with eye-catching graphic prints for a bold and trendy look.', 39.99, 5, 'Small', 'Male', 'Cotton', '777-888-9999'),
  ('Cozy Zip-Up', 'Cozy zip-up design', 'A cozy zip-up hoodie designed for warmth and comfort in colder weather.', 64.99, 20, 'XL', 'Female', 'Fleece', '123-456-7890'),
  ('Classic Hooded Sweatshirt', 'Classic hoodie style', 'A classic hooded sweatshirt that offers a timeless and casual style.', 54.99, 12, 'Medium', 'Male', 'Cotton Blend', '555-666-7777'),
  ('Urban Streetwear Hoodie', 'Urban street style', 'An urban streetwear hoodie with a stylish and edgy design for a streetwise look.', 47.99, 8, 'Large', 'Female', 'Polyester', '999-111-2222'),
  ('Colorblock Hoodie', 'Vibrant color blocks', 'A hoodie with vibrant color blocks for a playful and trendy appearance.', 56.99, 18, 'Small', 'Male', 'Cotton Blend', '333-444-5555'),
  ('Hooded Sweater', 'Warm and stylish', 'A hooded sweater that provides warmth and style for colder seasons.', 69.99, 10, 'XL', 'Female', 'Wool', '666-777-8888'),
  ('Athleisure Hoodie', 'Athletic leisure style', 'An athleisure hoodie that combines athletic and leisure styles for a versatile look.', 52.99, 14, 'Medium', 'Male', 'Polyester', '888-999-0000'),
  ('Graphic Hooded Jacket', 'Graphic details', 'A hooded jacket with graphic details for a bold and distinctive appearance.', 63.99, 16, 'Large', 'Female', 'Cotton Blend', '222-333-4444'),
  ('Street Style Hoodie', 'Edgy street style', 'A hoodie with edgy street style for those who want to make a statement.', 45.99, 9, 'Small', 'Male', 'Polyester', '111-222-3333'),
  ('Comfy Pullover', 'Cozy pullover design', 'A comfy pullover hoodie designed for maximum coziness and relaxation.', 58.99, 13, 'Medium', 'Female', 'Cotton Blend', '444-555-6666'),
  ('Minimalist Hoodie', 'Simple and minimalist', 'A minimalist hoodie for those who prefer a simple and clean design.', 42.99, 7, 'Large', 'Male', 'Cotton', '777-888-9999'),
  ('Fleece-lined Hoodie', 'Warm fleece lining', 'A hoodie with warm fleece lining for added comfort during colder seasons.', 67.99, 11, 'XL', 'Female', 'Fleece', '123-456-7890'),
  ('Casual Hooded Sweater', 'Casual and cozy', 'A casual hooded sweater for a cozy and laid-back style.', 49.99, 15, 'Medium', 'Male', 'Cotton Blend', '555-666-7777'),
  ('Colorful Zip-Up Hoodie', 'Colorful and vibrant', 'A colorful zip-up hoodie with a vibrant design for a lively and energetic look.', 53.99, 8, 'Large', 'Female', 'Polyester', '999-111-2222'),
  ('Hooded Cardigan', 'Stylish cardigan design', 'A hooded cardigan that combines style and comfort for a chic appearance.', 46.99, 18, 'Small', 'Male', 'Cotton Blend', '333-444-5555'),
  ('Striped Hoodie', 'Bold striped pattern', 'A hoodie with a bold striped pattern for a trendy and fashionable look.', 55.99, 10, 'XL', 'Female', 'Polyester', '666-777-8888'),
  ('Casual Hoodie', 'Versatile and casual', 'A versatile and casual hoodie for everyday wear in various settings.', 51.99, 14, 'Medium', 'Male', 'Cotton Blend', '888-999-0000'),
  ('Graphic Print Hoodie', 'Artistic graphic design', 'A hoodie with an artistic graphic design for those who appreciate unique aesthetics.', 62.99, 16, 'Large', 'Female', 'Polyester', '222-333-4444');