<?php

session_start(); // Inicia la sesión

if (isset($_SESSION['user']) && $_SESSION['user'] === 'administrador') {
    echo 'success';
} else {
    echo 'error';
}
