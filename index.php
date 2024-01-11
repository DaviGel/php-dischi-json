<?php

// 1) lettura file
$database = file_get_contents(__DIR__ . '/dischi.json');

// 2) struttura php
$dischi = json_decode($database);

// 3) elaborazioni
/*
- print
*/

//show todo
if (isset($_POST['show'])) {
  echo 'show dischi';
  die;
}

header('Content-Type: application/json');
echo json_encode(($dischi));