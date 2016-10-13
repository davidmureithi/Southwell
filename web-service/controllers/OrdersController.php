<?php
namespace app\controllers;

use yii\rest\ActiveController;

class OrdersController extends ActiveController
{
    public $modelClass = 'app\models\Orders';
    
    public function behaviors()
    {
        return 
        \yii\helpers\ArrayHelper::merge(parent::behaviors(), [
            'corsFilter' => [
                'class' => \yii\filters\Cors::className(),
            ],
        ]);
    }
}