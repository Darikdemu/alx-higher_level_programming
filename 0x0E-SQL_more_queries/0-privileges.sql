-- Creates the MySQL server user: user_0d_1
CREATE USER IF NOT EXISTS 'usr_0d_1'@'localhost'
IDENTIFIED BY 'user_0d_1_pwd';
GRANT ALL PRIVILEGES ON *.* O 'user_0d_1'@'localhost'
