<?php

namespace common\models\pos;

/**
 * This is the ActiveQuery class for [[SeHomeworkQuestionPlatform]].
 *
 * @see SeHomeworkQuestionPlatform
 */
class SeHomeworkQuestionPlatformQuery extends \yii\db\ActiveQuery
{
    /*public function active()
    {
        $this->andWhere('[[status]]=1');
        return $this;
    }*/

    /**
     * @inheritdoc
     * @return SeHomeworkQuestionPlatform[]|array
     */
    public function all($db = null)
    {
        return parent::all($db);
    }

    /**
     * @inheritdoc
     * @return SeHomeworkQuestionPlatform|array|null
     */
    public function one($db = null)
    {
        return parent::one($db);
    }
}