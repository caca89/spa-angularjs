<?php
date_default_timezone_set('Asia/Jakarta');

$output = ['status'=>'error', 'message'=>'Login gagal.'];

$data = json_decode(file_get_contents('php://input'), TRUE);

if($data) {
	$path_file = '../data/data.json';
	if(file_exists($path_file)) {
		$db = json_decode(file_get_contents($path_file), TRUE);
		if($db) {
			$f_email 	= isset($db['email']) ? $db['email'] : NULL;
			$f_password = isset($db['password']) ? $db['password'] : NULL;
			$email 		= isset($data['email']) ? $data['email'] : NULL;
			$password 	= isset($data['password']) ? $data['password'] : NULL;

			if($email==$f_email AND $password==$f_password) {
				$output = ['status'=>'success', 'message'=>'Login berhasil.'];
			}
		}
	}
}
echo json_encode($output);

?>