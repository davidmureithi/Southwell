<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "user".
 *
 * @property integer $id
 * @property string $name
 * @property string $email
 * @property integer $contact
 * @property string $username
 * @property resource $avatar
 * @property resource $avatar_default
 * @property string $auth_key
 * @property string $password_hash
 * @property string $password_reset_token
 * @property string $location
 * @property integer $status
 * @property integer $created_at
 * @property integer $updated_at
 *
 * @property Orders[] $orders
 */
class User extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'user';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['name', 'email', 'contact', 'username', 'avatar', 'avatar_default', 'auth_key', 'password_hash', 'created_at', 'updated_at'], 'required'],
            [['contact', 'status', 'created_at', 'updated_at'], 'integer'],
            [['avatar', 'avatar_default'], 'string'],
            [['name', 'location'], 'string', 'max' => 55],
            [['email', 'username', 'password_hash', 'password_reset_token'], 'string', 'max' => 255],
            [['auth_key'], 'string', 'max' => 32],
            [['email'], 'unique'],
            [['username'], 'unique'],
            [['password_reset_token'], 'unique'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'name' => 'Name',
            'email' => 'Email',
            'contact' => 'Contact',
            'username' => 'Username',
            'avatar' => 'Avatar',
            'avatar_default' => 'Avatar Default',
            'auth_key' => 'Auth Key',
            'password_hash' => 'Password Hash',
            'password_reset_token' => 'Password Reset Token',
            'location' => 'Location',
            'status' => 'Status',
            'created_at' => 'Created At',
            'updated_at' => 'Updated At',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getOrders()
    {
        return $this->hasMany(Orders::className(), ['user_id' => 'id']);
    }
}
