<?php

// 1) lettura file
$database = file_get_contents(__DIR__ . '/dischi.json');

// 2) struttura php
$dischi = json_decode($database);

// 3) elaborazioni
/*
- print
*/

$result = $dischi;

//show todo
if (isset($_GET['index'])) {
  $result = $dischi[$_GET['index']];
}

header('Content-Type: application/json');
echo json_encode(($result));