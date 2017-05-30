<?php


namespace ObservationBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Class Fiche
 * @package ObservationBundle\Entity
 *
 * @ORM\Table(name="fiche")
 * @ORM\Entity(repositoryClass="ObservationBundle\Repository\FicheRepository")
 */
class Fiche
{
    /**
     * @ORM\Column(type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;

    /**
     * @ORM\Column(name="min_quantity",type="integer")
     */
    protected $minQuantity;

    /**
     * @ORM\Column(name="max_quantity", type="integer")
     */
    protected $maxQuantity;

    /**
     * @ORM\Column(type="text")
     */
    protected $descritpion;

    /**
     * @ORM\Column(type="text")
     */
    protected $status;


    /**
     * Get id
     *
     * @return integer
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Get minQuantity
     *
     * @return integer
     */
    public function getMinQuantity()
    {
        return $this->minQuantity;
    }

    /**
     * Set minQuantity
     *
     * @param integer $minQuantity
     *
     * @return Fiche
     */
    public function setMinQuantity($minQuantity)
    {
        $this->minQuantity = $minQuantity;

        return $this;
    }

    /**
     * Get maxQuantity
     *
     * @return integer
     */
    public function getMaxQuantity()
    {
        return $this->maxQuantity;
    }

    /**
     * Set maxQuantity
     *
     * @param integer $maxQuantity
     *
     * @return Fiche
     */
    public function setMaxQuantity($maxQuantity)
    {
        $this->maxQuantity = $maxQuantity;

        return $this;
    }

    /**
     * Get descritpion
     *
     * @return string
     */
    public function getDescritpion()
    {
        return $this->descritpion;
    }

    /**
     * Set descritpion
     *
     * @param string $descritpion
     *
     * @return Fiche
     */
    public function setDescritpion($descritpion)
    {
        $this->descritpion = $descritpion;

        return $this;
    }

    /**
     * Get status
     *
     * @return string
     */
    public function getStatus()
    {
        return $this->status;
    }

    /**
     * Set status
     *
     * @param string $status
     *
     * @return Fiche
     */
    public function setStatus($status)
    {
        $this->status = $status;

        return $this;
    }
}
