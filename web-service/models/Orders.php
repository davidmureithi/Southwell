<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "orders".
 *
 * @property integer $id
 * @property string $product_name
 * @property string $wine_type
 * @property integer $quantity
 * @property string $created_at
 */
class Orders extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'orders';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['wine_type', 'quantity'], 'required'],
            [['quantity'], 'integer'],
            [['created_at'], 'safe'],
            [['product_name'], 'string', 'max' => 100],
            [['wine_type'], 'string', 'max' => 55],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'product_name' => 'Product Name',
            'wine_type' => 'Wine Type',
            'quantity' => 'Quantity',
            'created_at' => 'Created At',
        ];
    }
}
