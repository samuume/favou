<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
	protected $hidden = [
        'created_at', 'updated_at', 'deleted_at'
    ];
	
    public function user()
    {
    	return $this->belongsTo('App\User');
    }
}
