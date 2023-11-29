##Express & MariaDB##

## HOW TO USE

#initilize node project#
npm init

#install dependencies:#
$ npm install

#run docker compose for database#
docker-compose up -d

#access database by phpmyadmin#
http://localhost:8080

host: mariadb
user: root
password: root

create a database called 'sistema'

#run sql commands#
CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `username` varchar(40) NOT NULL,
  `firstname` varchar(80) NOT NULL,
  `lastname` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `users` (`username`, `firstname`, `lastname`) VALUES
('danilo', 'Danilo', 'Marcua'),
('joao', 'Joao', 'da Rua e da praça');

CREATE TABLE `books` (
  `id` int(10) UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(40) NOT NULL,
  `pages` INT NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `books` (`name`, `pages`) VALUES
('book of nodejs', 250),
('master of javascript', 450);

#change the app.js if want for testing#

by Danilo Marcus
