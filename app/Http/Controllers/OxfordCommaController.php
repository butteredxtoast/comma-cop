<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class OxfordCommaController extends Controller
{
    public function index()
    {
        return Inertia::render('OxfordCommaTool');
    }
}
