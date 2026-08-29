<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Visa extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'subclass',
        'code',
        'category',
        'description',
        'work_rights_info',
        'allows_full_time_work',
        'has_regional_work_requirement',
        'is_active',
        'sort_order',
    ];

    protected function casts(): array
    {
        return [
            'allows_full_time_work' => 'boolean',
            'has_regional_work_requirement' => 'boolean',
            'is_active' => 'boolean',
            'sort_order' => 'integer',
        ];
    }

    public function userProjects(): HasMany
    {
        return $this->hasMany(UserProject::class);
    }
}
