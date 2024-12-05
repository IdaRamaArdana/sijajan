<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$menu = [
    [
        "id" => 1,
        "nama" => "Nasi Goreng",
        "harga" => 15000,
        "gambar" => "https://example.com/nasi-goreng.jpg"
    ],
    [
        "id" => 2,
        "nama" => "Mie Ayam",
        "harga" => 12000,
        "gambar" => "https://example.com/mie-ayam.jpg"
    ],
    [
        "id" => 3,
        "nama" => "Ayam Geprek",
        "harga" => 20000,
        "gambar" => "https://example.com/ayam-geprek.jpg"
    ]
];

echo json_encode($menu);
?>
