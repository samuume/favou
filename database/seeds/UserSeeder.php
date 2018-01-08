<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create('da_DK');

        for($i = 1; $i <= 10; $i ++) {

        	$contactid = DB::table('contacts')->insertGetId([
        		'email' => $faker->email(),
        		'phone' => $faker->numberBetween($min = 11111111, $max = 99999999),
        		'mobile' => $faker->numberBetween($min = 11111111, $max = 99999999)
        	]);

        	$locationid = DB::table('locations')->insertGetId([
        		'road' => $faker->address(),
        		'zip' => $faker->postcode(),
        		'city' => $faker->city(),
        		'country' => $faker->country(),
        		'latitude' => $faker->latitude,
        		'longitude' => $faker->longitude,
        	]);

        	DB::table('users')->insert([
	        	'contactid' => $contactid,
	        	'locationid' => $locationid,
	        	'name' => $faker->name(),
	        	'birth' => $faker->dateTimeThisCentury->format('Y-m-d'),
	        	'imageurl' => $faker->imageUrl($width = 200, $height = 200)
	        ]);
        }

    }
}
