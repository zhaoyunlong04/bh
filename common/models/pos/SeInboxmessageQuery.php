<?php

namespace common\models\pos;

/**
 * This is the ActiveQuery class for [[SeInboxmessage]].
 *
 * @see SeInboxmessage
 */
class SeInboxmessageQuery extends \yii\db\ActiveQuery
{
    /*public function active()
    {
        $this->andWhere('[[status]]=1');
        return $this;
    }*/

    /**
     * @inheritdoc
     * @return SeInboxmessage[]|array
     */
    public function all($db = null)
    {
        return parent::all($db);
    }

    /**
     * @inheritdoc
     * @return SeInboxmessage|array|null
     */
    public function one($db = null)
    {
        return parent::one($db);
    }
}