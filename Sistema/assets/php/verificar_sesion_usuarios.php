<?php

session_start(); // Inicia la sesión

if (isset($_SESSION['user'])) {
    // echo 'success';
    echo isset($_SESSION['user']);
} else {
    echo 'error';
}
