<?php
namespace app\controllers;

use yii\rest\ActiveController;

class OrderrController extends ActiveController
{
    public $modelClass = 'app\models\Orderr';
    
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