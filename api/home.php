<?php
function bacaHTML($url){
// inisialisasi CURL
$data = curl_init();
// setting CURL
curl_setopt($data, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($data, CURLOPT_URL, $url);
// menjalankan CURL untuk membaca isi file
$hasil = curl_exec($data);
curl_close($data);
return $hasil;
}
$url = 'http://m.bnizona.com/promo/index/21';
$content = bacaHTML($url);
echo $content;
// echo json_encode(['html'=>$content]);
?>