<?php


namespace ObservationBundle\Controller;


use ObservationBundle\Entity\Bird;
use ObservationBundle\Entity\Observation;
use ObservationBundle\Form\Observation\AddObservationType;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class ObservationController extends Controller
{
    /**
     *  Action de pagination des observations soit générale soit de l'utilisateur
     * @param $status
     * @param $page
     * @param $all
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function paginationAction($status, $page, $all, Request $request)
    {
        // On s'assure qu'il s'agisse d'une requête AJAX
        if($request->isXmlHttpRequest()){
            // On s'asusre que validate et all soient bien des boolean
            $validate = $status == 'true' ? true : false;
            $all = $all == 'true' ? true: false;
            // Si la page est inferieur à 1 on passe tout à null et gérera les erreurs coté affichage étant donné qu'il s'agit de requete AJAX
            if($page < 1){
                $observations = null;
                $nbPage = null;
            }else{
                $em = $this->getDoctrine()->getManager();
                // On récupere la liste des observations et on calcul le nombre de pages maximum en fonction de la limite de 10
                $observations = $em->getRepository('ObservationBundle:Observation')->findObs($validate,$this->getUser(), $page, 10, $all);
                $nbPage = ceil(count($observations) / 10);
                // Si lapage est surperieur au nombre de page ou que le nombre de page est 0, on passe tout à null
                if($nbPage < $page || $nbPage == 0){
                    $observations = null;
                    $nbPage = null;
                }
            }
            // On retourne la même vue quelque soit le device
            return $this->render('ObservationBundle:Observation:page.html.twig', array('observations' => $observations, 'page' => $page, 'nbPage' => $nbPage, 'status' => $status, 'all' => $all));
        }else{
            throw $this->createAccessDeniedException('Vous ne pouvez pas acceder à cette page !');
        }
    }

    /**
     * Action pour générer la pagination des observation d'un oiseau
     * @param Bird $bird
     * @param $page
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function birdPaginationAction(Bird $bird, $page, Request $request)
    {
        // On s'assure d'être en requete AJAX
        if($request->isXmlHttpRequest()){
            if($page < 1){
                $observations = null;
                $nbPage = null;
            }else{
                $em = $this->getDoctrine()->getManager();
                $observations = $em->getRepository('ObservationBundle:Observation')->findsByBird($bird, $page, 4);

                $nbPage = ceil(count($observations) / 4);
                if($nbPage < $page){
                    $observations = null;
                    $nbPage = null;
                }
            }
            // On retourne la même vue quelque soit le device
            return $this->render('@Observation/Observation/bird.page.html.twig', array('observations' => $observations, 'page' => $page, 'nbPage' => $nbPage, 'bird' => $bird));
        }else{
            throw $this->createAccessDeniedException('Vous ne pouvez pas acceder à cette page !');
        }

    }

    public function viewAction(Observation $observation)
    {

        $device = $this->get('mobile_detect.mobile_detector');
        if($device->isMobile()){
            return $this->render('@Observation/Observation/Mobile/view.html.twig');
        }else{
            return $this->render('@Observation/Observation/Desktop/view.html.twig');
        }
    }

    /**
     * Action pour ajouté une observation sur un oiseau
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\RedirectResponse|\Symfony\Component\HttpFoundation\Response
     */
    public function addAction(Request $request)
    {

        $observation = new Observation();
        $em = $this->getDoctrine()->getManager();

        $form = $this->createForm(AddObservationType::class, $observation);

        $form->handleRequest($request);


        if ($form->isSubmitted() && $form->isValid()) {
            $observation->setUser($this->getUser());

            $em->persist($observation);
            $em->flush();


            return $this->redirectToRoute('bird_location', array('id' => $observation->getBird()->getId() ));
        }
        $device = $this->get('mobile_detect.mobile_detector');
        if($device->isMobile()){
            return $this->render(
            'ObservationBundle:Observation:Mobile/add.html.twig', array(
            'form' => $form->createView()));
        }else{
            return $this->render(
            'ObservationBundle:Observation:Desktop/add.html.twig', array(
            'form' => $form->createView()));
        }
    }

    /**
     * @Security(has_role('ROLE_NATURALISTE')
     */
    public function validateAction(Observation $observation)
    {
        // Action simple de mise à jour de l'entity sans vue renvoyant à la page de l'observation

    }

    /**
     * @Security(has_role('ROLE_NATURALISTE)
     */
    public function unvalideAction(Observation $observation)
    {
        // Action simple de mise à jour de l'entity sans vue renvoyant à la page de l'observation

    }
}