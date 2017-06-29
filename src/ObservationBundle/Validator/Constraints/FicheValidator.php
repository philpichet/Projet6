<?php


namespace ObservationBundle\Validator\Constraints;


use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\ConstraintValidator;

class FicheValidator extends ConstraintValidator
{
    public function validate($value, Constraint $constraint)
    {
        if($value->getMaxQuantity() <= $value->getMinQuantity()){
            $this->context->buildViolation($constraint->message)
                ->atPath('maxQuantity')
                ->addViolation();
        }
    }
}
