<?php
date_default_timezone_set('Asia/Jakarta');

$output = ['status'=>'error', 'message'=>'Daftar gagal.'];

$data = file_get_contents('php://input');

if($data) {
	$path_file = '../data/data.json';
	$file_data = fopen($path_file, 'w');
	fwrite($file_data, $data);
	fclose($file_data);
}
echo json_encode($output);

?>