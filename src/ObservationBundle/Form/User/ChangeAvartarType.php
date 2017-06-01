<?php


namespace ObservationBundle\Form\User;


use ObservationBundle\Form\Picture\PictureType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ChangeAvartarType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('avatar', PictureType::class)
            ->add('save', SubmitType::class, array(
                'label' => 'Enregistrer',
                'attr' => array(
                    'class' => 'btn btn-xs btn-info'
                )
            ));
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'ObservationBundle\Entity\User'
        ));
    }
}