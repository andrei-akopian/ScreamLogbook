# PHP

How to get a baisic php website running.

- [PHP.net](https://www.php.net/) and [installation](https://www.php.net/downloads.php)
- [Wikipedia](https://en.wikipedia.org/wiki/PHP)
- [PLDB](https://pldb.io/concepts/php.html)

PHP is a **Template** language. It sort of has it's own html tag. `<?php [code] ?>`

`index.php`
```php
<!DOCTYPE html>
<html>
  <body>
    <h1>Current Time:</h1>
    <?php
        $current_time = date("h:i:sa");
        echo "<p>Current time is $current_time</p>";
    ?>
  </body>
</html>
```

If you run `php index.php > output.html & open output.html` you will get an html with the current time substituted.

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>Current Time:</h1>
    <p>Current time is 04:28:45pm</p>
  </body>
</html>
```

In fact, it doesn't even need to be HTML.

```php
Hello World at <?php
    $current_time = date("h:i:sa");
    echo "$current_time";
?>.

```

Compiles into `Hello World at 04:38:02pm.` just fine.

PHP just replaces it's own code with the code's output.

## Server

A server that automatically compiles all requested php files is a builtin command.

`php -S localhost:8000`

## SQLite

[SQLite comes out of the box](https://stackoverflow.com/questions/5041737/how-to-connect-to-a-sqlite3-db-with-php)

```php
<?php
$db = new SQLite3('sqlite3db.db');

$results = $db->query('select * from db');
while ($row = $results->fetchArray()) {
var_dump($row);
}
?>
```
