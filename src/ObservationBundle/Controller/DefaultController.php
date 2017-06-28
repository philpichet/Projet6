<?php

namespace ObservationBundle\Controller;

use ObservationBundle\Entity\Content;
use ObservationBundle\Entity\Message;
use ObservationBundle\Entity\Picture;
use ObservationBundle\Form\Content\ContentType;
use ObservationBundle\Form\Message\MessageType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();
        $gallery = $em->getRepository('ObservationBundle:Picture')->getPictureGallery();

        $device = $this->get('mobile_detect.mobile_detector');
        if ($device->isMobile() || $device->isTablet()) {

            return $this->render('@Observation/Home/Mobile/home.html.twig', array('gallery' => $gallery));
        }else{
            return $this->render('@Observation/Home/Desktop/home.html.twig', array('gallery' => $gallery));
        }
    }

    public function contactAction(Request $request)
    {
        $message = new Message();
        $message->setPostedAt(new \DateTime());
        $form = $this->createForm(MessageType::class, $message);
        $form->handleRequest($request);
        if($form->isSubmitted() && $form->isValid()){
            $em = $this->getDoctrine()->getManager();
            $em->persist($message);
            $em->flush();
            $this->get('observation.contact.mailer')->sendMessage($message);
            $this->addFlash('success', 'Votre message à bien été envoyer!');
            return $this->redirectToRoute('contact');
        }

        $device = $this->get('mobile_detect.mobile_detector');
        if($device->isMobile() || $device->isTablet()){
            return $this->render('@Observation/Association/Mobile/contact.html.twig', array('form' => $form->createView()));
        }else{
            return $this->render('@Observation/Association/Desktop/contact.html.twig', array('form' => $form->createView()));
        }
    }

    public function faqAction()
    {
        $em = $this->getDoctrine()->getManager();
        $content = $em->getRepository('ObservationBundle:Content')->findOneBy(array('page' => 'faq'));
        $device = $this->get('mobile_detect.mobile_detector');
        if($device->isMobile() || $device->isTablet()){
            return $this->render('@Observation/Association/Mobile/faq.html.twig', array('content' => $content));
        }else{
            return $this->render('@Observation/Association/Desktop/faq.html.twig', array('content' => $content));
        }
    }

    public function editFaqAction(Content $content, Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $form = $this->createForm(ContentType::class, $content);
        $form->handleRequest($request);
        if($form->isValid()){
            $em->persist($content);
            $em->flush();
            return $this->redirectToRoute('faq');
        }
        $device = $this->get('mobile_detect.mobile_detector');
        if($device->isMobile() || $device->isTablet()){
            return $this->render('@Observation/Association/Mobile/faq.edit.html.twig', array('form' => $form->createView()));
        }else{
            return $this->render('@Observation/Association/Desktop/faq.edit.html.twig', array('form' => $form->createView()));
        }
    }

}
