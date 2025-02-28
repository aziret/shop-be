-- insert products one by one
INSERT INTO "RS_products"
    VALUE {'id': '9eae679b-8397-43d4-b763-d02a23cce2f0', 'title': 'iPhone 14 Pro', 'description': 'The iPhone 14 Pro features a 6.1-inch Super Retina XDR display, A16 Bionic chip, and a 48MP triple-camera system.', 'price': 999}

INSERT INTO "RS_products"
    VALUE {'id': 'c198cb79-b54f-4080-8552-bfc04c40c925', 'title': 'Samsung Galaxy S22', 'description': 'The Samsung Galaxy S22 comes with a 6.1-inch Dynamic AMOLED 2X display, Snapdragon 8 Gen 1 processor, and a triple-camera setup.', 'price': 799}

INSERT INTO "RS_products"
    VALUE {'id': '2b547842-b5f4-4e7a-b13a-1cc0b34d3b87', 'title': 'Google Pixel 7', 'description': 'The Google Pixel 7 offers a 6.3-inch OLED display, Google Tensor G2 chip, and a dual-camera system optimized with AI features.', 'price': 599}

INSERT INTO "RS_products"
    VALUE {'id': 'f3f8be76-9d9e-4f7d-84e4-4b08c5434c99', 'title': 'OnePlus 11', 'description': 'The OnePlus 11 features a 6.7-inch Fluid AMOLED display, Snapdragon 8 Gen 2 processor, and a 50MP triple-camera array.', 'price': 749}

INSERT INTO "RS_products"
    VALUE {'id': 'e66c9aef-1395-4893-b7a7-b6d05e26715b', 'title': 'Samsung Galaxy Z Fold 4', 'description': 'The Samsung Galaxy Z Fold 4 is a foldable phone with a 7.6-inch main display, Snapdragon 8+ Gen 1, and versatile multitasking features.', 'price': 1799}

INSERT INTO "RS_products"
    VALUE {'id': 'b5a41226-8c5a-49e5-98a6-07f3b30c7e7d', 'title': 'Xiaomi 12 Pro', 'description': 'The Xiaomi 12 Pro offers a 6.73-inch AMOLED display, Snapdragon 8 Gen 1, and a 50MP triple-camera system with advanced zoom.', 'price': 899},

INSERT INTO "RS_products"
    VALUE {'id': '5c4f7f64-7285-4788-b7ad-1d6709606251', 'title': 'Sony Xperia 1 IV', 'description': 'The Xperia 1 IV comes with a 6.5-inch 4K OLED display, Snapdragon 8 Gen 1, and pro-level camera features for videography and photography.', 'price': 1599}

INSERT INTO "RS_products"
    VALUE {'id': '5a643b24-fbd9-4c0b-8c6e-58e0d5ea8a11', 'title': 'Oppo Find X5 Pro', 'description': 'The Oppo Find X5 Pro features a 6.7-inch AMOLED display, Snapdragon 8 Gen 1, and a 50MP primary camera with advanced night photography.', 'price': 999}

INSERT INTO "RS_products"
    VALUE {'id': 'ba1c8a12-0605-4176-9387-efdcfb283d3b', 'title': 'Motorola Edge 30 Ultra', 'description': 'The Motorola Edge 30 Ultra comes with a 6.7-inch OLED display, Snapdragon 8+ Gen 1, and a 200MP main camera for high-quality photos.', 'price': 899}

INSERT INTO "RS_products"
    VALUE {'id': '3d93b478-b9cd-4ab0-b54b-b463912eada1', 'title': 'Huawei P50 Pro', 'description': 'The Huawei P50 Pro features a 6.6-inch OLED display, Kirin 9000 chip, and a quad-camera system with advanced Leica optics.', 'price': 1199}

-- insert stock values one by one for each product
INSERT INTO "RS_stocks"
    VALUE {'product_id': '9eae679b-8397-43d4-b763-d02a23cce2f0', 'count': 150}

INSERT INTO "RS_stocks"
    VALUE {'product_id': 'c198cb79-b54f-4080-8552-bfc04c40c925', 'count': 200}

INSERT INTO "RS_stocks"
    VALUE {'product_id': '2b547842-b5f4-4e7a-b13a-1cc0b34d3b87', 'count': 300}

INSERT INTO "RS_stocks"
    VALUE {'product_id': 'f3f8be76-9d9e-4f7d-84e4-4b08c5434c99', 'count': 120}

INSERT INTO "RS_stocks"
    VALUE {'product_id': 'e66c9aef-1395-4893-b7a7-b6d05e26715b', 'count': 50}

INSERT INTO "RS_stocks"
    VALUE {'product_id': 'b5a41226-8c5a-49e5-98a6-07f3b30c7e7d', 'count': 250}

INSERT INTO "RS_stocks"
    VALUE {'product_id': '5c4f7f64-7285-4788-b7ad-1d6709606251', 'count': 80}

INSERT INTO "RS_stocks"
    VALUE {'product_id': '5a643b24-fbd9-4c0b-8c6e-58e0d5ea8a11', 'count': 180}

INSERT INTO "RS_stocks"
    VALUE {'product_id': 'ba1c8a12-0605-4176-9387-efdcfb283d3b', 'count': 130}

INSERT INTO "RS_stocks"
    VALUE {'product_id': '3d93b478-b9cd-4ab0-b54b-b463912eada1', 'count': 60}