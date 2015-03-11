<?php

namespace DashboardHub\Bundle\DevelopmentBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

/**
 * Class AuthController
 * @package DashboardHub\Bundle\DevelopmentBundle\Controller
 */
class AuthController extends Controller
{
    public function loginAction(Request $request)
    {
        return $this->render('DashboardHubDevelopmentBundle:Auth:login.html.twig', [
                'last_username' => 'Mockerton'
            ]
        );
    }
    
    public function loginCheckAction(Request $request)
    {
        // The destination of the login form action
        // It is special and never gets called - Symfony intercepts calls to this action
    }
}
