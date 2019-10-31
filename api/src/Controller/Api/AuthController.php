<?php

namespace App\Controller\Api;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class AuthController extends AbstractController
{

    public function me () {
        return $this->getUser();
    }

}
