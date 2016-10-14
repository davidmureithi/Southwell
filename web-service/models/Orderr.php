<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "orderr".
 *
 * @property string $name
 * @property string $wine_type
 * @property integer $quantity
 */
class Orderr extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'orderr';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['name', 'wine_type', 'quantity'], 'required'],
            [['quantity'], 'integer'],
            [['name', 'wine_type'], 'string', 'max' => 100],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'name' => 'Name',
            'wine_type' => 'Wine Type',
            'quantity' => 'Quantity',
        ];
    }
}
