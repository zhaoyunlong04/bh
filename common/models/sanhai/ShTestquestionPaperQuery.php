<?php

namespace common\models\sanhai;

/**
 * This is the ActiveQuery class for [[ShTestquestionPaper]].
 *
 * @see ShTestquestionPaper
 */
class ShTestquestionPaperQuery extends \yii\db\ActiveQuery
{
    /*public function active()
    {
        $this->andWhere('[[status]]=1');
        return $this;
    }*/

    /**
     * @inheritdoc
     * @return ShTestquestionPaper[]|array
     */
    public function all($db = null)
    {
        return parent::all($db);
    }

    /**
     * @inheritdoc
     * @return ShTestquestionPaper|array|null
     */
    public function one($db = null)
    {
        return parent::one($db);
    }
}