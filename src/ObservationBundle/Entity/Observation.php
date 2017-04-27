<?php

namespace ObservationBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Observation
 *
 * @ORM\Table(name="observation")
 * @ORM\Entity(repositoryClass="ObservationBundle\Repository\ObservationRepository")
 */
class Observation
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="observation", type="text")
     */
    private $observation;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="postedAt", type="datetime")
     */
    private $postedAt;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="seeAt", type="datetime")
     */
    private $seeAt;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="validatedAt", type="datetime")
     */
    private $validatedAt;

    /**
     * @var bool
     *
     * @ORM\Column(name="validated", type="boolean")
     */
    private $validated;

    /**
     * @ORM\ManyToOne(targetEntity="ObservationBundle\Entity\Birds", inversedBy="observation")
     * @ORM\JoinColumn(nullable=false)
     */
    private $bird;

    /**
     * @ORM\OneToMany(targetEntity="ObservationBundle\Entity\Picture", mappedBy="Observation")
     * @ORM\JoinColumn(nullable=false)
     */
    private $pictures;

    /**
     * @ORM\ManyToOne(targetEntity="ObservationBundle\Entity\Location", inversedBy="observation")
     * @ORM\JoinColumn(nullable=false)
     */
    private $location;


    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set observation
     *
     * @param string $observation
     *
     * @return Observation
     */
    public function setObservation($observation)
    {
        $this->observation = $observation;

        return $this;
    }

    /**
     * Get observation
     *
     * @return string
     */
    public function getObservation()
    {
        return $this->observation;
    }

    /**
     * Set postedAt
     *
     * @param \DateTime $postedAt
     *
     * @return Observation
     */
    public function setPostedAt($postedAt)
    {
        $this->postedAt = $postedAt;

        return $this;
    }

    /**
     * Get postedAt
     *
     * @return \DateTime
     */
    public function getPostedAt()
    {
        return $this->postedAt;
    }

    /**
     * Set seeAt
     *
     * @param \DateTime $seeAt
     *
     * @return Observation
     */
    public function setSeeAt($seeAt)
    {
        $this->seeAt = $seeAt;

        return $this;
    }

    /**
     * Get seeAt
     *
     * @return \DateTime
     */
    public function getSeeAt()
    {
        return $this->seeAt;
    }

    /**
     * Set validatedAt
     *
     * @param \DateTime $validatedAt
     *
     * @return Observation
     */
    public function setValidatedAt($validatedAt)
    {
        $this->validatedAt = $validatedAt;

        return $this;
    }

    /**
     * Get validatedAt
     *
     * @return \DateTime
     */
    public function getValidatedAt()
    {
        return $this->validatedAt;
    }

    /**
     * Set validated
     *
     * @param boolean $validated
     *
     * @return Observation
     */
    public function setValidated($validated)
    {
        $this->validated = $validated;

        return $this;
    }

    /**
     * Get validated
     *
     * @return bool
     */
    public function getValidated()
    {
        return $this->validated;
    }
    /**
     * Constructor
     */
    public function __construct()
    {
        $this->pictures = new \Doctrine\Common\Collections\ArrayCollection();
    }

    /**
     * Set bird
     *
     * @param \ObservationBundle\Entity\Birds $bird
     *
     * @return Observation
     */
    public function setBird(\ObservationBundle\Entity\Birds $bird)
    {
        $this->bird = $bird;

        return $this;
    }

    /**
     * Get bird
     *
     * @return \ObservationBundle\Entity\Birds
     */
    public function getBird()
    {
        return $this->bird;
    }

    /**
     * Add picture
     *
     * @param \ObservationBundle\Entity\Picture $picture
     *
     * @return Observation
     */
    public function addPicture(\ObservationBundle\Entity\Picture $picture)
    {
        $this->pictures[] = $picture;

        return $this;
    }

    /**
     * Remove picture
     *
     * @param \ObservationBundle\Entity\Picture $picture
     */
    public function removePicture(\ObservationBundle\Entity\Picture $picture)
    {
        $this->pictures->removeElement($picture);
    }

    /**
     * Get pictures
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getPictures()
    {
        return $this->pictures;
    }

    /**
     * Set location
     *
     * @param \ObservationBundle\Entity\Location $location
     *
     * @return Observation
     */
    public function setLocation(\ObservationBundle\Entity\Location $location)
    {
        $this->location = $location;

        return $this;
    }

    /**
     * Get location
     *
     * @return \ObservationBundle\Entity\Location
     */
    public function getLocation()
    {
        return $this->location;
    }
}
