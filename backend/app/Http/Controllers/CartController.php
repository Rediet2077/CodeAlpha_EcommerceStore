<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use Illuminate\Http\Request;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $carts = Cart::with('product')->where('user_id', auth()->id())->get();
        return response()->json($carts);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'product_id' => 'required|exists:products,id',
            'quantity' => 'sometimes|integer|min:1',
        ]);

        $cart = Cart::updateOrCreate(
            ['user_id' => auth()->id(), 'product_id' => $data['product_id']],
            ['quantity' => $data['quantity'] ?? 1]
        );

        return response()->json($cart, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Cart $cart)
    {
        return response()->json($cart->load('product'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Cart $cart)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Cart $cart)
    {
        $this->authorize('update', $cart);
        $data = $request->validate([
            'quantity' => 'required|integer|min:1',
        ]);
        $cart->update($data);
        return response()->json($cart);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Cart $cart)
    {
        $this->authorize('delete', $cart);
        $cart->delete();
        return response()->json(['message' => 'Deleted']);
    }
}
