<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "book".
 *
 * @property integer $id
 * @property string $title
 * @property string $description
 * @property string $author
 * @property string $publisher
 * @property integer $year
 */
class Book extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'book';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['title', 'author', 'publisher', 'year'], 'required'],
            [['description'], 'string'],
            [['year'], 'integer'],
            [['title'], 'string', 'max' => 255],
            [['author', 'publisher'], 'string', 'max' => 50],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'title' => 'Title',
            'description' => 'Description',
            'author' => 'Author',
            'publisher' => 'Publisher',
            'year' => 'Year',
        ];
    }
}