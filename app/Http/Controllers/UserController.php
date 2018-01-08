<?php

namespace App\Http\Controllers;

use App\User;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
    	return User::With('contact', 'location')->get();
    }

    /**
     * Method to get a specific user
     * @param  int $id 
     * @return Object user
     */
    public function get($id)
    {
    	$user = User::with('contact', 'location')->findOrFail($id);
    	
        return $user;
    }

    public function create(Post $post)
    {

    }

    /**
     * Method to update a user
     * @param  Array $request
     * @return true
     */
    public function update(Request $request)
    {
    	$this->validate($request, [
    		'name' => 'required',
    		'birth' => 'required'
    	]);
    	
    	$user = User::With('contact', 'location')->findOrFail($request->id);
    	
    	$this->updateContact($user, $request);
    	$this->updateLocation($user, $request);

    	$user->update($request->all());
		
    	return $request->all();
    }

    /**
     * Method to delete a user
     * @param  int $id 
     * @return true or 404 
     */
    public function delete($id)
    { 	
    	$user = User::findOrFail($id);
    	$user->delete();

        return "deleted";
    }

    public function updateContact($user, Request $request)
    {
    	$user->contact->email = $request->email;
    	$user->contact->phone = $request->phone;
    	$user->contact->mobile = $request->mobile;
    	$user->contact->save();
    }

    public function updateLocation($user, Request $request)
    {
    	// Do update on google api to get latitude and longitude
    	// Then update 

    	$user->location->road = $request->road;
    	$user->location->zip = $request->zip; 
    	$user->location->city = $request->city; 
    	$user->location->country = $request->country; 
    	//$user->location->latitude = $request->latitude;
    	//$user->location->longitude = $request->longitude; 
    	$user->location->save();
    }
}
