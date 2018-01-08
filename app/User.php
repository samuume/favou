<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;
    use SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'birth', 'imageurl'
    ];

    protected $hidden = [
        'contactid', 'locationid', 'created_at', 'updated_at', 'deleted_at'
    ];  


    public function contact()
    {
        return $this->hasOne('App\Contact', 'id', 'contactid');
    }

    public function location()
    {
        return $this->hasOne('App\Location', 'id', 'locationid');
    }
}
