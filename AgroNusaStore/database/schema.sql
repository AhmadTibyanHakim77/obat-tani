CREATE TABLE products (
  id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  sku VARCHAR(64) NOT NULL UNIQUE,
  name VARCHAR(180) NOT NULL,
  category VARCHAR(80) NOT NULL,
  description TEXT NOT NULL,
  active_ingredient VARCHAR(180) NOT NULL,
  dosage VARCHAR(220) NOT NULL,
  target_pests JSON NOT NULL,
  image VARCHAR(255) NOT NULL,
  badges JSON NOT NULL,
  price BIGINT UNSIGNED NOT NULL,
  stock INT UNSIGNED NOT NULL,
  rating DECIMAL(2,1) NOT NULL DEFAULT 0.0,
  status ENUM('active', 'draft', 'archived') NOT NULL DEFAULT 'active',
  created_at TIMESTAMP NULL,
  updated_at TIMESTAMP NULL,
  INDEX products_category_index (category)
);

CREATE TABLE orders (
  id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  invoice_number VARCHAR(80) NOT NULL UNIQUE,
  cashier_email VARCHAR(255) NULL,
  customer_name VARCHAR(255) NOT NULL DEFAULT 'Pelanggan Toko',
  payment_bank VARCHAR(40) NOT NULL,
  payment_account_number VARCHAR(80) NOT NULL,
  total BIGINT UNSIGNED NOT NULL,
  status ENUM('draft', 'waiting_payment', 'paid', 'completed') NOT NULL DEFAULT 'completed',
  created_at TIMESTAMP NULL,
  updated_at TIMESTAMP NULL
);

CREATE TABLE order_items (
  id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  order_id BIGINT UNSIGNED NOT NULL,
  product_id BIGINT UNSIGNED NOT NULL,
  quantity INT UNSIGNED NOT NULL,
  unit_price BIGINT UNSIGNED NOT NULL,
  subtotal BIGINT UNSIGNED NOT NULL,
  created_at TIMESTAMP NULL,
  updated_at TIMESTAMP NULL,
  FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
  FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);
