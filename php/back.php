<?php
    function answer($k,$x,$l,$E){
        if (isset($_SESSION['history'])) {
            $_SESSION['history'] = array();
        }

        return 4*$l*sqrt(3.14*$k*$x*$E);
    }
    function check_value($k,$x,$l,$E){

        !(is_numeric($k) && $k>-100000 && $k<1000000) || //value k (numeric 'cause its text)
        !(is_numeric($x) && $x>-100000 && $x<1000000) || //value x (numeric 'cause its text)
        !(is_numeric($l) && $l>-100000 && $l<1000000) || //value l (numeric 'cause its text)
        !(is_numeric($E) && $k>-100000 && $E<1000000) ; //value E(numeric 'cause its text)

    }
    session_start();
    date_default_timezone_set('Europe/Moscow');
    $currentTime = date("H:i:s");
    $session_start_time = microtime(true); //from start session

$entityBody = file_get_contents('php://input');
$postArray = json_decode($entityBody);
$k = (int) $postArray->kValue;
$x = (int) $postArray->xValue;
$l = (int) $postArray->lValue;
$E = (int) $postArray->EValue;


    if (check_value($k,$x,$l,$E)) {
        http_response_code(400); //error. false format of values
        return;
    }

    $result = answer ($k,$x,$l,$E);

    $running_time = microtime(true) - $session_start_time;

    $output = array( $result );

    if (!isset($_SESSION['history'])) {
        $_SESSION['history'] = array();
    }

    array_push($_SESSION['history'], $output);
    $array[]=$output;

    include "table.php";
