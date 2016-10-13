<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "products".
 *
 * @property integer $id
 * @property string $name
 * @property string $wine_type
 * @property integer $price
 * @property integer $c_price
 * @property integer $quantity
 * @property string $details
 *
 * @property Orders[] $orders
 */
class Product extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'products';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['name', 'wine_type', 'price', 'c_price', 'quantity', 'details'], 'required'],
            [['price', 'c_price', 'quantity'], 'integer'],
            [['name', 'wine_type'], 'string', 'max' => 55],
            [['details'], 'string', 'max' => 100],
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
            'wine_type' => 'Wine Type',
            'price' => 'Price',
            'c_price' => 'C Price',
            'quantity' => 'Quantity',
            'details' => 'Details',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getOrders()
    {
        return $this->hasMany(Orders::className(), ['product_id' => 'id']);
    }
}
